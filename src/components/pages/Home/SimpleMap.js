import React, { Component } from 'react';
import GoogleMapReact from 'google-map-react';
import './SimpleMap.css'

class SimpleMap extends Component {
  static defaultProps = {
    center: {
      lat: 34.413,
      lng: -119.859
    },
    zoom: 16
  };

  render() {
    return (
      // Important! Always set the container height explicitly
      <div className="map-general">
        <GoogleMapReact
          bootstrapURLKeys={{ key:"AIzaSyDOQ7paZFBDSnK0stDffkN8VdYeFwnzq3U"}}
          defaultCenter={this.props.center}
          defaultZoom={this.props.zoom}
        >
          <img
            lat={34.413}
            lng={-119.859}
            width={50}
            src="https://cdn2.iconfinder.com/data/icons/everything-but-the-kitchen-sink-filled/100/common-45-512.png"
            alt="map pin"
          />
        </GoogleMapReact>
      </div>
    );
  }
}

export default SimpleMap;