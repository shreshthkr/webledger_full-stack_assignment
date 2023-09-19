import React, { useEffect, useState } from 'react'
import styled from "styled-components";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import HtmlReactParser from 'html-react-parser';
import {BsBookmark} from "react-icons/bs";
import { ImSpoonKnife } from "react-icons/im";
import { MdOutlineWatchLater } from "react-icons/md";
import { getRecepieDetail } from '../Redux/Recepie/action';
import { useToast } from '@chakra-ui/react'
const DetailPage = () => {
  const params = useParams();
  const {id} = params;
  const dispatch = useDispatch();
  const details = useSelector((store) => {
    return store.Detailreducer.recepieDetail;
  })
  const [isSaved, setIsSaved] = useState(false);
 useEffect(()=>{
    dispatch(getRecepieDetail(id))
 },[dispatch,id]);
  
 const toast = useToast()
const recepiesummary = details?.summary ? HtmlReactParser(details.summary) : null;
const recepieinstruction = details?.instructions ? HtmlReactParser(details.instructions) : null;
const token = localStorage.getItem("token");





const saveRecepie = () => {
  if(token){
  fetch('https://zany-jade-elk-yoke.cyclic.cloud/savedrecepies/add',{
    method:"POST",
    headers:{
      'Content-Type': 'application/json',
      "Authorization":token
    },
    body: JSON.stringify(details),
  })
  .then((res)=>{
     setIsSaved(true);
     toast({
      title: 'Recepie Saved',
      description: "",
      status: 'success',
      duration: 9000,
      isClosable: true,
    })
  })
  .catch((err)=>{
    console.log(err)
    toast({
      title: 'Error Saving Recepie',
      description: "",
      status: 'error',
      duration: 9000,
      isClosable: true,
    })
  })
} else{
  toast({
    title: 'Login First',
    description: "",
    status: 'error',
    duration: 9000,
    isClosable: true,
  })
}
}

  return (
    <DETAIL>
      <div className='dish-title'>
        <div> 
        <h1>{details.title}</h1> 
        <BsBookmark fontSize={"24px"} backgroundColor={"white"} cursor={"pointer"} onClick={saveRecepie} />
        </div>
        <div className='recepie-servngs'>
        <p> <ImSpoonKnife /> {details.servings}</p>
        <p> <MdOutlineWatchLater />
                {details.readyInMinutes}min</p>
        </div>
        <hr />
      </div>
      <div className='recepie-details'>
        <div className='about-dish'>
          <div className='dish-image'>
            <img src={details.image} alt={details.title} />
          </div>
          <div className='dish-summary'>
            <p>{recepiesummary}</p>
          </div>
        </div>
        <div className='recepie-ingredients'>
          <div className='ingridient-heading'>
            <h2>Ingridients:</h2>
          </div>
          <div className='ingridient-list'>
          <ul>
          {details?.extendedIngredients?.map((el,index)=>(
              <li key={el.id+index}>
                {el.originalName} - {el.amount} {el.unit}
              </li>
          ))}
          </ul>
          </div>
        </div>
        <div className='recepie-instructions'>
            <div className='instruction-heading'>
              <h2>Instructions:</h2>
            </div>
            <div className='instructios'>
             

                <p>{recepieinstruction}</p>
              
             
            </div>
        </div>
      </div>
    </DETAIL>
  )
}

export default DetailPage


const DETAIL = styled.div`
  width: 95%;
  height: auto;
  margin: auto;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
  gap: 30px;
  margin-top:50px;

  .dish-title{
    width: 95%;
    height: 60px;
    margin: auto;
    margin-bottom: 30px;
  }
  .dish-title>div:first-child{
    height: 50px;
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: space-between;
  }
  .dish-title>div:first-child>h1{
    text-align: left;
    font-size: 24px;
    font-weight: 600;
    font-family: "Source Sans Pro", Arial, sans-serif;
  }
  .recepie-servngs{
    width: 100%;
    height: 40px;
    display: flex;
    align-items: center;
    justify-content: flex-end;
    gap: 20px;
  }
  .recepie-servngs p{
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 5px;
    font-weight: 600;
  }
  .recepie-details{
    width: 95%;
    height: auto;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: center;
    margin:auto;
    margin-top: 20px;
  }
  .about-dish{
    width: 100%;
    height: auto;
    display: flex;
    align-items: flex-start;
    justify-content: space-between;
    gap: 20px;
  }
  .dish-image{
    width: 35%;
    height: 280px;
    margin: auto;
  }
  .dish-image>img{
    width: 100%;
    height: 100%;
    object-fit: cover;
    border-radius: 10px;
  }
  .dish-summary{
    width: 55%;
    height: auto;
  }
  .dish-summary>p{
    font-size: 16px;
    line-height: 25px;
    letter-spacing: 0.5px;
    font-family: "Source Sans Pro", Arial, sans-serif;
  }
  .recepie-ingredients{
     width: 95%;
     height: auto;
     margin: auto;
     display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: center;

  }
  .ingridient-heading{
    width: 100%;
    height: 40px;
  }
  .ingridient-heading>h2{
    text-align: left;
    font-size: 20px;
    font-weight: 600;
    font-family: "Source Sans Pro", Arial, sans-serif;
  }
  .ingridient-list{
    width: 100%;
    height: auto;
  }
  .ingridient-list>ul{
    width: 80%;
    height: auto;
    display: grid;
    grid-template-columns: repeat(2,1fr);
    row-gap: 10px;
  }
  .ingridient-list>ul>li{
    font-size: 16px;
    font-weight: 600;
    font-family: "Source Sans Pro", Arial, sans-serif;
  }
  .recepie-instructions{
    width: 95%;
    height: auto;
    margin: auto;
     display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: center;

  }
  .instruction-heading{
    width: 100%;
    height: 40px;
  }
  .instruction-heading>h2{
    text-align: left;
    font-size: 20px;
    font-weight: 600;
    font-family: "Source Sans Pro", Arial, sans-serif;
  }
  .instructios{
    width: 100%;
    height: auto;
  }
  .instructios>p{
    font-size: 16px;
    line-height: 25px;
    letter-spacing: 0.5px;
    font-family: "Source Sans Pro", Arial, sans-serif;
  }
`