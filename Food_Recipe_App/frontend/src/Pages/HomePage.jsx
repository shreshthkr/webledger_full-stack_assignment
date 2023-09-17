import React, { useEffect } from 'react'
import { useDispatch, useSelector } from "react-redux";
import { getRecepie } from '../Redux/Recepie/action';
import { useSearchParams } from 'react-router-dom';
import ItemCard from '../Components/ItemCard';
import styled from 'styled-components';
import { Spinner } from '@chakra-ui/react'
import Sidebar from '../Components/Sidebar';
const HomePage = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const dispatch = useDispatch();
  const {recepie, isLoading }= useSelector((store) => {
      return store.recepieReducer;
  })
  
  


  const paramObj={
      params:{
        diet:searchParams.get("diet"),
        cuisine:searchParams.get("cuisine"),
        type:searchParams.get("type"),
        query:searchParams.get("search"),
  
        
      }
  }
  // searchParams.get("search")
// console.log(searchParams.get("diet"))
console.log(searchParams.get("type"))
useEffect(()=>{
     dispatch(getRecepie(
      paramObj
     ))
},[searchParams])
// console.log(recepie);
return (
  <HOME>
    <div className="sidebar">
      <Sidebar />
    </div>
    <div className='recepie-data'>
    {isLoading ? (<Spinner
  thickness='4px'
  speed='0.65s'
  emptyColor='gray.200'
  color='blue.500'
  size='xl'
  margin={"auto"}
/>) : recepie && recepie.map((el) => {
      return <ItemCard key={el.id} recepie={el} />
    })}
  </div>
  </HOME>
)
}

export default HomePage


const HOME = styled.div`
   width: 95%;
   height: auto;
   margin: auto;
   gap: 20px;
  margin-top: 80px;
  display:flex ;
  align-items: flex-start;
  justify-content: center;
  gap: 30px;

  .sidebar{
    width: 20%;
    height: 600px;
    box-shadow: rgba(0, 0, 0, 0.16) 0px 1px 4px;
    display:flex ;
  align-items: flex-start;
  justify-content: center;
  }
.recepie-data{
  width: 75%;
   height: auto;
   margin: auto;
   display: grid;
   grid-template-columns: repeat(4,1fr);
   gap: 20px;
}
`