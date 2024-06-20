const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");
const app = express();
require("dotenv").config();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors());

mongoose
  .connect(process.env.MONGODB_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
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

// Listening
const connectServer = () => {
  app.listen(process.env.PORT, () => {
    console.log(`Server is listening on port : 3000`);
  });
};
