import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getCountries } from '../redux/CountriesReducer.js';

const CountriesList = () => {
  const dispatch = useDispatch();
  const fetchApi = 'https://api.covid19tracking.narrativa.com/api/countries';

  const myCountriesArray = useSelector((state) => state.countries);

  useEffect(() => {
    const apiCountries = async () => {
      const fetchCountries = await fetch(fetchApi);
      const countries = await fetchCountries.json();
      return dispatch(getCountries([countries]));
    };
    if (myCountriesArray.length === 0) {
      apiCountries();
    }
  }, []);

  return (
    <div>
      {myCountriesArray.map((country, index) => (
      <div key={index}>
        <h4>{country.region}</h4>
      </div>
      ))}
    </div>
  );
};

export default CountriesList;