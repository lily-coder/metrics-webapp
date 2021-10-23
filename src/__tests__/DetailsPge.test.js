import React from 'react';
import { Provider } from 'react-redux';
import renderer from 'react-test-renderer';
import { BrowserRouter as Router } from 'react-router-dom';
import DescripionCard from '../pages/DetailsPage.js';
import store from '../redux/ConfigStore.js';

const country = 'Kenya';
it('renders correctly', () => {
  const tree = renderer
    .create(
      <Router>
        <Provider store={store}>
          <DescripionCard country={country} />
        </Provider>
      </Router>,
    )
    .toJSON();
  expect(tree).toMatchSnapshot();
});