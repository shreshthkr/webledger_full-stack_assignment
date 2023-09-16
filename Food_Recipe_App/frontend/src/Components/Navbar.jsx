import React from "react";
import { Box, Flex, UnorderedList, ListItem, Heading, InputGroup, Input,InputRightAddon, InputRightElement, Stack } from "@chakra-ui/react";
import { SearchIcon } from '@chakra-ui/icons'
import { Link } from "react-router-dom";
const Navbar = () => {
  return (
    <>
      <Box
        w="100%"
        h="60px"
        boxShadow="rgba(99, 99, 99, 0.2) 0px 2px 8px 0px"
        display="flex"
        alignItems="center"
        justifyContent="space-between"
        position="fixed"
        top={0}
      >
        <Flex
          w="50%"
          border={"1px solid red"}
          h="100%"
          alignItems={"center"}
          justifyContent={"space-around"}
        >
          <Heading
            fontFamily={"cursive"}
            fontStyle={"sans-serif"}
            fontWeight={700}
            color={"orange"}
            _hover={{cursor:"pointer"}}
          >
            Recepies
          </Heading>
          <UnorderedList
            w="40%"
            display="flex"
            listStyleType="none"
            alignItems={"center"}
            justifyContent={"space-around"}
          >
            <ListItem
              fontSize={"16px"}
              fontWeight={600}
              fontFamily={"sans-serif"}
              color={"blackAlpha.200"}
            >
              <Link to="/"  style={{ textDecoration: "none !important" }}>
                Home
              </Link>
            </ListItem>
            <ListItem
              fontSize={"16px"}
              fontWeight={600}
              fontFamily={"sans-serif"}
              color={"blackAlpha.200"}
            >
              <Link
                to="/saved"
                _hover={{ textDecoration: "none" }}
                _focus={{ textDecoration: "none" }}
              >
                Saved
              </Link>
            </ListItem>
          </UnorderedList>
        </Flex>
        <Flex
        w="50%"

        >
            <Stack>
        <InputGroup>
   
    <Input placeholder='Search recepie' />
    <InputRightElement>
      <SearchIcon color='black.500' />
    </InputRightElement>
  </InputGroup>
  </Stack>
  <Box>
    
  </Box>
        </Flex>
      </Box>
    </>
  );
};

export default Navbar;
