const express = require('express');
const cors = require('cors');
const dotenv = require('dotenv');
var bodyParser = require('body-parser');

const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cors());

dotenv.config();

// Routes
const userRoute = require('./routes/user.js');
app.use('/api/users', userRoute);

// Database connection
const db = require('./models');
const PORT = process.env.PORT || 5000;

db.sequelize.sync().then(() => {
  app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
  });
});
