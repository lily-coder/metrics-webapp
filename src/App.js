import { Route, Switch } from 'react-router-dom';
import { useSelector } from 'react-redux';
import BodyList from './pages/CountriesPage.js';
import ItemDescription from './pages/DetailsPage.js';

const App = () => {
  const countries = useSelector((state) => state.data.countries);

  return (
    <>
      <Switch>
        {countries.map((country) => (
          <Route exact path={`/${country.country}`} key={country}>
            <ItemDescription country={country.country} />
          </Route>
        ))}
        <Route exact path='/'>
          <BodyList />
        </Route>

      </Switch>
    </>
  );
};

export default App;