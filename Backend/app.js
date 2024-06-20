const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");
const app = express();
require("dotenv").config();

app.use(cors({
  origin: ['http://localhost:5173', 'https://vita-link-backend.vercel.app'],
  methods: ['GET', 'POST', 'PUT', 'DELETE'],
  allowedHeaders: ['Content-Type', 'Authorization']
}));

app.use((req, res, next) => {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept, Authorization");
  res.header("Access-Control-Allow-Methods", "GET, POST, PUT, DELETE, OPTIONS");
  next();
});


app.use(express.json());
app.use(express.urlencoded({ extended: true }));


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
