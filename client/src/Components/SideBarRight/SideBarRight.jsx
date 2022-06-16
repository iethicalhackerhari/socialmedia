import './SideBarRight.scss'

import React from 'react'


const onlineFriends = [{
  img: "https://i.pinimg.com/originals/f9/b2/d7/f9b2d7454312d6472f02f03314bd2ed2.jpg",
  name: "Jane"
}, {
  img: "https://i.pinimg.com/originals/f9/b2/d7/f9b2d7454312d6472f02f03314bd2ed2.jpg",
  name: "Jane"
}, {
  img: "https://i.pinimg.com/originals/f9/b2/d7/f9b2d7454312d6472f02f03314bd2ed2.jpg",
  name: "Jane"
}, {
  img: "https://i.pinimg.com/originals/f9/b2/d7/f9b2d7454312d6472f02f03314bd2ed2.jpg",
  name: "Jane"
}, {
  img: "https://i.pinimg.com/originals/f9/b2/d7/f9b2d7454312d6472f02f03314bd2ed2.jpg",
  name: "Jane"
}, {
  img: "https://i.pinimg.com/originals/f9/b2/d7/f9b2d7454312d6472f02f03314bd2ed2.jpg",
  name: "Jane"
}, {
  img: "https://i.pinimg.com/originals/f9/b2/d7/f9b2d7454312d6472f02f03314bd2ed2.jpg",
  name: "Jane"
}, {
  img: "https://i.pinimg.com/originals/f9/b2/d7/f9b2d7454312d6472f02f03314bd2ed2.jpg",
  name: "Jane"
}, {
  img: "https://i.pinimg.com/originals/f9/b2/d7/f9b2d7454312d6472f02f03314bd2ed2.jpg",
  name: "Jane"
}, {
  img: "https://i.pinimg.com/originals/f9/b2/d7/f9b2d7454312d6472f02f03314bd2ed2.jpg",
  name: "Jane"
},]


const SideBarRight = () => {
  return (
    <div className='sidebar-right-container'>
      <div className="birthday-container">
        <img src="https://cdn-icons-png.flaticon.com/512/4213/4213958.png" alt="" />
        <p><b>Kylie Jenner</b> and <b>2 other friends</b> have their birthday today</p>
      </div>
      <hr className="line" />
      <div className="ad-container">
        <div className="img">
          <img src="https://etimg.etb2bimg.com/photo/77049889.cms" alt="" />
        </div>
      </div>

      <hr className="line" />

      <div className="online-friends-container">
        {
          onlineFriends.map((friend, index) => (
            <div className="online-friend" key={index}>
              <p>{friend.name}</p>
              <div className="img-dot">
              <div className="img">
                <img src={friend.img} alt="" />
                </div>
                <div className="dot"></div>
              </div>
            </div>
          ))
        }
      </div>
    </div>
  )
}

export default SideBarRight