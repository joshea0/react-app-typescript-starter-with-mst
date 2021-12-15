import { render, screen } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';

import App from './App';

test('renders the home page', () => {
  render(
    <BrowserRouter>
      <App />
    </BrowserRouter>,
  );
  const linkElement = screen.getByText(/Home/i);
  expect(linkElement).toBeInTheDocument();
});
