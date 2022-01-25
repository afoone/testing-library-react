import React from 'react';

const TestId = () => {
  return <div>
    <p>
        <span data-testid="search-label">Search:</span>
        <input data-testid="search-input" type="text" placeholder="Search" />
        <span data-testid="search-results" className='pepe'>Searches for...</span>
    </p>
  </div>;
};

export default TestId;
