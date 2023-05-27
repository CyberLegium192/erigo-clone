import { React, useRef } from "react";
import {
  AiOutlineMenu,
  AiOutlineClose,
  AiOutlineSearch,
  AiOutlineUser,
  AiOutlineShoppingCart,
} from "react-icons/ai";
import { Link } from 'react-router-dom';
import {MdKeyboardArrowRight} from 'react-icons/md'
import ReactDOM from "react-dom";
import Search from "../searchProduct/search.jsx";
import SideList from "./sidelist/sideList.jsx";
import SideListLast from "./sideListLast/sideListLast.jsx";
import Login from "../login/login.jsx";
import "./navbar.css";



const Navbar = () => {
  const navRef = useRef();
  const tesRef = useRef();
  const showNavBar = () => {
    navRef.current.classList.toggle("active-nav");
    tesRef.current.classList.toggle("active-nav");
  };
  const closeList = () => {
    navRef.current.classList.toggle("active-nav");
    tesRef.current.classList.toggle("active-nav");
  }
  return (
    <>
      <nav className="navbar">
        <button type="button" className="menuButton" onClick={showNavBar}>
          <AiOutlineMenu />
        </button>
        <h2>ERIGO</h2>
        <div className="otherMenu">
          <Search />
          <Login />
          <button type="button" className="otherbutton">
            <AiOutlineShoppingCart />
          </button>
        </div>
      </nav>

      <div className="navbarLink2" ref={tesRef}></div>
      <div className="navbarLink" ref={navRef}>
      <div className='header-list'>
        <button type='button' className="close" onClick={closeList}><AiOutlineClose />Close</button>
      </div>
        <ul>
          <li>
            <SideList name="Erigo" erigo="Erigo"/>
          </li>
          <li>
            <SideList name="Erigo-X" erigo="Erigo-X "/>
          </li>
          <li>
            <Link to="" className="link">
              Erigo Tour
            </Link>
          </li>
          <li>
            <a href="" className="link">
              Campaign
            </a>
          </li>
          <li>
            <a href="" className="otherlink">
              my wish list
            </a>
          </li>
          <li>
            <a href="" className="otherlink">
              sign in
            </a>
          </li>
          <li>
            <a href="" className="otherlink">
              create an account
            </a>
          </li>
        </ul>
      </div>
      
    </>
  );
};

export default Navbar;
