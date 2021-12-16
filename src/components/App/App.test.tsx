import { render, screen } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import { Provider, rootStore } from 'stores/RootStore';

import App from './App';

test('renders the home page', () => {
  render(
    <Provider value={rootStore}>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </Provider>,
  );
  const linkElement = screen.getByText(/Home/i);
  expect(linkElement).toBeInTheDocument();
});
