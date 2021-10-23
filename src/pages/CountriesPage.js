import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import { v4 as uuidv4 } from 'uuid';
import { IconContext } from 'react-icons';
import { FaGlobeAfrica } from 'react-icons/fa';
import Navbar from '../components/Navbar';
import { getCountries, getAfricaData } from '../redux/CountriesReducer';

const CountryCard = () => {
  const countries = useSelector((state) => state.data.countries);
  const africa = useSelector((state) => state.data.africa);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getCountries());
  }, []);
  useEffect(() => {
    dispatch(getAfricaData());
  }, []);

  const toStr = (n) => n.toLocaleString();

  return (
    <div className='body'>
      <Navbar txt='Home' />
      <header className='page-header'>
        <div className='africa-img'>
          <IconContext.Provider value={{ className: 'africa-img' }}>
            <div>
              <FaGlobeAfrica />
            </div>
          </IconContext.Provider>
        </div>
        <div className='africa-img-desc'>
          <div><b>AFRICA</b></div>
          <div>{toStr(africa)}</div>
        </div>
      </header>
        <div className='total-cases-header middle'>
          <p>STATS BY CONTINENT</p>
        </div>
        <div className='country-details'>
          {countries.map((country) => (
            <div className='country-data' key={uuidv4()}>
            <Link to={`/${country.country}`}>
              <div className='country-flag'>
                <img src={country.countryInfo.flag} alt='logo-img' className='flag-img' />
              </div>
              <div className='country-cases'>
                <p className='country'>
                  {country.country}
                </p>
                <div className=''>{toStr(country.cases)}</div>
              </div>
            </Link>
            </div>
          ))}
        </div>
    </div>
  );
};

export default CountryCard;