import React from 'react';
import { render } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import { store } from './store/store';
import App from './App';

test('renders Web Developer', () => {
  const { getByText } = render(
    <MemoryRouter initialEntries={['/']}> {/* Use MemoryRouter */}
      <Provider store={store}>
        <App />
      </Provider>
    </MemoryRouter>
  );

  expect(getByText(/Web Developer/i)).toBeInTheDocument();
});