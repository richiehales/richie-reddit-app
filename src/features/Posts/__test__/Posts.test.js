import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import { Provider } from 'react-redux';
import configureStore from 'redux-mock-store';
import { MemoryRouter } from 'react-router-dom';
import { Posts } from '../Posts';
import { setSelectedComments, setButtons, setSelectedCommentsTitle } from '../../Comments/commentsSlice';

const mockStore = configureStore([]);

const initialState = {
  posts: {
    posts: {
      data: {
        children: [
          { data: { id: '1', title: 'Post 1 Title', selftext: 'Post 1 Content', url: 'url1', author: 'Author 1', permalink: 'Post 1 Permalink' } },
          { data: { id: '2', title: 'Post 2 Title', selftext: 'Post 2 Content', url: 'url2', author: 'Author 2', permalink: 'Post 2 Permalink' } },
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

const initialStateWithSearchTerm = {
  posts: {
    posts: {
      data: {
        children: [
          { data: { id: '1', title: 'Post 1 Title', selftext: 'Content 1', url: 'url1', author: 'Author 1' } },
          { data: { id: '2', title: 'Post 2 Title', selftext: 'Content 2', url: 'url2', author: 'Author 2' } },
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


test('Renders posts title in posts component', () => {
  const store = mockStore(initialState);

  const { getByText } = render(
    <Provider store={store}>
      <MemoryRouter>
        <Posts />
      </MemoryRouter>
    </Provider>
  );

  expect(getByText('Post 1 Title')).toBeInTheDocument();
});


test('Renders posts content in posts component', () => {
  const store = mockStore(initialState);

  const { getByText } = render(
    <Provider store={store}>
      <MemoryRouter>
        <Posts />
      </MemoryRouter>
    </Provider>
  );

  expect(getByText('Post 1 Content')).toBeInTheDocument();
});


test('Renders posts count in posts component', () => {
  const store = mockStore(initialState);

  const { getByText } = render(
    <Provider store={store}>
      <MemoryRouter>
        <Posts />
      </MemoryRouter>
    </Provider>
  );

  expect(getByText('2 posts')).toBeInTheDocument();
});


test('Renders post number in posts component', () => {
  const store = mockStore(initialState);

  const { getByText } = render(
    <Provider store={store}>
      <MemoryRouter>
        <Posts />
      </MemoryRouter>
    </Provider>
  );

  expect(getByText('Post 1')).toBeInTheDocument();
});


test('Renders posts count in posts component', () => {
  const store = mockStore(initialState);

  const { getByText } = render(
    <Provider store={store}>
      <MemoryRouter>
        <Posts />
      </MemoryRouter>
    </Provider>
  );

  expect(getByText('2 posts')).toBeInTheDocument();
});


test('Renders subreddit title in posts component when searchTerm is empty', () => {
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


test('Renders searchterm in posts component when searchTerm is not empty', () => {
  const store = mockStore(initialStateWithSearchTerm);

  const { getByText } = render(
    <Provider store={store}>
      <MemoryRouter>
        <Posts />
      </MemoryRouter>
    </Provider>
  );

  expect(getByText('Searchterm: Mock search term')).toBeInTheDocument();
});


test('Comments button in posts component - setButtons action dispatched on button click', () => {
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


test('Comments button in posts component - setSelectedComments action dispatched on button click', () => {
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
  const expectedAction = setSelectedComments('Post 1 Permalink');

  expect(actions).toContainEqual(expectedAction);
});


test('Comments button in posts component - setSelectedCommentsTitle action dispatched on button click', () => {
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
  const expectedAction = setSelectedCommentsTitle('Post 1 Title');

  expect(actions).toContainEqual(expectedAction);
});


