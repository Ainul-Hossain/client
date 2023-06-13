import React from "react";
import "./topbar.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFacebookSquare, faInstagramSquare, faPinterestSquare, faTwitterSquare } from "@fortawesome/free-brands-svg-icons";
import { faSearch } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";

const Topbar = () => {
  const user = false;

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
          <li className="topListItem"><Link className="link" to='/'>HOME</Link></li>
          <li className="topListItem"><Link className="link" to='/'>ABOUT</Link></li>
          <li className="topListItem"><Link className="link" to='/'>CONTACT</Link></li>
          <li className="topListItem"><Link className="link" to='/write'>WRITE</Link></li>
          <li className="topListItem">
            {user && 'LOGOUT'}
          </li>
        </ul>
      </div>

      <div className="topRight">
        {
          user ? ( <img className="topImg" src="https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="" /> ) : ( 
            <ul className="topList">
              <li className="topListItem"><Link className="link" to='/login'>LOGIN</Link></li>
              <li className="topListItem"><Link className="link" to='/register'>REGISTER</Link></li>
            </ul>
          )
        }
        <FontAwesomeIcon className="topSearchIcon" icon={faSearch}/>
      </div>
    </div>
  )
};

export default Topbar;
