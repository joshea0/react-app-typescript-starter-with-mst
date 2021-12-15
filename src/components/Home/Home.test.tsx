import { render, screen } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';

import Home from './Home';

describe('the Home component', () => {
  test('renders', () => {
    render(
      <BrowserRouter>
        <Home />
      </BrowserRouter>,
    );
    const linkElement = screen.getByText(/Home/i);
    expect(linkElement).toBeInTheDocument();
  });
});
