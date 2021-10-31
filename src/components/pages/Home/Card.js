import React from 'react'
import './SideBar.css'

function Card(props) {
    const hover = (props.eventNum === props.alt)
    return(
        <div onMouseOver={() => props.setEventNum(props.alt)}
            onMouseLeave={() => props.setEventNum(0)}
            className={(hover)?"cardActive":"card"}>
            <img alt={props.alt} 
                src={props.img} 
                className="card-img"
            />
            <div className="card-body">
                <h2 className="card-title">{props.party}</h2>
                <p className="card-description">
                    {props.more}
                </p>
                <h3 className="card-rating">{props.rating}</h3>
                <button className="card-btn">More</button>
            </div>
        </div>
    )
}

export default Card