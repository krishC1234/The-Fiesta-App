import React, {useState} from 'react'
import './SideBar.css'

function SideBar(props) {
    const cardList = props.item.map(card => {
        return (
            <li key={card.index}>
                {props.eventNum}
            </li>
        )
    })
    return (
        <div>
            <ul className="card-list">{cardList}</ul>
        </div>
    )
}

export default SideBar