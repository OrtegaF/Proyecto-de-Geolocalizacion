import React from "react";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import { MapRutas } from "./MapRutas";

const MapView = () =>{
    const Puebla = [19.03218, -98.21771];
    const UTP = [19.058392, -98.1545258];
    const Loreto = [19.06556, -98.17693];
    const Catedral = [19.04308, -98.19801];
    const Fuente = [19.09676, -98.23289];
return (
       <div className='map-container'>
    <MapContainer center={Puebla} zoom={13} scrollWheelZoom={false}>
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        <Marker position={UTP}>
          <Popup>
            Universidad Tecnológica de Puebla.
          </Popup>
        </Marker>
        <Marker position={Loreto}>
          <Popup>
            Plaza Loreto, Puebla.
          </Popup>
        </Marker>
        <Marker position={Catedral}>
          <Popup>
            Catedral de la Cd. de Puebla
          </Popup>
        </Marker>
        <Marker position={Fuente}>
          <Popup>
            Fuente de los Frailes.
          </Popup>
        </Marker>
        <MapRutas/>
    </MapContainer>
    </div>
)
}

export default MapView;