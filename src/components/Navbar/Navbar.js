import React from 'react'
import "./Navbar.css"
import {MenuList} from "./MenuList"
import { NavLink } from 'react-router-dom'

function Navbar() {
    const menuList = MenuList.map(({url, title}, index) => {
        return (
            <li key={index}>
                <NavLink exact to={url}>
                    {title}
                </NavLink>
            </li>
        )
    })
    return (
        <nav>
            <div className="logo">
                <font>FIESTA</font>
            </div>
            <ul className="menu-list">{menuList}</ul>
        </nav>
    )
}

export default Navbar