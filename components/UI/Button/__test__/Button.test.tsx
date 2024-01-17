import { render, screen } from '@testing-library/react';
import Button from '..';

describe('Page', () => {
  it('renders a heading', () => {
    render(<Button>Hello</Button>)

    const heading = screen.getByText("Hello")

    expect(heading).toBeInTheDocument()
  })
})