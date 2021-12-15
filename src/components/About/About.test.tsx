import { render, screen } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';

import About from './About';

describe('the About component', () => {
  test('renders', () => {
    render(
      <BrowserRouter>
        <About />
      </BrowserRouter>,
    );
    const linkElement = screen.getByText(/Who are we/i);
    expect(linkElement).toBeInTheDocument();
  });
});
