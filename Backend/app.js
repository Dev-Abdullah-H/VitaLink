const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");
require("dotenv").config();
const path = require("path");


const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors());

mongoose
  .connect(process.env.MONGODB_URI)
  .then(() => {
    console.log("MongoDb Connected");
    connectServer();
  })
  .catch((e) => {
    console.log(e);
  });

// Api initialize
const UserApi = require("./APIS/User");
const UserInfoApi = require("./APIS/UserInfo");
const TestApi = require("./APIS/Test");
// Use Api
app.use("/user", UserApi);
app.use("/user-info", UserInfoApi);
app.use("/test", TestApi);



// Dist
app.use(express.static(path.join(__dirname, '../FrontEnd/dist')));
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, '../FrontEnd/dist/index.html'));
});


// Listening
const connectServer = () => {
  app.listen(process.env.Port, () => {
    console.log(`Server is listening on port : ${process.env.Port}`);
  });
};
