import React from 'react';
import USStateMap from 'react-us-state-map';
import { MapContainer, TileLayer, useMap, Marker, Popup } from 'react-leaflet';
import { useQuery } from '@tanstack/react-query';
import classes from './map.module.css';

export default function Map () {

    const { isPending, error, data } = useQuery({
        queryKey: ['repoData'],
        queryFn: () =>
          fetch('https://houseofcode2024-backend.onrender.com/api/library').then((res) =>
            res.json(),
          ),
      })
    
    if (isPending) return 'Loading...'

    if (error) return 'An error has occurred: ' + error.message

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
            {data.map((app: any) => (<Marker position={[app.latitude,app.longitude]}>
                <Popup>
                <h4>{app.congressional_district}: {app.app_title}</h4> <br /> {app.challengers && <h5>{app.challengers.join(',')}</h5>} <br /> {app.description}.
                </Popup>
            </Marker>))
            }
        </MapContainer>
    );
}