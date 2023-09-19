const mongoose = require("mongoose");



const SavedRecepieSchema = mongoose.Schema(
    {
        vegetarian: Boolean,
        vegan: Boolean,
        glutenFree: Boolean,
        dairyFree: Boolean,
        veryHealthy: Boolean,
        cheap: Boolean,
        veryPopular: Boolean,
        sustainable: Boolean,
        lowFodmap: Boolean,
        weightWatcherSmartPoints: Number,
        gaps: String,
        preparationMinutes: Number,
        cookingMinutes: Number,
        aggregateLikes: Number,
        healthScore: Number,
        creditsText: String,
        sourceName: String,
        pricePerServing: Number,
        extendedIngredients: [
          {
            id: Number,
            aisle: String,
            image: String,
            consistency: String,
            name: String,
            nameClean: String,
            original: String,
            originalName: String,
            amount: Number,
            unit: String,
            meta: [String],
            measures: {
              us: {
                amount: Number,
                unitShort: String,
                unitLong: String
              },
              metric: {
                amount: Number,
                unitShort: String,
                unitLong: String
              }
            }
          }
        ],
        id: Number,
        title: String,
        readyInMinutes: Number,
        servings: Number,
        sourceUrl: String,
        image: String,
        imageType: String,
        summary: String,
        cuisines: [String],
        dishTypes: [String],
        diets: [String],
        occasions: [String],
        winePairing: {
          pairedWines: [String],
          pairingText: String,
          productMatches: [
            {
              id: Number,
              title: String,
              description: String,
              price: String,
              imageUrl: String,
              averageRating: Number,
              ratingCount: Number,
              score: Number,
              link: String
            }
          ]
        },
        instructions: String,
        analyzedInstructions: [
          {
            name: String,
            steps: [
              {
                number: Number,
                step: String,
                ingredients: [
                  {
                    id: Number,
                    name: String,
                    localizedName: String,
                    image: String
                  }
                ],
                equipment: [
                  {
                    id: Number,
                    name: String,
                    localizedName: String,
                    image: String
                  }
                ],
                length: {
                  number: Number,
                  unit: String
                }
              }
            ]
          }
        ],
        originalId: Number,
        spoonacularSourceUrl: String,
        userID:String
      }
      ,
{
    versionKey:false
});


const SavedRecepieModel = mongoose.model("Saved",SavedRecepieSchema);


module.exports = {SavedRecepieModel};