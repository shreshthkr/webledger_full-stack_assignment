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
     return axios.get(`https://api.spoonacular.com/recipes/random?apiKey=05e0a95449fd4f40baa4ac1c908bec50&number=10`)
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
   return axios.get(`https://api.spoonacular.com/recipes/search?&apiKey=05e0a95449fd4f40baa4ac1c908bec50`,
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

//https://api.spoonacular.com/recipes/complexSearch?query=pasta&maxFat=25&cuisine=italian&number=10&apiKey=05e0a95449fd4f40baa4ac1c908bec50&type=main-course


export const getRecepieDetailRequest = () => {
   return {type:types.GET_RECEPIE_DETAIL_REQUEST}
};

export const getRecepieDetailSuccess = (payload) => {
    return {type:types.GET_RECEPIE_DETAIL_SUCCESS, payload}
 };

 export const getRecepieDetailError = () => {
    return {type:types.GET_RECEPIE_DETAIL_ERROR}
 };


 export const getRecepieDetail = (id) => (dispatch) => {
   dispatch(getRecepieDetailRequest());
   return axios.get(`https://api.spoonacular.com/recipes/${id}/information?apiKey=05e0a95449fd4f40baa4ac1c908bec50`)
   .then((res) => {
     dispatch(getRecepieDetailSuccess(res.data))
   //  console.log("params:",paramObj)
   })
   .catch((error)=>{
    dispatch(getRecepieDetailError());
   })

};