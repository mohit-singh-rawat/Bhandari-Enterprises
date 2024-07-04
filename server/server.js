const express = require("express");
const app = express();
require("dotenv").config();
require("./config/db.config");
const cors = require("cors");
const bodyParser = require("body-parser");

// CORS configuration
const corsOptions = {
  origin: 'http://localhost:3000', // Replace with your frontend URL
  credentials: true,
  optionsSuccessStatus: 200
};

app.use(cors(corsOptions));
app.use(express.json());
app.use(bodyParser.urlencoded({ extended: false }));
require("./routes/index")(app);
const port = process.env.PORT || 8900;
const host = process.env.HOST || 'http://localhost:';

app.listen(port, () => {
    console.log(`App is running on ${host}${port}`);
});
