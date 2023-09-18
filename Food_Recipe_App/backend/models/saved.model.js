const mongoose = require("mongoose");

const ExtendedIngredientSchema = new mongoose.Schema({
    originalName: String,
    amount: Number,
    unit: String
  });

const SavedRecepieSchema = mongoose.Schema({
    title:String,
    servings:Number,
    readyinMinutes:Number,
    image:String,
    summary:String,
    instruction:String,
    extendedIngredients:[ExtendedIngredientSchema]
},
{
    versionKey:false
});


const SavedRecepieModel = mongoose.model("Saved",SavedRecepieSchema);


module.exports = {SavedRecepieModel};