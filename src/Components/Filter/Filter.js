import React, { useState } from 'react';
import './Filter.scss';

const Filter = ({ filters, selectedFilters, handleFilterChange }) => {
  const [openCategory, setOpenCategory] = useState(null);

  const handleCategoryClick = (category) => {
    if (openCategory === category) {
      setOpenCategory(null);
    } else {
      setOpenCategory(category);
    }
  };

  return (
    <div className="filter-section">
      {filters.map((filterCategory) => (
        <div className="filter-category" key={filterCategory.category}>
          <div className="category-header" onClick={() => handleCategoryClick(filterCategory.category)}>
            {filterCategory.category} <span className={`arrow ${openCategory === filterCategory.category ? 'open' : ''}`}>&#9660;</span>
          </div>
          {openCategory === filterCategory.category && (
            <ul className="filter-options">
              {filterCategory.options.map((option) => (
                <li
                  key={option}
                  className={selectedFilters.includes(option) ? 'selected' : ''}
                  onClick={() => handleFilterChange(filterCategory.category, option)}
                >
                  {option}
                </li>
              ))}
            </ul>
          )}
          <br></br><hr style={{
            backgroundColor: 'black',
            maxWidth: 220,
          }}></hr>
        </div>
      ))}
    </div>
  );
};

export default Filter;
