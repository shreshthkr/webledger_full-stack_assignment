import * as types from "./actionType";
import axios from "axios";


const apiKey = "7b82973eb9e74727b86bc3e169e6b721";

export const getRandomRecepieRequest = () => {
   return {type:types.GET_RANDOM_RECEPIE_REQUEST}
};

export const getRandomRecepieSuccess = (payload) => {
    return {type:types.GET_RANDOM_RECEPIE_SUCCESS, payload}
 };

 export const getRandomRecepieError = () => {
    return {type:types.GET_RANDOM_RECEPIE_ERROR}
 };


 export const getRandomRecepie = () => (dispatch) => {
     dispatch(getRandomRecepieRequest());
     return axios.get(`https://api.spoonacular.com/recipes/random?apiKey=7b82973eb9e74727b86bc3e169e6b721&number=10`)
     .then((res) => {
       dispatch(getRandomRecepieSuccess(res.data.recipes))
       console.log(res.data.recipes)
     })
     .catch((error)=>{
      dispatch(getRandomRecepieError());
     })

 }