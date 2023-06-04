import React from "react";
import GoogleMapReact from 'google-map-react';
import "./style.css"
const AnyReactComponent = ({ text }) => <div>{text}</div>;

export default function SimpleMap(){
  const defaultProps = {
    center: {
      lat: 	40.757130,
      lng: -73.979050
    },
    zoom: 16
  };

  return (
    // Important! Always set the container height explicitly
    <div style={{ height: '100vh', width: '90vw'}}>
      <GoogleMapReact
        bootstrapURLKeys={{ key: "AIzaSyBwGCXLw__egTN90onQu18w3JVd22jtF5M" }}
        defaultCenter={defaultProps.center}
        defaultZoom={defaultProps.zoom}
      >
        <AnyReactComponent
          lat={40.757130}
          lng={-73.979050}
          text="My Marker"
        />
      </GoogleMapReact>
    </div>
  );
}