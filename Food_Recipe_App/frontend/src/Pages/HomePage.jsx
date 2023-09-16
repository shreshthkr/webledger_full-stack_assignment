import React, { useEffect } from 'react'
import { useDispatch, useSelector } from "react-redux";
import { getRandomRecepie } from '../Redux/Recepie/action';
const HomePage = () => {
  
    const dispatch = useDispatch();
    const RandomRecepie = useSelector((store) => {
        return store.RandomRecepiereducer.Randomrecepie;
    })

  useEffect(() => {
      dispatch(getRandomRecepie());
  },[dispatch])
  console.log(RandomRecepie);
  return (
    <div>
      
    </div>
  )
}

export default HomePage
