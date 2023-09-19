const express = require("express");
const {connection} = require("./config/db");
const {userRouter} = require("./Routes/user.routes");
const {auth} = require("./Middlewares/auth");
const passport = require("./config/google-oauth");
const cors = require("cors");
const dotenv = require("dotenv");
const { savedRouter } = require("./Routes/saved.routes");
dotenv.config();

const app = express();

app.use(express.json());
app.use(cors());
app.use("/users", userRouter);

app.get('/auth/google',
  passport.authenticate('google', { scope: ['profile', "email"] }));

app.get('/auth/google/callback', 
  passport.authenticate('google', { failureRedirect: '/login' }),
  function(req, res) {
    // Successful authentication, redirect home.
    res.redirect('/');
  });

app.use(auth);
app.use("/savedrecepies", savedRouter);



app.listen(process.env.PORT, async () => {
   try {
      await connection
      console.log("Connected to the DB")
   } catch (error) {
      console.log("Cannot connect to DB")
      console.log(error);
   }
      console.log(`Server running on port ${process.env.PORT}`)  
    
})