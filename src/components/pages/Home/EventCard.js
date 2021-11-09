import React from 'react'
import './SideBar.css'

function EventCard(props) {
    const hover = (props.eventNum === props.alt)
    return(
        <div onMouseOver={() => props.setEventNum(props.alt)}
            onMouseLeave={() => props.setEventNum(0)}
            className={(hover)?"cardActive":"event-card"}>
            <img alt={props.alt} 
                src={props.img} 
                className="event-card-img"
            />
            <div className="event-card-body">
                <h2 className="event-card-title">{props.party}</h2>
                <p className="event-card-description">
                    {props.more}
                </p>
                <h3 className="event-card-rating">{props.rating}</h3>
                <button className="event-card-btn">More</button>
            </div>
        </div>
    )
}

export default EventCard