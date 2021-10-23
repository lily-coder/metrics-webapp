import reducer, {
  getCountries,
  getAfricaData,
  getCountryData,
  GET_COUNTRIES,
  GET_COUNTRY_DATA,
  GET_AFRICA,
} from '../redux/CountriesReducer.js';
import data from '../mocks/mocks.js';

describe('This is a reducer', () => {
  test('Receive values fom API and update state', () => {
    const action = {
      type: GET_COUNTRIES,
      newData: data,
    };
    const newState = reducer({}, action);
    const { country } = newState.countries[0].countries[0];
    const { cases } = newState.countries[0].countries[0];
    expect(country).toBe('Algeria');
    expect(cases).toEqual(400000);
  });
  test('should return definite values', () => {
    const action = {
      type: GET_COUNTRIES,
    };
    expect(reducer({}, action)).not.toBeUndefined();
  });

  test('Receive values fom API and update state', () => {
    const action = {
      type: GET_COUNTRIES,
      newData: data,
    };
    const newState = reducer({}, action);
    const { active } = newState.countries[0].countryData;
    expect(active).toEqual(300);
  });
  test('Receive values fom API and update state', () => {
    const action = {
      type: GET_COUNTRIES,
      newData: data,
    };
    const newState = reducer({}, action);
    const { critical } = newState.countries[0].countryData;
    expect(critical).toEqual(8);
  });
  test('The state should be truthy after action GET_COUNTRY_DATA', () => {
    const action = {
      type: GET_COUNTRY_DATA,
    };
    expect(reducer({}, action)).toBeTruthy();
  });
  test('The state should be truthy after action GET_AFRICA', () => {
    const action = {
      type: GET_AFRICA,
    };
    expect(reducer({}, action)).toBeTruthy();
  });
});

describe('getCountries returns accurate values', () => {
  test('getCountries should return a truthy value', () => {
    expect(getCountries()).toBeTruthy();
  });
  test('get countries return an array of country objects', () => {
    expect(getCountryData()).toBeInstanceOf(Object);
  });
});

describe('getAfrica returns expected values', () => {
  test('getAfrica should return a truthy value', () => {
    expect(getAfricaData()).toBeTruthy();
  });
  test('getAfrica should not contain data', () => {
    expect(getAfricaData()).not.toContain(data);
  });
});

describe('getCountryData returns expected values', () => {
  test('getCountryData return a truthy value', () => {
    expect(getCountryData()).toBeTruthy();
  });
  test('getAfrica return an object', () => {
    expect(getCountryData()).toBeInstanceOf(Object);
  });
});
