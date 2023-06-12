import React from 'react';
import './sidebar.css';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFacebookSquare, faInstagramSquare, faPinterestSquare, faTwitterSquare } from "@fortawesome/free-brands-svg-icons";

const Sidebar = () => {
    return (
        <div className='sidebar'>
            <div className="sidebarItem">
                <span className="sidebarTitle">
                    ABOUT ME
                </span>
                <img className='sidebarImage' src="https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="" />
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quidem modi, quibusdam autem distinctio et saepe .</p>
            </div>

            <div className="sidebarItem">
                <span className="sidebarTitle">
                    CATEGORIES
                </span>
                <ul className="sidebarList">
                    <li className="sidebarListItem">Tech</li>
                    <li className="sidebarListItem">Life</li>
                    <li className="sidebarListItem">Music</li>
                    <li className="sidebarListItem">Style</li>
                    <li className="sidebarListItem">Sports</li>
                    <li className="sidebarListItem">Movie</li>
                </ul>
            </div>

            <div className="sidebarItem">
                <span className="sidebarTitle">
                    FOLLOW US
                </span>
                <div className="sidebarSocial">
                    <FontAwesomeIcon className="sidebarIcon" icon={faFacebookSquare}/>
                    <FontAwesomeIcon className="sidebarIcon" icon={faTwitterSquare}/>
                    <FontAwesomeIcon className="sidebarIcon" icon={faPinterestSquare}/>
                    <FontAwesomeIcon className="sidebarIcon" icon={faInstagramSquare}/>
                </div>
            </div>
        </div>
    );
};

export default Sidebar;