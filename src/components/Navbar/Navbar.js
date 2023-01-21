import React from 'react'
import "./NavBar.css"
import {MenuList} from "./MenuList"
import { NavLink } from 'react-router-dom'
import logoImage from './fiesta.png'

function NavBar() {
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
            <img src={logoImage} className="logo"/>
            <ul className="menu-list">{menuList}</ul>
        </nav>
    )
}

export default NavBar