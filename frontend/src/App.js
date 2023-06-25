import React, { useEffect, useState } from 'react';
import {
  getAllCribs,
  addCrib,
  updateCrib,
  deleteCrib,
  getCrib,
} from './api';
import './App.css';
import SearchBar from './Components/SearchBar';
import CribList from './Components/CribList';
import CribModal from './Components/CribModal';
function App() {
  const [cribs, setCribs] = useState([]);
  const [storeValue, setStoreValue] = useState(0)
  const [getId, setGetId] = useState("");
  const [filteredList, setFilteredList] = useState([]);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [newCribData, setNewCribData] = useState({
    name: '',
    img: '',
    location: '',
  });
  const [searchText, setSearchText] = useState('');
  const [updateButton, setUpdateButton] = useState(false)

  useEffect(() => {
    const fetchCribs = async () => {
      const data = await getAllCribs();
      setCribs(data);
    };
    fetchCribs();
  }, []);

  useEffect(() => { setFilteredList(cribs) }, [cribs])

  const handleAddCrib = async () => {
    try {
      const addedCrib = await addCrib(newCribData);
      console.log(addedCrib, "addedCribbbbb")
      setCribs((prevCribs) => [...prevCribs, addedCrib]);
      setNewCribData({
        name: '',
        img: '',
        location: '',
      });
      setIsModalOpen(false);
    } catch (error) {
      console.error('Error adding crib:', error);
    }

  };

  const setGridCrib = async (id) => {
    const getOneUpdate = await getCrib(id)
    setIsModalOpen(true);
    setGetId(getOneUpdate._id)
    newCribData.name = getOneUpdate.name
    newCribData.location = getOneUpdate.location
    newCribData.img = getOneUpdate.img
    setUpdateButton(true)
  }

  const handleUpdateCrib = async () => {
    const updateArray = newCribData
    const updated = await updateCrib(getId, updateArray);
    if (updated) {
      setCribs((prevCribs) =>
        prevCribs.map((crib) => (crib._id === getId ? { ...crib, ...updateArray } : crib))
      );
    }
    setNewCribData({
      name: '',
      img: '',
      location: '',
    });
    setIsModalOpen(false);
    setUpdateButton(false)

  };

  const handleDeleteCrib = async (id) => {
    const deletedCrib = await deleteCrib(id);
    if (deletedCrib) {
      setCribs((prevCribs) => prevCribs.filter((crib) => crib._id !== id));
    }
  };

  const handleModalOpen = () => {
    setIsModalOpen(true);
  };

  const handleModalClose = () => {
    setIsModalOpen(false);
    setUpdateButton(false);
    setNewCribData({
      name: '',
      img: '',
      location: '',
    });
  };

  const handleSearch = (event) => {
    const searchText = event.target.value.toLowerCase();
    if (!searchText) {
      setFilteredList(cribs)
    } else {
      const filteredCribs = newFilterCribs();
      setFilteredList(filteredCribs);
    }
    setSearchText(searchText);

  }

  const newFilterCribs = () => {
    return cribs.filter((crib) => crib.name.toLowerCase().includes(searchText)
    );
  }


  return (
    <div>
      <div className="header">
        <h1 className="title">PROPERTY LISTING APP </h1>
        <div className="search-container">
          <SearchBar
            searchText={searchText}
            handleSearch={handleSearch}
          />
        </div>
        <button className="add-crib-button" onClick={handleModalOpen}>
          Add Crib
        </button>
      </div>
      {filteredList.length > 0 ? (
        <div >
          <CribList cribs={filteredList} handleDeleteCrib={handleDeleteCrib} setGridCrib={setGridCrib} />
        </div>
      ) : (
        <p>No cribs found.</p>
      )}

      {isModalOpen && (
        <CribModal
          newCribData={newCribData}
          updateButton={updateButton}
          handleUpdateCrib={handleUpdateCrib}
          handleAddCrib={handleAddCrib}
          handleModalClose={handleModalClose}
          setNewCribData={setNewCribData}
        />
      )}
    </div>
  );
}

export default App;
