import React from 'react';
import './settings.css';
import Sidebar from '../../components/sidebar/Sidebar';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUserCircle } from '@fortawesome/free-solid-svg-icons';

const Settings = () => {
    return (
        <div className='settings'> 
            <div className="settingsWrapper">
                <div className="settingsTitle">
                    <span className='settingsUpdateTitle'>Update Your Account</span>
                    <span className='settingsDeleteTitle'>Delete Your Account</span>
                </div>

                <form className="settingsForm">
                    <label>Profile Picture</label>

                    <div className="settingsPP">
                        <img src="https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="" />

                        <label htmlFor="fileInput">
                            <FontAwesomeIcon className='settingsPPIcon' icon={faUserCircle}/>
                        </label>
                        <input type="file" id='fileInput' style={{display: 'none'}} />
                    </div>

                    <label>Username</label>
                    <input type="text" placeholder='Ainul' />

                    <label>Email</label>
                    <input type="email" placeholder='ainulsakibs@gmail.com' />
                    
                    <label>Password</label>
                    <input type="password" />

                    <button className="settingsSubmit">Update</button>
                </form>
            </div>

            <Sidebar/>
        </div>
    );
};

export default Settings;