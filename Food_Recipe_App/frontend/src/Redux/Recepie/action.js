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
     return axios.get(`https://api.spoonacular.com/recipes/random?apiKey=c112bca6eca94ac0a5a6aec9f731b0eb&number=10`)
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
   return axios.get(`https://api.spoonacular.com/recipes/search?&apiKey=c112bca6eca94ac0a5a6aec9f731b0eb`,
     paramObj
   )
   .then((res) => {
     dispatch(getRecepieSuccess(res.data.results))
   })
   .catch((error)=>{
    dispatch(getRecepieError());
   })

};




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
   return axios.get(`https://api.spoonacular.com/recipes/${id}/information?apiKey=c112bca6eca94ac0a5a6aec9f731b0eb`)
   .then((res) => {
     dispatch(getRecepieDetailSuccess(res.data))
   })
   .catch((error)=>{
    dispatch(getRecepieDetailError());
   })

};



export const getSavedRecepieRequest = () => {
   return {type:types.GET_SAVED_RECEPIE_REQUEST}
};

export const getSavedRecepieSuccess = (payload) => {
    return {type:types.GET_SAVED_RECEPIE_SUCCESS, payload}
 };

 export const getSavedRecepieError = () => {
    return {type:types.GET_SAVED_RECEPIE_ERROR}
 };


 export const getSavedRecepie = (token) => (dispatch) => {
   dispatch(getSavedRecepieRequest());
   return axios.get(`http://localhost:8080/savedrecepies/recepies`,{
      headers:{"Authorization": token}
   })
   .then((res) => {
     dispatch(getSavedRecepieSuccess(res.data))
   })
   .catch((error)=>{
    dispatch(getSavedRecepieError());
   })

};