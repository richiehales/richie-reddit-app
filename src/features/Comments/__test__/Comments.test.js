import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import { Provider } from 'react-redux';
import configureStore from 'redux-mock-store';
import { MemoryRouter } from 'react-router-dom';
import { Comments } from '../Comments';
import thunk from 'redux-thunk';
import { setButtons } from '../commentsSlice';

const mockStore = configureStore([thunk]);

const initialState = {
  comments: {
    comments: {
      data: {
        children: [
          { data: { id: '1', body: 'This is comment 1 text', author: 'Author 1' } },
          { data: { id: '2', body: 'This is comment 2 text', author: 'Author 2' } },
        ],
      },
    },
  },
    commentsButtonsDisplay: 'Hide Comments',
    selectedComments: 'Mock Selected Comments',
    selectedCommentsTitle: '',
};


test('renders comment body ', () => {
  const store = mockStore(initialState);

  const { getByText } = render(
    <Provider store={store}>
      <MemoryRouter>
        <Comments />
      </MemoryRouter>
    </Provider>
  );

  expect(getByText('This is comment 1 text')).toBeInTheDocument();
});


test('renders author', () => {
  const store = mockStore(initialState);

  const { getByText } = render(
    <Provider store={store}>
      <MemoryRouter>
        <Comments />
      </MemoryRouter>
    </Provider>
  );

  expect(getByText('Author 1')).toBeInTheDocument();
});


test('renders comment count', () => {
  const store = mockStore(initialState);

  const { getByText } = render(
    <Provider store={store}>
      <MemoryRouter>
        <Comments />
      </MemoryRouter>
    </Provider>
  );

  expect(getByText('2 comments')).toBeInTheDocument();
});


test('setButtons action dispatched on button click', () => {
  const store = mockStore(initialState);

  const { getByText } = render(
    <Provider store={store}>
      <MemoryRouter>
        <Comments />
      </MemoryRouter>
    </Provider>
  );
  
  const button = getByText('Posts')
  fireEvent.click(button);

  const actions = store.getActions();
  const expectedAction = setButtons('Show Comments');
  console.log('Expected Action:', expectedAction);
  
  console.log('Actions:', actions);

  expect(actions).toContainEqual(expectedAction);
});
