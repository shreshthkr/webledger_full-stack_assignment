import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getRecepie } from '../Redux/Recepie/action';
import { useSearchParams } from 'react-router-dom';

const SerachResult = () => {
   const [searchParams, setSearchParams] = useSearchParams();
    const dispatch = useDispatch();
    const recepie = useSelector((store) => {
        return store.recepieReducer.recepie;
    })
 
    const paramObj={
        params:{
          query:searchParams.get("search"),
          cuisine:"indian",
          type:"main-course",
          maxFat:25,
          maxReadyTime:45
        }
    }
    // searchParams.get("search")

  useEffect(()=>{
       dispatch(getRecepie(
        paramObj
       ))
  },[searchParams])
 console.log(recepie);
  return (
    <div>
      
    </div>
  )
}

export default SerachResult;
