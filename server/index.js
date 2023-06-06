const express = require("express");
const cors = require("cors");
const UserModel = require("./models/user");
const mongoose = require("mongoose");

const app = express();

app.listen(9000, () => console.log("server running on port 9000..."));

mongoose.connect("mongodb://localhost:27017");

app.use(cors());

app.post("/Signup", async (req, res) => {
  const user = req.body;
  try {
    let verify = await UserModel.findOne({
      login: user.login,
      password: user.password,
    });

    if (verify) {
      res.send("user already exist");
    } else {
      const newuser = new UserModel(user);

      let save = await newuser.save();

      if (save) {
        res.send("user inserted");
      } else {
        res.send("not inserted");
      }
    }
  } catch (err) {
    console.log(err);
  }
});
