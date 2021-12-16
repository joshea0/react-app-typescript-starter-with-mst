import { render, screen } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import { Provider, rootStore } from 'stores/RootStore';

import Home from './Home';

describe('the Home component', () => {
  test('renders', () => {
    render(
      <Provider value={rootStore}>
        <BrowserRouter>
          <Home />
        </BrowserRouter>
      </Provider>,
    );
    const linkElement = screen.getByText(/Home/i);
    expect(linkElement).toBeInTheDocument();
  });
});
