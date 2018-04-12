import React from 'react'
import '../styles/Home.css'
export const Nav = () => (
    <div className='nav_container'>
        <div className='nav_brand'>
            <h1>
                Denver City Tours
            </h1>
        </div>
        <div className='nav_links'>
            <a href="http://">Home</a>
            <a href="http://">About</a>
            <a href="http://">Blog</a>
            <a href="http://">History</a>
        </div>
    </div>
)

export const Banner = () => (
    <div className='banner_img'>
        <img src="" alt="Banner_Image"/>
    </div>
)

export const Content = () => (
    <div className='content_container'>
        <div className='content'>
            <img src="" alt="Tour_Info"/>
            <div className='context'>
                <p>
                "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
                </p>
            </div>
        </div>
        <div className='content'>
            <img src="" alt="Tour_Info"/>
            <div className='context'>
                <p>
                "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
                </p>
            </div>
        </div>
    </div>
)



