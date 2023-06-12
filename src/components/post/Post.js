import React from 'react';
import './post.css';

const Post = () => {
    return (
        <div className='post'>
            <img className='postImage' src="https://images.pexels.com/photos/261579/pexels-photo-261579.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="" />

            <div className="postInfo">
                <div className="postCats">
                    <span className="postCat">Music</span>
                    <span className="postCat">Life</span>
                </div>

                <span className="postTitle">
                    Lorem ipsum dolor sit amet
                </span>
                <hr />
                <span className="postDate">1 hour ago</span>
                <p className='postDesc'>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Iste, quia labore iure temporibus, accusamus quibusdam debitis suscipit quisquam a ducimus ipsa excepturi. Facilis corrupti ab beatae nesciunt laborum recusandae illo?Lorem, ipsum dolor sit amet consectetur adipisicing elit. Iste, quia labore iure temporibus, accusamus quibusdam debitis suscipit quisquam a ducimus ipsa excepturi. Facilis corrupti ab beatae nesciunt laborum recusandae illo?Lorem, ipsum dolor sit amet consectetur adipisicing elit. Iste, quia labore iure temporibus, accusamus quibusdam debitis suscipit quisquam a ducimus ipsa excepturi. Facilis corrupti ab beatae nesciunt laborum recusandae illo?Lorem, ipsum dolor sit amet consectetur adipisicing elit. Iste, quia labore iure temporibus, accusamus quibusdam debitis suscipit quisquam a ducimus ipsa excepturi. Facilis corrupti ab beatae nesciunt laborum recusandae illo?Lorem, ipsum dolor sit amet consectetur adipisicing elit. Iste, quia labore iure temporibus, accusamus quibusdam debitis suscipit quisquam a ducimus ipsa excepturi. Facilis corrupti ab beatae nesciunt laborum recusandae illo?Lorem, ipsum dolor sit amet consectetur adipisicing elit. Iste, quia labore iure temporibus, accusamus quibusdam debitis suscipit quisquam a ducimus ipsa excepturi. Facilis corrupti ab beatae nesciunt laborum recusandae illo?Lorem, ipsum dolor sit amet consectetur adipisicing elit. Iste, quia labore iure temporibus, accusamus quibusdam debitis suscipit quisquam a ducimus ipsa excepturi. Facilis corrupti ab beatae nesciunt laborum recusandae illo?</p>
            </div>
        </div>
    );
};

export default Post;