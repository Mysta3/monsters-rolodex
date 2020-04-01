import React from 'react';
import './searchField.style.css';

const SearchField = ({ placeholder, handleChange }) => {
  return (
    <div>
      <input type="search" placeholder={placeholder} onChange={handleChange} />
    </div>
  );
};

export default SearchField;
