const express = require("express");
const app = express();
const bodyParser = require("body-parser");
const cors = require("cors");

const PORT = process.env.PORT || 4000;
require("dotenv").config();
app.use(cors());
app.use(bodyParser.json());

app.get("/giveCredientials", function (req, res) {
  res.send({
    authDomain: process.env.AUTH_DOMAIN,
    apiKey: process.env.API_KEY,
    projectId: process.env.PROJECT_ID,
    storageBucket: process.env.STORAGE_BUCKET,
    messagingSenderId: process.env.MESSAGING_SENDER_ID,
    appId: process.env.APP_ID,
    measurementId: process.env.MEASUREMENT_ID,
  });
});

app.listen(PORT, function () {
  console.log("Server is running on Port:", PORT);
});
