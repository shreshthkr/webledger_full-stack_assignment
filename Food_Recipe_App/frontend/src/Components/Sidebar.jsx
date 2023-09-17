import React, { useEffect, useState } from 'react'
import styled from 'styled-components';
import {
    Accordion,
    AccordionItem,
    AccordionButton,
    AccordionPanel,
    AccordionIcon,
    Box,
    Text,
  } from '@chakra-ui/react';
import { useSearchParams } from 'react-router-dom';
const Sidebar = () => {

    const [searchParams, setSearchParams] = useSearchParams();
    const initialDiet= searchParams.getAll("diet");
    const initialCuisine= searchParams.getAll("cuisine");
    const initialType= searchParams.getAll("type");
    const [diet, setDiet] = useState(initialDiet || "");
    const [cuisine, setCuisine] = useState(initialCuisine || "");
    const [type, setType] = useState(initialType || "");



    const handleChange = (event) => {
        let value = event.target.value;
       setDiet(value);
       
      
    };

const handleCuisine = (event) => {
    let value = event.target.value;
    setCuisine(value)

}

const handleMealType = (event) => {
    let value = event.target.value;
    setType(value);
}

    useEffect(() =>{
    let params = {
        diet,
        cuisine,
        type,
    }
    setSearchParams(params)
    },[diet,cuisine,type]);

  return (
    <SIDEBAR>
      <div className='filter-heading'>
        <h1>Filters</h1>
      </div>
      <div className='filter-options'>
        <Accordion  defaultIndex={[0]}
                allowMultiple
                backgroundColor="#fff"
                 display={"flex"}
                 flexDirection={"column"}
                 alignItems={"center"}
                 justifyContent={"center"}
                 gap={"10px"}
                 w="100%"
                >
          <AccordionItem w="100%" backgroundColor="white"
           borderBottom={"1px solid gray"}
          >
            <Text fontSize={"18px"} fontWeight={600}>
                <AccordionButton backgroundColor="white"
                      border="none">
                <Box as="span" flex="1" textAlign="left" h="25px">
                <Text fontSize={"15px"} fontWeight={600}>Diet</Text>
              </Box>   
              <AccordionIcon fontSize={"18px"}  />
                </AccordionButton>
            </Text>
            <AccordionPanel
             display="flex"
             flexDirection="column"
             alignItems="flex-start"
             onChange={handleChange}
             >
                <Box display="flex" gap="5px">
              <input
                type="checkbox"
                value=""
                name={"diet"}
                checked={diet===""}
              />
              <label>All</label>
              <br />
            </Box>
             <Box display="flex" gap="5px">
              <input
                type="checkbox"
                value="Vegetarian"
                name={"diet"}
                checked={diet==="Vegetarian"}
              />
              <label>Vegetarian</label>
              <br />
            </Box>
            <Box display="flex" gap="5px">
              <input
                type="checkbox"
                value="Vegan"
                name={"diet"}
                checked={diet==="Vegan"} 
                
              />
              <label>Vegan</label>
              <br />
            </Box>
            <Box display="flex" gap="5px">
              <input
                type="checkbox"
                value="Gluten Free"
                name={"diet"}
                checked={diet==="Gluten Free"} 
              />
              <label>Gluten Free</label>
              <br />
            </Box>
            </AccordionPanel>
          </AccordionItem>
          <AccordionItem w="100%"
           borderBottom={"1px solid gray"}>
            <Text fontSize={"18px"} fontWeight={600}>
                <AccordionButton backgroundColor="white"
                      border="none">
                <Box as="span" flex="1" textAlign="left" h="25px">
                <Text fontSize={"15px"} fontWeight={600}>Cuisine</Text>
              </Box>   
              <AccordionIcon fontSize={"18px"} />
                </AccordionButton>
            </Text>
            <AccordionPanel
             display="flex"
             flexDirection="column"
             alignItems="flex-start"
             onChange={handleCuisine}
             >
             <Box display="flex" gap="5px">
              <input
                type="radio"
                value="Indian"
                name="cuisine"
                defaultChecked={cuisine ==="Indian" }
              />
              <label>Indian</label>
              <br />
            </Box>
            <Box display="flex" gap="5px">
              <input
                type="radio"
                value="Italian"
                name="cuisine"
                defaultChecked={cuisine ==="Italian"}
              />
              <label>Italian</label>
              <br />
            </Box>
            <Box display="flex" gap="5px">
              <input
                type="radio"
                value="French"
                name="cuisine"
                defaultChecked={cuisine ==="French"}
              />
              <label>French</label>
              <br />
            </Box>
            <Box display="flex" gap="5px">
              <input
                type="radio"
                value="Thai"
                name="cuisine"
                defaultChecked={cuisine ==="Thai"}
              />
              <label>Thai</label>
              <br />
            </Box>
            <Box display="flex" gap="5px">
              <input
                type="radio"
                value="Chinese"
                name="cuisine"
                defaultChecked={cuisine ==="Chinese"}
              />
              <label>Chinese</label>
              <br />
            </Box>
            </AccordionPanel>
          </AccordionItem>
          <AccordionItem w="100%"
           borderBottom={"1px solid gray"}>
            <Text fontSize={"18px"} fontWeight={600}>
                <AccordionButton backgroundColor="white"
                      border="none">
                <Box as="span" flex="1" textAlign="left"
                  h="25px"
                >
                <Text fontSize={"15px"} fontWeight={600}>Meal Type</Text>
              </Box>   
              <AccordionIcon fontSize={"18px"} />
                </AccordionButton>
            </Text>
            <AccordionPanel
             display="flex"
             flexDirection="column"
             alignItems="flex-start"
             onChange={handleMealType}
             >
             <Box display="flex" gap="5px">
              <input
                type="radio"
                value="Appetizer"
                name="type"
                defaultChecked={type==="Appetizer"}
              />
              <label>Appetizer</label>
              <br />
            </Box>
            <Box display="flex" gap="5px">
              <input
                type="radio"
                value="main course"
                name="type"
                defaultChecked={type==="main course"}
              />
              <label>Main Course</label>
              <br />
            </Box>
            <Box display="flex" gap="5px">
              <input
                type="radio"
                value="dessert"
                name="type"
                defaultChecked={type==="dessert"}
              />
              <label>Dessert</label>
              <br />
            </Box>
            <Box display="flex" gap="5px">
              <input
                type="radio"
                value="salad"
                name="type"
                defaultChecked={type==="salad"}
              />
              <label>Salad</label>
              <br />
            </Box>
            <Box display="flex" gap="5px">
              <input
                type="radio"
                value="snack"
                name="type"
                defaultChecked={type==="snack"}
              />
              <label>Snack</label>
              <br />
            </Box>
            </AccordionPanel>
          </AccordionItem>
        </Accordion>
      </div>
    </SIDEBAR>
  )
}

export default Sidebar;

const SIDEBAR = styled.div`
    width: 95%;
    height: 98%;
    margin: auto;
 
 .filter-heading{
    width: 100%;
    height: 45px;
    display: flex;
    align-items: center;
    justify-content: flex-start;
    margin-top: 10px;
 }
 .filter-heading>h1{
    font-size: 25px;
    font-style: bold;
    font-family: "Source Sans Pro", Arial, sans-serif;
 }
`