import {act, renderHook} from '@testing-library/react';

import useWindow from './useWindow';

describe('useWindow', () => {
  beforeEach(() => {
    jest.useFakeTimers();
    // Use defineProperty because innerWidth/Height are read-only in some JSDOM versions
    Object.defineProperty(window, 'innerWidth', {configurable: true, value: 1024, writable: true});
    Object.defineProperty(window, 'innerHeight', {configurable: true, value: 768, writable: true});
  });

  afterEach(() => {
    jest.useRealTimers();
  });

  it('should return initial window size after mount', () => {
    const {result} = renderHook(() => useWindow());

    // On mount, handleSize is called immediately.
    expect(result.current).toEqual({width: 1024, height: 768});
  });

  it('should update window size on resize', () => {
    const {result} = renderHook(() => useWindow());

    // Update window size
    act(() => {
      window.innerWidth = 800;
      window.innerHeight = 600;
      window.dispatchEvent(new Event('resize'));
    });

    // Throttled by 100ms
    act(() => {
      jest.advanceTimersByTime(100);
    });

    expect(result.current).toEqual({width: 800, height: 600});
  });

  it('should throttle resize events', () => {
    const {result} = renderHook(() => useWindow());

    // Advance time to ensure next call is throttled
    act(() => {
      jest.advanceTimersByTime(200);
    });

    // First resize
    act(() => {
      window.innerWidth = 500;
      window.dispatchEvent(new Event('resize'));
    });
    // Should update immediately as it's the first call after 200ms
    expect(result.current.width).toBe(500);

    // Second resize immediately after
    act(() => {
      window.innerWidth = 600;
      window.dispatchEvent(new Event('resize'));
    });
    // Should NOT update yet
    expect(result.current.width).toBe(500);

    // Advance time
    act(() => {
      jest.advanceTimersByTime(100);
    });
    // Should now be updated
    expect(result.current.width).toBe(600);
  });

  it('should clean up event listener on unmount', () => {
    const removeEventListenerSpy = jest.spyOn(window, 'removeEventListener');
    const {unmount} = renderHook(() => useWindow());

    unmount();

    expect(removeEventListenerSpy).toHaveBeenCalledWith('resize', expect.any(Function));
    removeEventListenerSpy.mockRestore();
  });
});
