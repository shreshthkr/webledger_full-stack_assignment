import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { useSearchParams, NavLink, useNavigate } from "react-router-dom";
import { SearchIcon } from "@chakra-ui/icons";
import { RxAvatar } from "react-icons/rx";
import { GiKnifeFork } from "react-icons/gi";

const links = [
  { path: "/", text: "Home" },
  { path: "/saved", text: "Saved" },
];
const Navbar = () => {
  const [search, setSearch] = useState("");
  const [searchParams, setSearchParams] = useSearchParams();
  const navigate = useNavigate();
  const token = localStorage.getItem("token");
  const ToHomePage = () => {
    return navigate("/");
  };

  const ToLoginPage = () => {
    return navigate("/login");
  };

  const handleClick = (e) => {
    let params = {};
    search && (params.search = search);
    setSearchParams(params);
  };
const handleLogOut = () => {
  localStorage.removeItem('token');
  navigate("/")
}
  return (
    <NAVBAR>
      <div className="nav-1">
        <div className="logo">
          <h1 onClick={ToHomePage}>
            <GiKnifeFork />
            Recepies
          </h1>
        </div>
        <div className="menu">
          {links.map((link) => (
            <NavLink
              className={({ isActive }) => {
                return isActive ? "active" : "default";
              }}
              key={link.path}
              to={link.path}
            >
              {link.text}
            </NavLink>
          ))}
        </div>
      </div>
      <div className="nav-2">
        <div className="search-box">
          <input
            type="text"
            placeholder="Search recepie"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            onKeyPress={(e) =>
              e.key === "Enter" ? handleClick() : console.log("error")
            }
          />
          <button onClick={handleClick}>
            <SearchIcon fontWeight={600} />
          </button>
        </div>
        <div className="login-avatar">

        { !token ? (<RxAvatar
            fontSize={"30px"}
            cursor={"pointer"}
            onClick={ToLoginPage}
          />): ( <button className="logout" onClick={handleLogOut}>Logout</button>)}
        </div>
      </div>
    </NAVBAR>
  );
};

export default Navbar;

const NAVBAR = styled.div`
  width: 100%;
  height: 65px;
  box-shadow: rgba(99, 99, 99, 0.2) 0px 2px 8px 0px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  background-color: #ffff;
  position: sticky;
  top: 0;
  z-index: 1;

  .nav-1 {
    width: 40%;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: space-around;
  }
  .logo {
    width: 30%;
  }
  .logo > h1 {
    font-size: 24px;
    text-align: center;
    font-family: cursive;
    font-style: bold;
    color: #ff3700;
    display: flex;
    align-items: center;
    justify-content: center;
  }
  .logo > h1:hover {
    cursor: pointer;
  }
  .menu {
    width: 58%;
    display: flex;
    align-items: center;
    justify-content: space-between;
  }
  .active {
    font-size: 15px;
    color: #ff3700;
    text-decoration: none;
    cursor: pointer;
    font-weight: 600;
    font-family: "Source Sans Pro", Arial, sans-serif;
  }
  .default {
    font-size: 15px;
    color: black;
    text-decoration: none;
    cursor: pointer;
    font-weight: 600;
    font-family: "Source Sans Pro", Arial, sans-serif;
  }
  .nav-2 {
    width: 50%;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: space-around;
  }
  .search-box {
    width: 60%;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
  }
  .search-box > input {
    width: 80%;
    height: 30px;
    border: 1px solid gray;
    border-right: none;
    border-bottom-left-radius: 5px;
    border-top-left-radius: 5px;
  }
  .search-box > button {
    width: 80px;
    height: 30px;
    border: 1px solid gray;
    border-left: none;
    border-bottom-right-radius: 5px;
    border-top-right-radius: 5px;
  }
  .logout{
    width:100px;
    height: 30px;
    background-color: #ff3700;
    border:none;
    cursor:pointer;
    color:#ffff;
    border-radius:8px;
  }
`;
