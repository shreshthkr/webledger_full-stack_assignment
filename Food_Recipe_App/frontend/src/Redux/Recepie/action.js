import * as types from "./actionType";
import axios from "axios";


const apiKey = process.env.REACT_APP_API_KEY;

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
      //  console.log(res.data.recipes)
     })
     .catch((error)=>{
      dispatch(getRandomRecepieError());
     })

 };



 export const getRecepieRequest = () => {
   return {type:types.GET_RECEPIE_REQUEST}
};

export const getRecepieSuccess = (payload) => {
    return {type:types.GET_RECEPIE_SUCCESS, payload}
 };

 export const getRecepieError = () => {
    return {type:types.GET_RECEPIE_ERROR}
 };


 export const getRecepie = (paramObj) => (dispatch) => {
   dispatch(getRecepieRequest());
   return axios.get(`https://api.spoonacular.com/recipes/search?&apiKey=7b82973eb9e74727b86bc3e169e6b721`,
     paramObj
   )
   .then((res) => {
     dispatch(getRecepieSuccess(res.data.results))
   //  console.log("params:",paramObj)
   })
   .catch((error)=>{
    dispatch(getRecepieError());
   })

};

//https://api.spoonacular.com/recipes/complexSearch?query=pasta&maxFat=25&cuisine=italian&number=10&apiKey=7b82973eb9e74727b86bc3e169e6b721&type=main-course