import PropTypes from 'prop-types';

const Filter = () => (
  <div>
    <label>Filter</label>
    <select className='filter'>
      <option value="">All</option>
      <option value="">Above 10000</option>
      <option value="">Above 200000</option>
    </select>
  </div>
);

export default Filter;