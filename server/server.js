// const express = require('express');
// const mongoose = require('mongoose');

// const app = express();
// const plantsRouter = require('./routes/plants');
// const PORT = 27017;

// app.use(express.json());
// app.use('/api', plantsRouter);

// const dbURI = 'mongodb://0.0.0.0:27017/mydatabase'; // Replace with your MongoDB connection string

// mongoose
//   .connect(dbURI, { useNewUrlParser: true, useUnifiedTopology: true })
//   .then(() => {
//     app.listen(PORT, () => {
//       console.log('Connected to MongoDB');
//       console.log(`App is listening on port: ${PORT}`);
//     });
//   })
//   .catch((error) => {
//     console.error('Error connecting to MongoDB:', error);
//   });
