import React from 'react';

const CribItem = ({ crib, handleDeleteCrib, setGridCrib }) => {
  const { _id, name, location, img } = crib;

  return (
    <div className="crib-item">
      <img className="crib-image" src={img} alt="Crib" />
      <div className="crib-details">
        <p>Name: {name}</p>
        <p>Location: {location}</p>
      </div>
      <div className="crib-actions">
        <button onClick={() => setGridCrib(_id)}>Edit</button>
        <button onClick={() => handleDeleteCrib(_id)}>Delete</button>
      </div>
    </div>
  );
};

export default CribItem;
