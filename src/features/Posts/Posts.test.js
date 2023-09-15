import React from 'react';
import { render } from '@testing-library/react';
import { Provider } from 'react-redux';
import { store } from '../../store/store';
import { Posts } from './Posts';

test('renders learn Subreddit', () => {
  const { getByText } = render(
    <Provider store={store}>
      <Posts />
    </Provider>
  );

  expect(getByText(/Subreddit/i)).toBeInTheDocument();
});
