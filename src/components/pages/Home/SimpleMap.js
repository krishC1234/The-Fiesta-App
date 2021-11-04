import React from 'react';
import GoogleMapReact from 'google-map-react';

import './SimpleMap.css'

import Pin from './Pin'

function SimpleMap (props){

  const InitialPos = {
    center: {
      lat: 34.413,
      lng: -119.859
    },
    zoom: 16
  };

  const pindata = props.item.map(pin => <Pin 
    key={pin.id}
    alt={pin.id}
    lat={pin.late} 
    lng={pin.long}
    eventNum={props.eventNum}
    setEventNum={props.setEventNum}
    party={pin.party}
    img={pin.img}
    rating={pin.rating}
    more={pin.more}
    user={pin.user}
  />)
  
  return (
    <div className="map-general">
      <GoogleMapReact
        bootstrapURLKeys={{ key:"AIzaSyDOQ7paZFBDSnK0stDffkN8VdYeFwnzq3U"}}
        defaultCenter={InitialPos.center}
        defaultZoom={InitialPos.zoom}
      >
        {pindata}
      </GoogleMapReact>
    </div>
  )
}

export default SimpleMap;