import React from 'react'
import { Link } from 'react-router-dom';
import "./Header.css";

const Header = () => {
  return (
    <header className="showcase">
        <div className='showcase-top'>
            <img src="https://upload.wikimedia.org/wikipedia/commons/7/7a/Logonetflix.png" alt="logo" />
            <Link to="/" className='btn btn-rounded'>
                  Sign In
            </Link>
        </div>

        <div className="showcase-content">
            <h1>Unlimited movies,Tv shows and more</h1>
            <p>Watch anywhere and Cancel AnyTime</p>
            <Link to="/netflix-show" className='btn btn-xl'>
                Watch Free For 30 Days
                <i className='fas fa-chevron-right btn-icon'></i>
            </Link>
        </div>
    </header>
  )
}

export default Header