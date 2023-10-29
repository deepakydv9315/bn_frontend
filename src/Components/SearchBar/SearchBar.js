import React from 'react';
import "./SearchBar.scss";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch } from '@fortawesome/free-solid-svg-icons';

const SearchBar = ({ searchQuery, setSearchQuery }) => {
  return (
    <><span className="search-icon">
      <FontAwesomeIcon icon={faSearch} />
    </span>
      <input
        type="text"
        placeholder="Search..."
        value={searchQuery}
        onChange={(e) => setSearchQuery(e.target.value)}
      />
    </>
  );
};

export default SearchBar;
