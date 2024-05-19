import React, { useState } from 'react';

function Search({ handleSearch }) {
  const [searchTerm, setSearchTerm] = useState('');

  const handleOnChange = (e) => {
    setSearchTerm(e.target.value);
  };

  const handleOnSubmit = (e) => {
    e.preventDefault();
    handleSearch(searchTerm);
  };

  return (
    <form onSubmit={handleOnSubmit}>
      <input
        className='search'
        type='search'
        placeholder='Search...'
        value={searchTerm}
        onChange={handleOnChange}
      />
    </form>
  );
}

export default Search;
