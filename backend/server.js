// server.js
const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
require('dotenv').config();

const app = express();
app.use(cors());
app.use(express.json());

mongoose.connect(process.env.MONGODB_URI, { useNewUrlParser: true, useUnifiedTopology: true });

const documentSchema = new mongoose.Schema({ content: String });
const Document = mongoose.model('Document', documentSchema);

app.post('/documents', async (req, res) => {
  const document = new Document(req.body);
  await document.save();
  res.send(document);
});

app.get('/documents/:id', async (req, res) => {
  const document = await Document.findById(req.params.id);
  res.send(document);
});

app.listen(5000, () => {
  console.log('Server is running on port 5000');
});
