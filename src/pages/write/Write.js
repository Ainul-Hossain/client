import React from 'react';
import './write.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlus } from '@fortawesome/free-solid-svg-icons';

const Write = () => {
    return (
        <div className='write'>
            <img className='writeImg' src="https://images.pexels.com/photos/261579/pexels-photo-261579.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="" />
            
            <form className='writeForm'>
                <div className="writeFormGroup">
                    <label htmlFor="fileInput">
                        <FontAwesomeIcon className='writeIcon' icon={faPlus}/>
                    </label>
                    <input style={{display: 'none'}} type="file" id='fileInput' />
                    <input className='writeInput' autoFocus={true} type="text" placeholder='Title...' />
                </div>

                <div className="writeFormGroup">
                    <textarea className='writeInput writeText' placeholder='Tell your story...' type='text'></textarea>
                </div>

                <button className='writeSubmit'>Publish</button>
            </form>
        </div>
    );
};

export default Write;