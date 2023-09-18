import React, { useEffect } from 'react'
import styled from "styled-components";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import HtmlReactParser from 'html-react-parser';

import { getRecepieDetail } from '../Redux/Recepie/action';
const DetailPage = () => {
  const params = useParams();
  const {id} = params;
  const dispatch = useDispatch();
  const details = useSelector((store) => {
    return store.Detailreducer.recepieDetail;
  })

 useEffect(()=>{
    dispatch(getRecepieDetail(id))
 },[dispatch,id]);
  

const recepiesummary = details?.summary ? HtmlReactParser(details.summary) : null;
console.log(details.analyzedInstructions[0].steps)
  return (
    <DETAIL>
      <div className='dish-title'>
        <h1>{details.title}</h1> 
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
          {details?.extendedIngredients?.map((el)=>(
              <li key={el.id}>
                {el.originalName} - {el.amount}{el.unit}
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
              <ol>
              {details?.analyzedInstructions[0]?.steps?.map((step) => (
                <li key={step.number}>{step.step}</li>
              ))}
              </ol>
            </div>
        </div>
      </div>
    </DETAIL>
  )
}

export default DetailPage


const DETAIL = styled.div`
  width: 95%;
  height: 600px;
  margin: auto;
  margin-top: 20px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
  gap: 30px;
  margin-top:100px;

  .dish-title{
    width: 95%;
    height: 60px;
    margin: auto;
  }
  .dish-title>h1{
    text-align: left;
    font-size: 24px;
    font-weight: 600;
    font-family: "Source Sans Pro", Arial, sans-serif;
  }
  .recepie-details{
    width: 95%;
    height: auto;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: center;
    margin:auto;
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
    height: 280px;
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
  }
  .ingridient-list>ul>li{
    font-size: 15px;
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
  .instructios>ol{
    width: 80%;
    height: auto;
  }
`