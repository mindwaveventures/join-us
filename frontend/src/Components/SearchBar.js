import React from 'react';

const SearchBar = ({ searchText, handleSearch }) => {
  return (
    <div className="search-container">
      <input
        type="text"
        className="search-input"
        placeholder="Enter a name"
        value={searchText}
        onChange={handleSearch}
      />
    </div>
  );
};

export default SearchBar;
