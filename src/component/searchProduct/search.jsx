import { React, useRef } from "react";
import { AiOutlineMenu, AiOutlineClose, AiOutlineSearch,} from "react-icons/ai";
import ReactDOM from 'react-dom'
import "./search.css";
import Product from'../product/product.jsx'

const Search = () => {
  const searchRef = useRef();
  const search2Ref = useRef();
  const clickList = () => {
    searchRef.current.classList.add("activeSearch");
    search2Ref.current.classList.add("activeSearch");
  }
  const closeList = () => {
    searchRef.current.classList.remove("activeSearch");
    search2Ref.current.classList.remove("activeSearch");
  }
  return(
    <>
      <button type='button' onClick={clickList} className='otherbutton'><AiOutlineSearch /></button>  
      
      <div className='searchList2' ref={search2Ref}></div>
      <div className='searchList' ref={searchRef}>
        <div className='header-list'>
          <button type='button' className="close" onClick={closeList}><AiOutlineClose />Close</button>
        </div>
        <div className='body-search'>
          <h3>SEARCH</h3>
          <div className='box-search'>
            <input type='text' placeholder='search'/>
            <button type='button' className='otherbutton search-box'><AiOutlineSearch /></button>
          </div>
          
          <h3>TOP SEARCH</h3>
          <div className='top-search'>
            <button className='top-button-search'><AiOutlineSearch /> chino pants</button>
            <button className='top-button-search'><AiOutlineSearch /> oversize</button>
            <button className='top-button-search'><AiOutlineSearch /> T-Shirt</button>
            <button className='top-button-search'><AiOutlineSearch /> hoddie</button>
            <button className='top-button-search'><AiOutlineSearch /> basic</button>
            <button className='top-button-search'><AiOutlineSearch /> jogger pants</button>
          </div>
          
        </div>
      </div>
    </>
  )
}


export default Search