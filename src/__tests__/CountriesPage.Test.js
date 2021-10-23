import React from 'react';
import { Provider } from 'react-redux';
import renderer from 'react-test-renderer';
import { BrowserRouter as Router } from 'react-router-dom';
import CountryCard from '../pages/CountriesPage';
import store from '../redux/ConfigStore';

describe('Home snapshot', () => {
  test('renders correctly', () => {
    const tree = renderer
      .create(
        <Router>
          <Provider store={store}>
            <CountryCard />
          </Provider>
        </Router>,
      )
      .toJSON();
    expect(tree).toMatchSnapshot();
  });
});