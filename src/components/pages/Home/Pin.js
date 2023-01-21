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
                width={30}
                className={(hover)?"imagActive":"imag"}
                src={PinImage}
            />
            <div className={(hover)?"popupActive":"popup"}>
                <div className="pop-body">
                    <p className="pop-title">{props.party}</p>
                    <p className="pop-description">
                        {props.more}
                    </p>
                    <h2 className="pop-rating">{props.rating}</h2>
                </div>
            </div>
        </div>
    )
}

export default Pin