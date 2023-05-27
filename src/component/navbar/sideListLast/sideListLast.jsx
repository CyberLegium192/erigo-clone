import {MdKeyboardArrowLeft, MdKeyboardArrowRight} from "react-icons/md";
import { React, useRef } from "react";
import './sidelistlast.css'

const SideListLast = (props) => {
  const sideListLast = useRef()
  const closeSideList = useRef()
    const showSideListLast = (e) => { 
    e.preventDefault();
      sideListLast.current.classList.toggle('active_side')
    }
  return (
    <>
      <a href='' className="link" onClick={showSideListLast}>
        {props.product}<MdKeyboardArrowRight className='icons-arrow-right'/>
      </a>
      <div className='sideList' ref={sideListLast}>
        <div className='closeside'>
          <a href='' className="link" onClick={showSideListLast}>
          {props.product}<MdKeyboardArrowLeft className='icons'/>
          </a>
        </div>
        
        
      <div className='bodySideList'>
         <a href='' className='toProductMenu'>{props.product}</a>
      </div>
    </div>
      
      
      
      
      
      
    </>
  );
};

export default SideListLast;
