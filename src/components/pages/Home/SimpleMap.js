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
    alt={pin.id}
    lat={pin.late} 
    lng={pin.long}
    eventNum={props.eventNum}
    setEventNum={props.setEventNum}
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