const express = require('express');
const connectDB = require('./db');
const Crib = require('./models/Crib');

const app = express();
const port = 5000;

app.use(express.json());


connectDB();

app.use((req, res, next) => {
  res.setHeader('Access-Control-Allow-Origin', 'http://localhost:3000');
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type');
  next();
});


app.get('/api/cribs', async (req, res) => {
  try {
    const cribs = await Crib.find();
    res.json(cribs);
  } catch (error) {
    console.error('Error fetching cribs:', error);
    res.status(500).json({ message: 'Server Error' });
  }
});

app.post('/api/cribs', async (req, res) => {
  console.log(req.body, "inside addddd")
  try {
    const newCrib = await Crib.create(req.body);
    res.status(201).json(newCrib);
  } catch (error) {
    console.error('Error adding crib:', error);
    res.status(500).json({ message: 'Server Error' });
  }
});

app.put('/api/cribs/:id', async (req, res) => {
  try {
    const { id } = req.params;
    const updatedCrib = await Crib.findByIdAndUpdate(id, req.body, { new: true });
    if (!updatedCrib) {
      return res.status(404).json({ message: 'Crib not found' });
    }
    res.json(updatedCrib);
  } catch (error) {
    console.error('Error updating crib:', error);
    res.status(500).json({ message: 'Server Error' });
  }
});

app.delete('/api/cribs/:id', async (req, res) => {
  try {
    const { id } = req.params;
    const deletedCrib = await Crib.findByIdAndRemove(id);
    if (!deletedCrib) {
      return res.status(404).json({ message: 'Crib not found' });
    }
    res.json(deletedCrib);
  } catch (error) {
    console.error('Error deleting crib:', error);
    res.status(500).json({ message: 'Server Error' });
  }
});

app.get('/api/cribs/:id', async (req, res) => {
  try {
    const { id } = req.params;
    const crib = await Crib.findById(id);
    if (!crib) {
      return res.status(404).json({ message: 'Crib not found' });
    }
    res.json(crib);
  } catch (error) {
    console.error('Error fetching crib:', error);
    res.status(500).json({ message: 'Server Error' });
  }
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
