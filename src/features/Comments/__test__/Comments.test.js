import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import { Provider } from 'react-redux';
import configureStore from 'redux-mock-store';
import { MemoryRouter } from 'react-router-dom';
import { Comments } from '../Comments';
import thunk from 'redux-thunk';
import { setButtons } from '../commentsSlice';

const middlewares = [thunk];
const mockStore = configureStore(middlewares);

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
    commentsButtonsDisplay: 'Hide Comments',
    selectedComments: 'Mock Selected Comments',
    selectedCommentsTitle: 'Mock Comments Title',
  },
};


test('Renders comment count in comment component ', () => {
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


test('Renders comment title in components component', () => {
  const store = mockStore(initialState);

  const { getByText } = render(
    <Provider store={store}>
      <MemoryRouter>
        <Comments />
      </MemoryRouter>
    </Provider>
  );

  expect(getByText('Mock Comments Title')).toBeInTheDocument();
});


test('Renders comment number in comments component ', () => {
  const store = mockStore(initialState);

  const { getByText } = render(
    <Provider store={store}>
      <MemoryRouter>
        <Comments />
      </MemoryRouter>
    </Provider>
  );

  expect(getByText('Comment 1')).toBeInTheDocument();
});


test('Renders comment body in comments component ', () => {
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


test('Renders author in comments component', () => {
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


test('Posts button in comments component - setButtons action dispatched on button click', () => {
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

  expect(actions).toContainEqual(expectedAction);
});
