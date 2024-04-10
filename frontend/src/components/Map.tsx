import React from 'react';
import USStateMap from 'react-us-state-map';
import { MapContainer, TileLayer, useMap, Marker, Popup } from 'react-leaflet';
import classes from './map.module.css';

export default function Map () {
    
    const handleStateClick = (stateAbbreviation: string) => {
        console.log(stateAbbreviation);
    }

    return (
        // <USStateMap onClick={handleStateClick} />

        <MapContainer center={[52.5704983,-92.8990079]} zoom={3} scrollWheelZoom={true} className={classes.mapContainer}>
            <TileLayer
                attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            />
            <Marker position={[38.8937255,-77.0969766]}>
                <Popup>
                A pretty CSS3 popup. <br /> Easily customizable.
                </Popup>
            </Marker>
        </MapContainer>
    );
}