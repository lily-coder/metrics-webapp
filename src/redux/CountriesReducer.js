export const GET_COUNTRIES = 'countries/countries/GET_COUNTRIES';
export const GET_COUNTRY_DATA = 'countries/countries/GET_COUNTRY_DATA';
export const GET_AFRICA = 'countries/countries/GET_AFRICA';

const initialState = {
  countries: [],
  countryData: [],
  africa: [],
  continent: [],
  loggedIn: true,
};

export const getCountries = () => async (dispatch) => {
  const data = await fetch(
    'https://disease.sh/v3/covid-19/countries',
    { method: 'GET' },
  );
  const bfData = await data.json();
  const newData = bfData.filter((country) => country.continent === 'Africa');
  dispatch({ type: GET_COUNTRIES, newData });
};

export const getAfricaData = () => async (dispatch) => {
  const data = await fetch(
    'https://disease.sh/v3/covid-19/continents/africa?strict=true',
    { method: 'GET' },
  );
  const afriData = await data.json();
  const africa = afriData.cases;
  dispatch({ type: GET_AFRICA, africa });
};

export const getCountryData = (country) => async (dispatch) => {
  const data = await fetch(
    `https://disease.sh/v3/covid-19/countries/${country}`,
    { method: 'GET' },
  );
  const newData = await data.json();
  const countryData = {
    id: newData.countryInfo.iso2,
    totalcases: newData.cases,
    recovered: newData.recovered,
    active: newData.active,
    critical: newData.critical,
    tests: newData.tests,
    deaths: newData.deaths,
  };
  dispatch({ type: GET_COUNTRY_DATA, countryData });
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_COUNTRIES:
      return { ...state, countries: action.newData };

    case GET_AFRICA:
      return { ...state, africa: action.africa };

    case GET_COUNTRY_DATA:
      return { ...state, countryData: action.countryData };
    case 'RESET':

      return initialState;
    default:
      return state;
  }
};

export default reducer;