const GET_COUNTRY = 'GET_COUNTRY';
const initialState = [];

export const getCountries = (payload) => ({
  type: GET_COUNTRY,
  payload,
});

const countriesReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_COUNTRY:
      return action.payload.map((key) => ({
        region: key.region,
      }));
    default:
      return state;
  }
};

export default countriesReducer;