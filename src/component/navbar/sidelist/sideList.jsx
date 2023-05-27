import {MdKeyboardArrowLeft, MdKeyboardArrowRight} from "react-icons/md";
import { React, useRef } from "react";
import SideListLast from "../sideListLast/sideListLast.jsx"
import './sidelist.css'

const SideList = (props) => {
  const sideList = useRef()
  const sideListLast = useRef()
    const showSideList = (e) => { 
    e.preventDefault();
      sideList.current.classList.toggle('active_side')
    }
  return (
    <>
    <a href="" className="link"
    onClick={showSideList}>{props.name}<MdKeyboardArrowRight className='right'/></a>
    
     <div className='sideList' ref={sideList}>
        <div className='closeside'>
          <a href='' className="link" onClick={showSideList}>
          {props.erigo}<MdKeyboardArrowLeft className='icons'/>
          </a>
        </div>
      
      <div className='bodySideList'>
        <ul>
        <li>
          <a href=''>{props.name} all product</a>
         </li>
        <li>
          <a href=''>{props.name} T-Shirt</a>
         </li>
        <li>
          <a href=''>{props.name} Pants</a>
         </li>
        <li>
          <a href=''>{props.name} Shirt</a>
         </li>
        <li>
          <a href=''>{props.name} Accesoris</a>
         </li>
        </ul>
      </div>
    </div>
      
      
      
    </>
  );
};

export default SideList;
