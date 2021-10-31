import React from 'react'
import './SimpleMap.css'
import PinImage from './map-pin.svg'

function Pin(props) {
    const hover = (props.eventNum === props.alt)
    return (
        <div onMouseOver={() => props.setEventNum(props.alt)}
            onMouseLeave={() => props.setEventNum(0)}>
            <img alt={props.alt} 
            lat={props.late} 
            lng={props.long} 
            width={(hover)?50:30}
            src={PinImage}
            />
            <h1>{props.i}</h1>
        </div>
    )
}

export default Pin