import './NavBar.scss';
import React from 'react';
import { BiSearchAlt2, BiMessageDetail} from 'react-icons/bi';
import { FaUserFriends } from 'react-icons/fa';
import { AiFillHome } from 'react-icons/ai';
import {NavLink} from 'react-router-dom';





const NavBar = () => {
    return (
        <div className='navbar-container text-white'>
            <div className="navbar-left">
                <h4 className="logo">Social Media</h4>
            </div>

            <div className="navbar-center">
                <div className="search-container">
                    <BiSearchAlt2 />
                    <input type="text" />
                </div>
            </div>

            <div className="navbar-right">
                <div className="icon-container">
                    <NavLink to='/'>
                    <AiFillHome />
                    </NavLink>
                </div>


                <div className="icon-container">
                    <FaUserFriends />
                    <span className="badge badge-danger">1</span>
                </div>

                <div className="icon-container">
                    <BiMessageDetail />
                    <span className="badge badge-danger">1</span>
                </div>
                <div className="icon-container">
                    <NavLink to='/profile'>
                    <div className="img">
                    <img src="https://cdn.mos.cms.futurecdn.net/p5quSf4dZXctG9WFepXFdR.jpg" alt="" />
                    </div>
                    </NavLink>
                </div>
            </div>
        </div>
    )
}

export default NavBar
