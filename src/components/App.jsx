import React from 'react';
import SearchCities from './SearchCities';
import CityWeather from './CityWeather';

const App = () => (
  <div className="container mt-5">
    <h1 className="text-primary mb-3">City Searcher</h1>
    <SearchCities />
    <CityWeather />
  </div>
);

export default App;
