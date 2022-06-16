import './ShareBox.scss'
import React from 'react'
import {MdAddPhotoAlternate, MdLocationOn} from 'react-icons/md';
import {AiFillTags} from 'react-icons/ai';
import {BsFillEmojiLaughingFill} from 'react-icons/bs';
import {BiSend} from 'react-icons/bi';



const ShareBox = () => {
  return (
    <div className='sharebox-container'>
        <div className="contents">
            <div className="top">
                <div className="img">
                <img src="https://cdn.mos.cms.futurecdn.net/p5quSf4dZXctG9WFepXFdR.jpg" alt="" />
                </div>
                <input type="text" name="" id="" placeholder="What's in your mind..." />
            </div>
            <hr className="line" />
            <div className="bottom">
                <div className="items">
                <div className="item">
                    <MdAddPhotoAlternate />
                </div>
                <div className="item">
                    <AiFillTags />
                </div>
                <div className="item">
                    <MdLocationOn />
                </div>
                <div className="item">
                    <BsFillEmojiLaughingFill />
                </div>
                </div>
                <button className='btn btn-success btn-sm'>Share <BiSend /></button>
            </div>
        </div>
    </div>
  )
}

export default ShareBox