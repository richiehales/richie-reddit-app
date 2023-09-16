import React from 'react';
import { render } from '@testing-library/react';
import { Provider } from 'react-redux';
import { store } from '../../../store/store';
import { Posts } from '../Posts';

test('renders Subreddit in Posts component', () => {
  const { getByText } = render(
    <Provider store={store}>
      <Posts />
    </Provider>
  );

  expect(getByText(/Subreddit/i)).toBeInTheDocument();
});

test('renders Author in Posts component', () => {
  const { getByText } = render(
    <Provider store={store}>
      <Posts />
    </Provider>
  );

  expect(getByText(/Subreddit/i)).toBeInTheDocument();
});
