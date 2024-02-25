import React from 'react'
import { NavLink } from "react-router-dom";
const Header = () => {
  return (
    <>
    
    <h1>{pageTitle}</h1>

    <div className="header-btns">

            <NavLink to="/">
              <button className="btn">
                  Books
              </button>
            </NavLink>

            <NavLink to="/add-book">
              <button className="btn">
                  Add Book +
              </button>
            </NavLink>

            <button className="btn transparent">
              Logout
            </button>

       
    </div>
    </>

  )
}

export default Header