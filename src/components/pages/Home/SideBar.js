import React from 'react'
import './SideBar.css'
import Card from './Card'

function SideBar(props) {
    const cardList = props.item.map(card => <Card
        alt={card.id}
        key={card.id}
        party={card.party}
        img={card.img}
        rating={card.rating}
        more={card.more}
        user={card.user}
        eventNum={props.eventNum}
        setEventNum={props.setEventNum}
    />)
    return (
        <div className="card-list">
            {cardList}
        </div>
    )
}

export default SideBar