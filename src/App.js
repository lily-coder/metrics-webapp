import './App.css';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import CountryDetails from './components/CountryDetails.js';
import CountryFeed from './components/CountryFeed.js';
import Header from './components/Header.js';

const App = () => (
  <Router>
    <div className='app'>
      <Header />
      <Switch>
        <Route exact path='/'>
          <CountryFeed />
        </Route>
        <Route path='/Details'>
          <CountryDetails />
        </Route>
      </Switch>
    </div>
  </Router>
);

export default App;
