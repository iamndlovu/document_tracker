// Import packages
const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const path = require('path');
const fileUpload = require('express-fileupload');
require('dotenv').config();

const app = express();

// Allow cross origin resource fetching
app.use(cors());

// Handle uploaded files
app.use(fileUpload());

// Body Parser Middleware
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

// Database URI
const uri = process.env.LOCAL_DB_URI;
try {
	mongoose.connect(uri);

	// Connect database
	const connection = mongoose.connection;
	connection.once('open', () =>
		console.log('MongoDB database connection established successfully\n')
	);
} catch (error) {
	console.error(error);
}

// Import and use routes
app.use('/users', require('./routes/api/users'));
app.use('/files', require('./routes/api/files'));
app.use('/commits', require('./routes/api/commits'));
app.use('/push', require('./routes/api/push'));

// Static folder
app.use(express.static(path.join(__dirname, 'public')));

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => console.log(`\nServer started on port ${PORT}`));
