import React, { useState } from 'react'
import styled from 'styled-components';
import { GiKnifeFork } from "react-icons/gi";
import { useNavigate } from "react-router-dom";
import { useToast } from '@chakra-ui/react'
const Signup = () => {

    const [name,setName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const navigate = useNavigate();
    const toast = useToast()

    const handleToLogin = () => {
      return navigate("/login")
    }

   const handleSubmit = (e) => {
    e.preventDefault();
    console.log("abc")
    const payload = {
        name:name,
        email:email,
        password:password,

    };
    fetch("http://localhost:8080/users/register",{
        method:"POST",
        headers: {
            "Content-type": "Application/json",
          },
          body: JSON.stringify(payload), 
    })
    .then((res) => res.json())
    .then((res) =>{ console.log(res);
    toast({
        title: 'Successfull',
        description: "Signup Successful, go to Login page",
        status: 'success',
        duration: 9000,
        isClosable: true,
      })
   } )
    .catch((err) => console.log(err));
   }
  return (
    <SIGNUP>
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
              <label>Name</label>
              <input type="text" placeholder="Enter your full name" value={name} onChange={(e) => (setName(e.target.value))} />
            </div>
            <div className="input-tag">
              <label>Email</label>
              <input type="email" placeholder="Enter your email" value={email} onChange={(e) => (setEmail(e.target.value))} />
            </div>
            <div className="input-tag">
              <label>Password</label>
              <input type="password" placeholder="Enter password" value={password} onChange={(e) => (setPassword(e.target.value))} />
            </div>
          </form>
          <button type="submit" onClick={handleSubmit}>Signup</button>
        </div>
        <div className="login-opt">
          <p>
            Already have an account? <span onClick={handleToLogin}>Login</span>
          </p>
        </div>
      </div>
    </SIGNUP>
  )
}

export default Signup;


const SIGNUP = styled.div`
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
  input[type="text"]{
     width: 98%;
     height: 35px;
     border: 1px solid gray;
     text-align: left;
     border-radius: 8px;
     margin-bottom: 15px;

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

  .login-opt{
    width: 100%;
    height: 30px;
  }
  .login-opt>p{
    text-align: center;
    font-size: 16px;
    font-family: "Source Sans Pro", Arial, sans-serif;
  }
  .login-opt>p span{
    color: blue;
    cursor: pointer;
  }
`