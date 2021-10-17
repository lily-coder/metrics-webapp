import './App.css';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import CityDetails from './components/CityDetails.js';
import CityFeed from './components/CityFeed.js';
import Header from './components/Header.js';

const App = () => (
  <Router>
    <div className='app'>
      <Header />
      <Switch>
        <Route exact path='/'>
          <CityFeed />
        </Route>
        <Route path='/Details'>
          <CityDetails />
        </Route>
      </Switch>
    </div>
  </Router>
);

export default App;
