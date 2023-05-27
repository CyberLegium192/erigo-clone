import { Link } from 'react-router-dom';
import {IoIosArrowDown} from "react-icons/io";
import {FaFacebookF, FaInstagram, FaYoutube, FaTiktok} from "react-icons/fa";
import { React, useRef } from "react";
import './footer.css'
const Footer = (props)=> {
  // DROPDOWN 1
  const dropdown = useRef()
  const dropdownClick = (e) =>{
    e.preventDefault()
    dropdown.current.classList.toggle('active-dropdown-custom')
  }
  const Customer = () => {
    return(
      <>
      <a href='' className='dropdownLink' onClick={dropdownClick}>customer service <IoIosArrowDown className='down-arrow'/></a>
      <div className='dropdown-menu customer1' ref={dropdown}>
        <Link to=''>Contact Us</Link>
      </div>
      </>
    )
  }
  // DROPDOWN 2
  const dropdown2 = useRef()
  const dropdownClick2 = (e) =>{
    e.preventDefault()
    dropdown2.current.classList.toggle('active-dropdown')
  }
  const Customer2 = (props) => {
    return(
      <>
      <a href='' className='dropdownLink' onClick={dropdownClick2}>{props.name} <IoIosArrowDown className='down-arrow'/></a>
      <div className='dropdown-menu' ref={dropdown2}>
        <Link to=''>Exchanges & Returns</Link>
        <Link to=''>Payment Information</Link>
        <Link to=''>Track Your Order</Link>
        <Link to=''>FAQs</Link>
      </div>
      </>
    )
  }
  // DROPDOWN 3
  const dropdown3 = useRef()
  const dropdownClick3 = (e) =>{
    e.preventDefault()
    dropdown3.current.classList.toggle('active-dropdown')
  }
  const Customer3 = (props) => {
    return(
      <>
      <a href='' className='dropdownLink' onClick={dropdownClick3}>{props.name} <IoIosArrowDown className='down-arrow'/></a>
      <div className='dropdown-menu' ref={dropdown3}>
        <Link to=''>About Us</Link>
        <Link to=''>Pop up Store</Link>
        <Link to=''>Career</Link>
        <Link to=''>News</Link>
      </div>
      </>
    )
  }
  return(
    <>
    <div className='container-footer'>
      <ul>
        <li>
          <Customer />
        </li>
        <li>
          <Customer2 name='HELP'/>
        </li>
        <li>
          <Customer3 name='BUSINESS'/>
        </li>
      </ul>
      
      <h3>FOLLOW US</h3>
      <div className='sosial-contianer'>
        <div className='sosial-box fb'>
          <FaFacebookF className='sosial'/>
        </div>
        <div className='sosial-box ig'>
          <FaInstagram className='sosial'/>
        </div>
        <div className='sosial-box yt'>
          <FaYoutube className='sosial'/>
        </div>
        <div className='sosial-box tk'>
          <FaTiktok className='sosial'/>
        </div>
      </div>
      <br />
      <h5 className='signFormHeading'>SIGN UP FOR OUR NEWSLETTER</h5>
      <div className='form-sign'>
        <input type='email' placeholder='enter your email'/>
        <button type='button'>SUBMIT</button>
      </div>
    </div>
    </>
    
  )
  
  
}

export default Footer