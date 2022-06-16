import './SideBarLeft.scss'
import React from 'react'
import { MdRssFeed, MdGroups } from 'react-icons/md';
import { BsFillChatSquareTextFill, BsCalendarEventFill, BsFillCollectionPlayFill } from 'react-icons/bs';


const sidebarItems = [{
  title: "Feed",
  icon: <MdRssFeed />
},
{
  title: "Chats",
  icon: <BsFillChatSquareTextFill />
},
{
  title: "Videos",
  icon: <BsFillCollectionPlayFill />
},
{
  title: "Groups",
  icon: <MdGroups />
},
{
  title: "Events",
  icon: <BsCalendarEventFill />
},
]

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


const SideBarLeft = () => {
  return (
    <div className='sidebar-left-container'>
      <div className="sidebaritems-container">
        {
          sidebarItems.map((item, index) => {
            return (
              <div className="sidebaritem">
                {item.icon}
                <p>{item.title}</p>
              </div>

            )
          }
          )
        }
      </div>
      <hr className="line" />
      <div className="friendslist-container">
        {
          friendslist.map((friend, index) => {
            return (
              <div className='friend-item' key={`sidelbarleft${index}`}>
                <div className="img">
              <img src={friend.img} alt="" />
              </div>
              <p>{friend.name}</p>
              </div>
            )
          })
        }
      </div>
    </div>
  )
}

export default SideBarLeft