import React, { useEffect } from 'react'
import { useDispatch, useSelector } from "react-redux";
import { getSavedRecepie } from '../Redux/Recepie/action';
import styled from 'styled-components';
import SavedItemCard from '../Components/SavedItemCard';

const Saved = () => {;
  const dispatch = useDispatch();
  const savedRecepies = useSelector((store)=>{
    return store.SavedReducer.recepieSaved;
  })
  const token = localStorage.getItem("token");
  console.log(savedRecepies);

 useEffect(() => {
    dispatch(getSavedRecepie(token));
 },[dispatch])


  return (
    <SAVED>
      {savedRecepies && savedRecepies?.map((el) => (
      <SavedItemCard key={el.id} recepie={el} />
      ))}
    </SAVED>
  )
}

export default Saved;

const SAVED = styled.div`
  width: 80%;
  height: auto;
  margin:auto;
  margin-top:60px;
  display: flex;
  flex-wrap: wrap;
  align-items: flex-start;
  justify-content:flex-start;
  gap: 10px;
`
