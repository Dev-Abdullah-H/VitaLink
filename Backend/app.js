const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");
require("dotenv").config();



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



// Listening
const connectServer = () => {
  app.listen(process.env.Port, () => {
    console.log(`Server is listening on port : ${process.env.Port}`);
  });
};
