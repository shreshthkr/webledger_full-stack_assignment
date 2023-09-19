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

savedRouter.delete("/delete/:id", auth, async (req, res) => {
    const RecepID = req.params.id;
    const token=req.headers.authorization
    const decoded=jwt.verify(token, "recepie")
    const req_id = decoded.userID;
 
   
    const recepie = await SavedRecepieModel.findOne({_id: RecepID})
    
    const userID_in_recepie = recepie.userID
    try {
        if(req_id === userID_in_recepie){
            await SavedRecepieModel.findByIdAndDelete({_id: RecepID});
            res.status(200).send({msg:"Recepie has been Deleted"})
        }else{
            res.status(400).send({"msg":"Not Authorised"})
        }

       } catch (error) {
        res.status(400).send({"msg":error.message})
       }
  });

module.exports = {savedRouter}