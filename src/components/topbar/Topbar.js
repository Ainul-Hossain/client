import React from "react";
import "./topbar.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFacebookSquare, faInstagramSquare, faPinterestSquare, faTwitterSquare } from "@fortawesome/free-brands-svg-icons";
import { faSearch } from "@fortawesome/free-solid-svg-icons";

const Topbar = () => {
  return (
    <div className="top">
      <div className="topLeft">
        <FontAwesomeIcon className="topIcon" icon={faFacebookSquare}/>
        <FontAwesomeIcon className="topIcon" icon={faTwitterSquare}/>
        <FontAwesomeIcon className="topIcon" icon={faPinterestSquare}/>
        <FontAwesomeIcon className="topIcon" icon={faInstagramSquare}/>
      </div>
      <div className="topCenter">
        <ul className="topList">
          <li className="topListItem">HOME</li>
          <li className="topListItem">ABOUT</li>
          <li className="topListItem">CONTACT</li>
          <li className="topListItem">WRITE</li>
          <li className="topListItem">LOGOUT</li>
        </ul>
      </div>
      <div className="topRight">
        <img className="topImg" src="https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="" />
        <FontAwesomeIcon className="topSearchIcon" icon={faSearch}/>
      </div>
    </div>
  )
};

export default Topbar;
