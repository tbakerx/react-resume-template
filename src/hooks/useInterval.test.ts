import {renderHook} from '@testing-library/react';

import useInterval from './useInterval';

describe('useInterval', () => {
  beforeEach(() => {
    jest.useFakeTimers();
  });

  afterEach(() => {
    jest.clearAllTimers();
    jest.useRealTimers();
  });

  it('should call the callback periodically', () => {
    const callback = jest.fn();
    const delay = 1000;
    renderHook(() => useInterval(callback, delay));

    expect(callback).not.toBeCalled();

    jest.advanceTimersByTime(delay);
    expect(callback).toHaveBeenCalledTimes(1);

    jest.advanceTimersByTime(delay);
    expect(callback).toHaveBeenCalledTimes(2);
  });

  it('should not call the callback if delay is null', () => {
    const callback = jest.fn();
    renderHook(() => useInterval(callback, null));

    jest.advanceTimersByTime(10000);
    expect(callback).not.toBeCalled();
  });

  it('should update the callback without resetting the interval', () => {
    const callback1 = jest.fn();
    const callback2 = jest.fn();
    const delay = 1000;

    const {rerender} = renderHook(({callback}) => useInterval(callback, delay), {
      initialProps: {callback: callback1},
    });

    jest.advanceTimersByTime(500);

    rerender({callback: callback2});

    jest.advanceTimersByTime(500);

    expect(callback1).not.toBeCalled();
    expect(callback2).toHaveBeenCalledTimes(1);
  });

  it('should reset the interval when delay changes', () => {
    const callback = jest.fn();
    const {rerender} = renderHook(({delay}) => useInterval(callback, delay), {
      initialProps: {delay: 1000 as number | null},
    });

    jest.advanceTimersByTime(500);

    rerender({delay: 2000});

    jest.advanceTimersByTime(500);
    expect(callback).not.toBeCalled();

    jest.advanceTimersByTime(1500);
    expect(callback).toHaveBeenCalledTimes(1);
  });

  it('should clear interval on unmount', () => {
    const callback = jest.fn();
    const delay = 1000;
    const {unmount} = renderHook(() => useInterval(callback, delay));

    unmount();

    jest.advanceTimersByTime(delay);
    expect(callback).not.toBeCalled();
  });
});
