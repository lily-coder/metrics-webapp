import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import { render, screen } from '@testing-library/react';
import renderer from 'react-test-renderer';
import Navbar from '../components/Navbar.js';

describe('Nav snapshot', () => {
  test('renders correctly', () => {
    const shot = renderer
      .create(
        <Router>
          <Navbar />
        </Router>,
      )
      .toJSON();
    expect(shot).toMatchSnapshot();
  });
});
