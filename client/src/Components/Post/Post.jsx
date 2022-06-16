import './Post.scss';
import React from 'react';
import {AiTwotoneLike} from 'react-icons/ai';


const Post = () => {
  return (
    <div className='post-container'>
        <div className="contents">
            <div className="top">
                <div className="top-left">
                   <div className="user-details"> 
                    <div className="img">
                        <img src="https://cdn.mos.cms.futurecdn.net/p5quSf4dZXctG9WFepXFdR.jpg" alt="" />
                    </div>
                   <div className="name-time">
                    <p className='name'>Elizabeth</p>
                    <p className='time'>5 mins</p>
                   </div>
                   </div>
                </div>
                <div className="top-right"></div>
            </div>
            <div className="center">
                <p>This is my post title</p>
                <div className="img">
                    <img src="https://s7.bluegreenvacations.com/is/image/BGV/collection-cityscape-sm?$bg2-hero-sm$" alt="" />
                </div>
            </div>
            <div className="bottom">
                <div className="bottom-left">
                    <div className="likes">
                        <AiTwotoneLike />
                        <p>12</p>
                    </div>
                </div>
                <div className="bottom-right">
                    <p>3 comments</p>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Post