import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
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
    
    if (isPending) return <></>

    if (error) return 'An error has occurred: ' + error.message

    return (

        <MapContainer className={classes.mapContainer} center={[38.7946525,-98.8240124]} zoom={4} scrollWheelZoom={true}>
            <TileLayer
                attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            />
            {data.map((app: any) => (<Marker position={[app.latitude,app.longitude]}>
                <Popup>
                <a href={`https://www.congressionalappchallenge.us/23-${app.congressional_district}/`}>
                    <h3>{app.congressional_district}: {app.app_title}</h3>
                </a>
                <h5>Rep. {app.member}</h5>
                {app.challengers && <h5>{app.challengers.join(',')}</h5>}
                {app.description && <p>{app.description}</p>}
                <a href={`https://www.congressionalappchallenge.us/23-${app.congressional_district}/`}>Demo Video & Official Press Release</a>
                </Popup>
            </Marker>))
            }
        </MapContainer>
    );
}