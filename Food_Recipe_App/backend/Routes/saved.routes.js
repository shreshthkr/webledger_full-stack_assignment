const express = require("express");
const savedRouter = express.Router();
const {SavedRecepieModel} = require("../models/saved.model");
const jwt = require("jsonwebtoken");
const {auth} = require("../Middlewares/auth");



savedRouter.post("/add", auth, async(req,res) => {
    try {
        const recepieData = req.body;
        const savedRecepie = new SavedRecepieModel(recepieData);
        await savedRecepie.save();
        res.status(200).send({ msg: 'Recipe saved successfully', savedRecepie: savedRecepie });
      } catch (error) {
        res.status(400).send({ msg: "Cannot save recipe" });
      }
});


savedRouter.get("/recepies", async(req,res) => {
    const token=req.headers.authorization
    const decoded = jwt.verify(token, "recepie")
    try {
        if(decoded){
            const savedRecepies = await SavedRecepieModel.find({"userID":decoded.userID})
            res.status(200).send(savedRecepies)
        }else{
            res.status(400).send({"msg": "No saved recepies founded"})
        }
    } catch (error) {
        res.status(400).send({"msg":error.message})
    }
});


module.exports = {savedRouter}