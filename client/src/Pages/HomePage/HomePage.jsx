import './HomePage.scss'
import React from 'react'
import Feed from '../../Components/Feed/Feed'
import NavBar from '../../Components/NavBar/NavBar'
import SideBarLeft from '../../Components/SideBarLeft/SideBarLeft'
import SideBarRight from '../../Components/SideBarRight/SideBarRight'

const HomePage = () => {
  return (
    <>
      <NavBar />
      <div className='homepage-container'>
        <SideBarLeft />
        <Feed />
        <SideBarRight />
      </div>
    </>
  )
}

export default HomePage