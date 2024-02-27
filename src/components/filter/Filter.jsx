import React from 'react';

const Filter = ({filter, handleFilterChange}) => {
  return (
    <div>
      <label className="form-label" htmlFor="filter">
        Find contacts by name:{' '}
      </label>
      <input
        style={{width: '300px'}}
        className="form-control"
        type="text"
        name="filter"
        id="filter"
        value={filter}
        onChange={handleFilterChange}
      />
    </div>
  );
};

export default Filter;
