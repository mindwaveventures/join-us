import React, { useState } from 'react';

const CribModal = ({
  newCribData,
  updateButton,
  handleUpdateCrib,
  handleAddCrib,
  handleModalClose,
  setNewCribData,
}) => {
  const [nameError, setNameError] = useState('');
  const [imgError, setImgError] = useState('');
  const [locationError, setLocationError] = useState('');

  const validateInputs = () => {
    let isValid = true;

    if (!newCribData.name) {
      setNameError('Please enter a name');
      isValid = false;
    } else {
      setNameError('');
    }

    if (!newCribData.img) {
      setImgError('Please enter an image URL');
      isValid = false;
    } else {
      setImgError('');
    }

    if (!newCribData.location) {
      setLocationError('Please enter a location');
      isValid = false;
    } else {
      setLocationError('');
    }

    return isValid;
  };

  const handleAddOrUpdateCrib = () => {
    const isValid = validateInputs();

    if (isValid) {
      if (updateButton) {
        handleUpdateCrib();
      } else {
        handleAddCrib();
      }
    }
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setNewCribData((prevData) => ({
      ...prevData,
      [name]: value,
    }));

    if (name === 'name') {
      setNameError('');
    } else if (name === 'img') {
      setImgError('');
    } else if (name === 'location') {
      setLocationError('');
    }
  };

  return (
    <div className="modal">
      <div className="modal-content">
        <h2>Add Crib</h2>
        <input
          type="text"
          placeholder="Name"
          className={`input-field ${nameError ? 'error' : ''}`}
          value={newCribData.name}
          name="name"
          onChange={handleInputChange}
          required
          pattern="[a-zA-Z0-9\s]+"
        />
        <input
          type="text"
          placeholder="Image URL"
          className={`input-field ${imgError ? 'error' : ''}`}
          value={newCribData.img}
          name="img"
          onChange={handleInputChange}
          required
        />
        <input
          type="text"
          placeholder="Location"
          className={`input-field ${locationError ? 'error' : ''}`}
          value={newCribData.location}
          name="location"
          onChange={handleInputChange}
          required
        />
        {updateButton ? (
          <button onClick={handleAddOrUpdateCrib}>Update</button>
        ) : (
          <button onClick={handleAddOrUpdateCrib}>Add</button>
        )}
        <button onClick={handleModalClose}>Cancel</button>
      </div>
    </div>
  );
};

export default CribModal;
