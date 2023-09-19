import React from "react";
import styled from "styled-components";
import { ImSpoonKnife } from "react-icons/im";
import { MdOutlineWatchLater } from "react-icons/md";
import {AiFillDelete} from "react-icons/ai"
import { useNavigate } from "react-router-dom";
import { useToast } from '@chakra-ui/react'
import axios from "axios";
const SavedItemCard = ({ recepie }) => {
  const toast = useToast()
  const navigate = useNavigate();
  const token = localStorage.getItem("token");

  const handleDetails = () => {
    return navigate(`/recepie/${recepie.id}`)
  }
 
  const handleDelete = () => {
    console.log("recepie.id:",recepie.id)
       axios.delete(`https://zany-jade-elk-yoke.cyclic.cloud/savedrecepies/delete/${recepie.id}`,{
        headers:{
          Authorization:token
        },
       })
       .then((res)=>{
        toast({
          title: 'Recepie Deleted',
          description: "Recepie Deleted Successfully",
          status: 'success',
          duration: 5000,
          isClosable: true,
        })
       })
       .catch((err) => {
        toast({
          title: 'Recepie Not Deleted',
          description: "Error",
          status: 'error',
          duration: 5000,
          isClosable: true,
        })
        console.log(err);
       })
  };

  return (
    <CARD >
      <div className="food-card">
        <div className="food-image" onClick={handleDetails}>
          <img
            src={recepie.image}
            alt={recepie.title}
          />
        </div>
        <div className="food-info">
          <div className="food-stats">
            <ul>
              <li>
                <ImSpoonKnife /> {recepie.servings}
              </li>
              <li>
                <MdOutlineWatchLater />
                {recepie.readyInMinutes}min
              </li>
             <li onClick={handleDelete}><AiFillDelete /></li>
            </ul>
          </div>
          <div className="food-title">
            <p onClick={handleDetails}>{recepie.title}</p>
          </div>
        </div>
      </div>
    </CARD>
  );
};

export default SavedItemCard;

const CARD = styled.div`
  width: 230px;
  height: 300px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;
  border-radius: 8px;
  background-color: #ffff;
  margin: auto;
  cursor:pointer;

  .food-card {
    width: 95%;
    height: 100%;
    display: flex;
    margin: auto;
    flex-direction: column;
    align-items: center;
    justify-content: space-between;
  }
  .food-image {
    width: 90%;
    height: 60%;
    margin: auto;
    display: flex;
  align-items: center;
  justify-content: center;
  }

  .food-image > img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    border-radius: 5px;
    margin: auto;
  }
  .food-info {
    width: 90%;
    height: 30%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    margin: auto;
    
  }

  .food-stats {
    width: 100%;
    height: 20px;
  }
  .food-stats > ul {
    width: 100%;
    list-style: none;
    padding: 0;
    margin: 0;
    display: flex;
    align-items: center;
    justify-content: space-around;
  }

  .food-stats > ul > li {
    display: flex;
    align-items: center;
    font-size: 16px;
    font-weight: 600;
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 2px;
  }

  .food-title {
    width: 100%;
    height: 20px;
    margin: auto;
  }

  .food-title > p {
    font-size: 15px;
    font-weight: 600;
    text-align: center;
    font-family: "Source Sans Pro", Arial, sans-serif;
    margin: auto;
    margin-top:-15px;
  }
`;
