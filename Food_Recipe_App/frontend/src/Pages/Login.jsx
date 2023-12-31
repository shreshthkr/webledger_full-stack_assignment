import React, { useState } from "react";
import styled from "styled-components";
import { GiKnifeFork } from "react-icons/gi";
import { FcGoogle } from "react-icons/fc";
import { useNavigate } from "react-router-dom";
import { useToast } from '@chakra-ui/react';
const Login = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const toast = useToast()
  const handleToSignup = () => {
    
    return navigate("/signup")
  }
  const handleSubmit = () => {
    const payload = {
      email: email,
      password: password,
    };
    fetch("https://zany-jade-elk-yoke.cyclic.cloud/users/login", {
      method: "POST",
      headers: {
        "Content-type": "Application/json",
      },
      body: JSON.stringify(payload),
    })
      .then((res) => res.json())
      .then((res) => {
        console.log(res);
        localStorage.setItem("token", res.token);
        toast({
          title: 'Login Successfull',
          status: 'success',
          duration: 9000,
          isClosable: true,
        })
      })
      .catch((err) => {console.log(err)
        toast({
          title: 'Invalid Credentials',
          status: 'error',
          duration: 9000,
          isClosable: true,
        })
      });
  };
  return (
    <LOGINCONTAINER>
      <div className="logo">
        <h1>
          <GiKnifeFork />
          Recepies
        </h1>
      </div>
      <div className="form">
        <div>
          <form className="form-box">
            <div className="input-tag">
              <label>Email</label>
              <input 
              type="email" 
              placeholder="Enter registered email"
              value={email}
              onChange={(e)=> setEmail(e.target.value)}
               />
            </div>
            <div className="input-tag">
              <label>Password</label>
              <input 
              type="password" 
              placeholder="Enter your password"
              value={password}
              onChange={(e)=> setPassword(e.target.value)}
              />
            </div>
          </form>
          <button onClick={handleSubmit}>Login</button>
        </div>
        <div className="signup-opt">
          <p>
            Didn't have account? <span onClick={handleToSignup}>Signup</span>
          </p>
          <div className="google-opt">
            <p>Continue With Google <FcGoogle/></p>
          </div>
        </div>
      </div>
    </LOGINCONTAINER>
  );
};

export default Login;

const LOGINCONTAINER = styled.div`
  width: 80%;
  height: auto;
  margin: auto;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 10px;
  margin-top: 30px;

  .logo {
    width: 50%;
    height: 60px;
  }
  .logo >h1{
    font-size: 25px;
    text-align: center;
    font-family: cursive;
    font-style: bold;
    color: #ff3700;
    display: flex;
    align-items: center;
    justify-content: center;
  }
  .form {
    width: 40%;
    height:auto;
    display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
  gap: 10px;
  
  }

  .form>div:first-child{
    width: 98%;
    height: auto;
    margin: auto;
    display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
  gap: 15px;
  }

  .input-tag{
    width: 100%;
    height: auto;
    display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
 gap: 5px;
  }
  .form-box{
    width: 100%;
 
  }
  input[type="email"]{
     width: 98%;
     height: 35px;
     border: 1px solid gray;
     text-align: left;
     border-radius: 8px;
     margin-bottom: 15px;

  }
  input[type="password"]{
     width: 98%;
     height: 35px;
     border: 1px solid gray;
     border-radius: 8px;
     
     
  }
  .form>div:first-child button{
    width: 95%;
    height: 35px;
    border: none;
    border-radius: 8px;
    background-color: #ff3700;
    color: #ffff;
    font-size: 15px;
    cursor: pointer;
  }

  .signup-opt{
    width: 100%;
    height: 30px;
  }
  .signup-opt>p{
    text-align: center;
    font-size: 16px;
    font-family: "Source Sans Pro", Arial, sans-serif;
  }
  .signup-opt>p span{
    color: blue;
    cursor: pointer;
  }
  .google-opt{
    width: 80%;
    height: 35px;
    margin: auto;
    border: 1px solid gray;
    background-color: #eaeaea;
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 5px;
    cursor: pointer;
  }
  .google-opt>p{
    text-align: center;
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 5px;
  }
`;
