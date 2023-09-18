import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from "react-redux";
import { getRecepie } from '../Redux/Recepie/action';
import { useSearchParams } from 'react-router-dom';
import ItemCard from '../Components/ItemCard';
import styled from 'styled-components';
import { Spinner } from '@chakra-ui/react'
import Sidebar from '../Components/Sidebar';
import Pagination from '../Components/Pagination';
const HomePage = () => {

  const [searchParams, setSearchParams] = useSearchParams();
  const dispatch = useDispatch();
  const {recepie, isLoading }= useSelector((store) => {
      return store.recepieReducer;
  })
  const [currentPage, setCurrentPage] =useState(1);

  


  const paramObj={
      params:{
        diet:searchParams.get("diet"),
        cuisine:searchParams.get("cuisine"),
        type:searchParams.get("type"),
        query:searchParams.get("search"),
        offset:searchParams.get("page")
  
        
      }
  }

 const perPageData = 10;

useEffect(()=>{
     dispatch(getRecepie(
      paramObj
     ))
},[searchParams]);

useEffect(() => {
  let params = {
    page:currentPage
  }
  setSearchParams(params)
},[currentPage]);
let totalPage = 10;
const onPageChange = (el) => {
   setCurrentPage(el);
}
return (
  <HOME>
    <div className="sidebar">
      <Sidebar />
    </div>
    <div className='recepie-data'>
      <div className='dish-list'>
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
<div className='pagination'>
  
   <Pagination 
   currentPage={currentPage} 
   totalPage={totalPage} 
   onPageChange={onPageChange}
   />
</div>
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
   display:flex ;
   flex-direction: column;
  align-items: center;
  justify-content: center; ;
}
.dish-list{
  width: 100%;
  height: auto;
   margin: auto;
   display: grid;
   grid-template-columns: repeat(4,1fr);
   gap: 20px;
}
.pagination{
  height: 60px;
  margin-top: 30px;
}
`