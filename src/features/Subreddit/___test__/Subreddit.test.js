import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import { Provider } from 'react-redux';
import configureStore from 'redux-mock-store';
import { MemoryRouter } from 'react-router-dom';
import  { SubReddit } from '../SubReddit';
import thunk from 'redux-thunk';
import { setButtons } from '../../Comments/commentsSlice';
import { setSelectedSubreddit, setSearch } from '../../Posts/postsSlice';

const middlewares = [thunk];
const mockStore = configureStore(middlewares);

const initialState = {
    posts: {
      selectedSubreddit: 'r/pics/'
    },
    subReddits: {
      posts: {
        data: {
          children: [
            { data: { display_name: 'Subreddit Button 1', display_name_prefixed: 'Button 1 Prefixed' } },
            { data: { display_name: 'Subreddit Button 2', display_name_prefixed: 'Button 2 Prefixed' } },
          ],
        },
      },
    },
    comments: {
      commentsButtonsDisplay: 'Hide Comments',
    },
  };


  test('Renders subreddit button in Subreddit component', () => {
    const store = mockStore(initialState);
  
    const { getByText } = render(
      <Provider store={store}>
        <MemoryRouter>
          <SubReddit />
        </MemoryRouter>
      </Provider>
    );
  
    expect(getByText('Subreddit Button 1')).toBeInTheDocument();
  });


  test('Subreddit button in subreddit component - setButtons action dispatched on button click', () => {
    const store = mockStore(initialState);
  
    const { getByText } = render(
      <Provider store={store}>
        <MemoryRouter>
          <SubReddit />
        </MemoryRouter>
      </Provider>
    );
    
    const button = getByText('Subreddit Button 1')
    fireEvent.click(button);
  
    const actions = store.getActions();
    const expectedAction = setButtons('Show Comments');
  
    expect(actions).toContainEqual(expectedAction);
  });


  
  test('Subreddit button in subreddit component - setSelectedSubreddit action dispatched on button click', () => {
    const store = mockStore(initialState);
  
    const { getByText } = render(
      <Provider store={store}>
        <MemoryRouter>
          <SubReddit />
        </MemoryRouter>
      </Provider>
    );
    
    const button = getByText('Subreddit Button 1')
    fireEvent.click(button);
  
    const actions = store.getActions();
    const expectedAction = setSelectedSubreddit('Button 1 Prefixed');
  
    expect(actions).toContainEqual(expectedAction);
  });


  test('Subreddit button in subreddit component - setSearch action dispatched on button click', () => {
    const store = mockStore(initialState);
  
    const { getByText } = render(
      <Provider store={store}>
        <MemoryRouter>
          <SubReddit />
        </MemoryRouter>
      </Provider>
    );
    
    const button = getByText('Subreddit Button 1')
    fireEvent.click(button);
  
    const actions = store.getActions();
    const expectedAction = setSearch('');
  
    expect(actions).toContainEqual(expectedAction);
  });