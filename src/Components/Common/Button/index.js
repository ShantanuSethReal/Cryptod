import React from "react";
import "./style.css";
import { Link } from "react-router-dom";
function Button({ text, onClick, outlined, link }) {
  if(link){
 return (
   <Link to={`/${link}`}>
     <div className={outlined ? "outlined-btn" : "btn"} onClick={() => onClick}>
       {text}
     </div>
   </Link>
 );
  }
  else{
    return (
      <div className={outlined ? "outlined-btn" : "btn"} onClick={() => onClick}>
        {text}
      </div>
    );
  }
 
}

export default Button;
