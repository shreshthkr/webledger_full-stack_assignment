const express = require("express");
const userRouter = express.Router();
const {UserModel} =require("../models/user.model");
const jwt = require("jsonwebtoken");
const bcrypt = require("bcrypt");



userRouter.post("/register", async(req,res) => {
    const {name,email,password} = req.body;
    try {
        bcrypt.hash(password, 5, async(err,hash) => {
            const user = new UserModel({name,email,password:hash});
            await user.save();
            res.status(200).send({ msg: "Registration has been done"})
        });
    } catch (error) {
       res.status(400).send({ msg: error.mesaage}) 
    };
})
userRouter.post("/login", async (req, res) => {
    const { email, password } = req.body;
    try {
      const user = await UserModel.findOne({ email });
      if (user) {
        bcrypt.compare(password, user.password, (err, result) => {
          if (result) {
            res.status(200).send({
              msg: "Login Successful",
              token: jwt.sign({ "userID": user._id }, "recepie"),
            });
          } else {
            res.status(400).send({ msg: "Wrong Credentials" });
          }
        });
      }
    } catch (error) {
      res.status(400).send({ msg: error.mesaage });
    }
  });
  
  
  
  module.exports = {
    userRouter,
  };