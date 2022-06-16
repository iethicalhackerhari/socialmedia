import './ProfilePage.scss'
import React from 'react';
import {BsFillHouseFill} from 'react-icons/bs';
import {MdLocationOn, MdAccessTimeFilled} from 'react-icons/md';
import {FaUserFriends, FaUserAlt} from 'react-icons/fa';
import SideBarLeft from '../../Components/SideBarLeft/SideBarLeft';
import NavBar from '../../Components/NavBar/NavBar';
import Feed from '../../Components/Feed/Feed';



const friendslist = [{
    img: "https://i.pinimg.com/originals/f9/b2/d7/f9b2d7454312d6472f02f03314bd2ed2.jpg",
    name: "Jane"
  },{
    img: "https://i.pinimg.com/originals/f9/b2/d7/f9b2d7454312d6472f02f03314bd2ed2.jpg",
    name: "Jane"
  },{
    img: "https://i.pinimg.com/originals/f9/b2/d7/f9b2d7454312d6472f02f03314bd2ed2.jpg",
    name: "Jane"
  },{
    img: "https://i.pinimg.com/originals/f9/b2/d7/f9b2d7454312d6472f02f03314bd2ed2.jpg",
    name: "Jane"
  },{
    img: "https://i.pinimg.com/originals/f9/b2/d7/f9b2d7454312d6472f02f03314bd2ed2.jpg",
    name: "Jane"
  },{
    img: "https://i.pinimg.com/originals/f9/b2/d7/f9b2d7454312d6472f02f03314bd2ed2.jpg",
    name: "Jane"
  },{
    img: "https://i.pinimg.com/originals/f9/b2/d7/f9b2d7454312d6472f02f03314bd2ed2.jpg",
    name: "Jane"
  },{
    img: "https://i.pinimg.com/originals/f9/b2/d7/f9b2d7454312d6472f02f03314bd2ed2.jpg",
    name: "Jane"
  },{
    img: "https://i.pinimg.com/originals/f9/b2/d7/f9b2d7454312d6472f02f03314bd2ed2.jpg",
    name: "Jane"
  },{
    img: "https://i.pinimg.com/originals/f9/b2/d7/f9b2d7454312d6472f02f03314bd2ed2.jpg",
    name: "Jane"
  },{
    img: "https://i.pinimg.com/originals/f9/b2/d7/f9b2d7454312d6472f02f03314bd2ed2.jpg",
    name: "Jane"
  },{
    img: "https://i.pinimg.com/originals/f9/b2/d7/f9b2d7454312d6472f02f03314bd2ed2.jpg",
    name: "Jane"
  },{
    img: "https://i.pinimg.com/originals/f9/b2/d7/f9b2d7454312d6472f02f03314bd2ed2.jpg",
    name: "Jane"
  },]

const ProfilePage = () => {


  return (
    <div className='profilepage-container'>
        <NavBar />
        <SideBarLeft/>

        <div className="profile-right">
            <div className="profile-top">
                <div className="cover-img-container">
                <div className="cover-img">
                    <img src="https://marketplace.canva.com/EAE89qUYCic/1/0/1600w/canva-blue-ocean-tide-beach-motivational-quote-facebook-cover-UlayDxq20Mo.jpg" alt="" />
                    </div>
                    {/* <div className="white-gradient"></div> */}
                    </div>
                <div className="profile-img"><img src="https://cdn.mos.cms.futurecdn.net/p5quSf4dZXctG9WFepXFdR.jpg" alt="" /></div>
            </div>
                <div className="profile-img-bottom">
                    <p className='username'>Anne Wilson</p>
                    <div className="statistics">
                        <div className="followers">
                            <p>Followers</p>
                            <p>20</p>
                        </div>
                        <div className="following">
                            <p>Following</p>
                            <p>20</p>
                        </div>
                    </div>

                </div>
            <div className="profile-bottom">
                <div className="profile-bottom-left"><Feed /></div>
                <div className="profile-bottom-right">
                    <div className="userinfo-container">
                        <p className="intro">Intro <FaUserAlt /></p>
                        <div className="info">
                            <BsFillHouseFill />
                            <p>Lives in <b>Los Angeles</b></p>
                        </div>
                        <div className="info">
                            <MdLocationOn />
                            <p>Form <b>Los Angeles</b></p>
                        </div>
                        <div className="info">
                            <MdAccessTimeFilled />
                            <p>Joined on <b>May 2007</b></p>
                        </div>

                    </div>
                    <div className="userfriends-container">
                        <p className="friends">Friends <FaUserFriends /></p>
                        {
                            friendslist.map((friend, index) => (
                                <div className="user-friend" key={index}>
                                    <img src={friend.img} alt="" />
                                </div>
                            ))
                        }
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default ProfilePage