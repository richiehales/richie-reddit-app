import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import { Provider } from 'react-redux';
import configureStore from 'redux-mock-store';
import { MemoryRouter } from 'react-router-dom';
import { Posts } from '../Posts';
import { setButtons } from '../../Comments/commentsSlice';

const mockStore = configureStore([]);



test('renders Subreddit when searchTerm is empty', () => {
  const initialState = {
    posts: {
      posts: {
        data: {
          children: [
            { data: { id: '1', title: 'Post 1', selftext: 'Content 1', url: 'url1', author: 'Author 1' } },
            { data: { id: '2', title: 'Post 2', selftext: 'Content 2', url: 'url2', author: 'Author 2' } },
            // Add more posts as needed
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
  const initialState = {
    posts: {
      posts: {
        data: {
          children: [
            { data: { id: '1', title: 'Post 1', selftext: 'Content 1', url: 'url1', author: 'Author 1' } },
            { data: { id: '2', title: 'Post 2', selftext: 'Content 2', url: 'url2', author: 'Author 2' } },
            // Add more posts as needed
          ],
        },
      },
      searchTerm: 'Mock search term', // Set a non-empty searchTerm
      selectedSubreddit: 'r/pics',
    },
    comments: {
      commentsButtonsDisplay: 'Show Comments',
    },
  };

  const store = mockStore(initialState);

  const { getByText } = render(
    <Provider store={store}>
      <MemoryRouter>
        <Posts />
      </MemoryRouter>
    </Provider>
  );

  // Check if the text "Searchterm: YourSearchTermHere" is present in the component
  expect(getByText('Searchterm: Mock search term')).toBeInTheDocument();
});



test('Posts button dispatch', () => {
  
  const initialState = {
    posts: {
      posts: {
        data: {
          children: [
            { data: { id: '1', title: 'Post 1', selftext: 'Content 1', url: 'url1', author: 'Author 1' } },
            { data: { id: '2', title: 'Post 2', selftext: 'Content 2', url: 'url2', author: 'Author 2' } },
            // Add more posts as needed
          ],
        },
      },
      searchTerm: 'Mock search term', // Set a non-empty searchTerm
      selectedSubreddit: 'r/pics',
    },
    comments: {
      commentsButtonsDisplay: 'Show Comments',
    },

  };

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