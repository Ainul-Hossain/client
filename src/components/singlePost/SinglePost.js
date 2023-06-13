import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEdit, faTrashAlt } from '@fortawesome/free-solid-svg-icons';
import './singlePost.css';

const SinglePost = () => {
    return (
        <div className='singlePost'>
            <div className="singlePostWrapper">
                <img className="singlePostImg" src="https://images.pexels.com/photos/261579/pexels-photo-261579.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="" />
                <h1 className="singlePostTitle">
                    Lorem ipsum, dolor sit
                    <div className="singlePostEdit">
                        <FontAwesomeIcon className='singlePostIcon' icon={faEdit}/>
                        <FontAwesomeIcon className='singlePostIcon' icon={faTrashAlt}/>
                    </div>
                </h1>
                <div className="singlePostInfo">
                    <span className='singlePostAuthor'>Author: <b>Ainul</b></span>
                    <span className='singlePostDate'>1 hour ago</span>
                </div>
                <p className='singlePostDesc'>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ab unde ducimus necessitatibus, tenetur optio, consequatur officia magni ipsa id, quis voluptates nostrum asperiores? Quidem vel earum tempora error! Laudantium, placeat!Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ab unde ducimus necessitatibus, tenetur optio, consequatur officia magni ipsa id, quis voluptates nostrum asperiores? Quidem vel earum tempora error! Laudantium, placeat!Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ab unde ducimus necessitatibus, tenetur optio, consequatur officia magni ipsa id, quis voluptates nostrum asperiores? Quidem vel earum tempora error! Laudantium, placeat!Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ab unde ducimus necessitatibus, tenetur optio, consequatur officia magni ipsa id, quis voluptates nostrum asperiores? Quidem vel earum tempora error! Laudantium, placeat!Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ab unde ducimus necessitatibus, tenetur optio, consequatur officia magni ipsa id, quis voluptates nostrum asperiores? Quidem vel earum tempora error! Laudantium, placeat!Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ab unde ducimus necessitatibus, tenetur optio, consequatur officia magni ipsa id, quis voluptates nostrum asperiores? Quidem vel earum tempora error! Laudantium, placeat!Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ab unde ducimus necessitatibus, tenetur optio, consequatur officia magni ipsa id, quis voluptates nostrum asperiores? Quidem vel earum tempora error! Laudantium, placeat!Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ab unde ducimus necessitatibus, tenetur optio, consequatur officia magni ipsa id, quis voluptates nostrum asperiores? Quidem vel earum tempora error! Laudantium, placeat!Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ab unde ducimus necessitatibus, tenetur optio, consequatur officia magni ipsa id, quis voluptates nostrum asperiores? Quidem vel earum tempora error! Laudantium, placeat!</p>
            </div>
        </div>
    );
};

export default SinglePost;