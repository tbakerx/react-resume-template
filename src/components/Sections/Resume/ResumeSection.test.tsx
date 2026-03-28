import {render, screen} from '@testing-library/react';
import ResumeSection from './ResumeSection';

describe('ResumeSection', () => {
  it('renders the title correctly', () => {
    const title = 'Experience';
    render(<ResumeSection title={title}>Content</ResumeSection>);

    const titleElement = screen.getByText(title);
    expect(titleElement).toBeInTheDocument();
    expect(titleElement.tagName).toBe('H2');
  });

  it('renders children correctly', () => {
    const childrenText = 'This is the content';
    render(
      <ResumeSection title="Test Title">
        <div>{childrenText}</div>
      </ResumeSection>
    );

    expect(screen.getByText(childrenText)).toBeInTheDocument();
  });

  it('has the correct layout classes', () => {
    const {container} = render(<ResumeSection title="Test">Content</ResumeSection>);
    const outerDiv = container.firstChild;
    expect(outerDiv).toHaveClass('grid', 'grid-cols-1', 'md:grid-cols-4');
  });
});
