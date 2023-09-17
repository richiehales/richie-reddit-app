import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import { Provider } from 'react-redux';
import configureStore from 'redux-mock-store';
import { MemoryRouter } from 'react-router-dom';
import { Posts } from '../Posts';
import { setButtons } from '../../Comments/commentsSlice';

const mockStore = configureStore([]);

const initialState = {
  posts: {
    posts: {
      data: {
        children: [
          { data: { id: '1', title: 'Post 1', selftext: 'Content 1', url: 'url1', author: 'Author 1' } },
          { data: { id: '2', title: 'Post 2', selftext: 'Content 2', url: 'url2', author: 'Author 2' } },
        ],
      },
    },
    searchTerm: '',
    selectedSubreddit: 'r/pics',
  },
  comments: {
    commentsButtonsDisplay: 'Show Comments',
  },
};

const initialStateWithSearcTerm = {
  posts: {
    posts: {
      data: {
        children: [
          { data: { id: '1', title: 'Post 1', selftext: 'Content 1', url: 'url1', author: 'Author 1' } },
          { data: { id: '2', title: 'Post 2', selftext: 'Content 2', url: 'url2', author: 'Author 2' } },
        ],
      },
    },
    searchTerm: 'Mock search term',
    selectedSubreddit: 'r/pics',
  },
  comments: {
    commentsButtonsDisplay: 'Show Comments',
  },
};


test('renders Subreddit when searchTerm is empty', () => {
  const store = mockStore(initialState);

  const { getByText } = render(
    <Provider store={store}>
      <MemoryRouter>
        <Posts />
      </MemoryRouter>
    </Provider>
  );

  expect(getByText('Subreddit: r/pics')).toBeInTheDocument();
});


test('renders Searchterm when searchTerm is not empty', () => {
  const store = mockStore(initialStateWithSearcTerm);

  const { getByText } = render(
    <Provider store={store}>
      <MemoryRouter>
        <Posts />
      </MemoryRouter>
    </Provider>
  );

  expect(getByText('Searchterm: Mock search term')).toBeInTheDocument();
});


test('Posts button dispatch', () => {
  const store = mockStore(initialState);

  const { getAllByText } = render(
    <Provider store={store}>
      <MemoryRouter>
        <Posts />
      </MemoryRouter>
    </Provider>
  );
  
  const button = getAllByText('Comments')
  fireEvent.click(button[0]);

  const actions = store.getActions();
  const expectedAction = setButtons('Hide Comments');

  expect(actions).toContainEqual(expectedAction);
});