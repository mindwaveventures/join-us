import React from 'react';
import CribItem from './CribItem'

const CribList = ({ cribs, handleDeleteCrib, setGridCrib }) => {
  return (
    <ul className="cribs-grid">
      {cribs.map((crib) => (
        <li key={crib._id}>
          <CribItem crib={crib} handleDeleteCrib={handleDeleteCrib} setGridCrib={setGridCrib} />
        </li>
      ))}
    </ul>
  );
};

export default CribList;
