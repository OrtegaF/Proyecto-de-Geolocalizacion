import React from "react"; //importamos React
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet"; //Se importa la libreria react-leaflet con los componentes a utilizar
import "leaflet/dist/leaflet.css"; //Se importan los estilos de react-leaflet
import { MapRutas } from "./MapRutas"; //Se importa el archivo MapRutas.jsx el cual tiene el marcado de rutas

const MapView = () =>{
    const Puebla = [19.03218, -98.21771]; //Se coloca la latitud y la longitud de Puebla
    const UTP = [19.058392, -98.1545258]; //Se coloca la latitud y la longitud de la Universidad Tecnologica de Puebla
    const Loreto = [19.06556, -98.17693]; //Se coloca la latitud y la longitud de los Fuertes de Lotero
    const Catedral = [19.04308, -98.19801]; //Se coloca la latitud y la longitud de la Catedral de Puebla
    const Fuente = [19.09676, -98.23289]; //Se coloca la latitud y la longitud de la Fuente de los Frailes
return (
       <div className='map-container'>
        {/* Creacion del MapContainer donde se coloca la latitud y la longitud del estado de puebla y cuanto zoom
        vamos a querer */}
    <MapContainer center={Puebla} zoom={13} scrollWheelZoom={false}> 
        {/* En el TitleLayer colocamos los derechos de autor */}
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        {/* Creacion de marcadores con el componente marker colocando en el position las variables
        anteriores ya comentadas, asi mismo colocando una leyenda con la etiqueta Popup. Esto se repite
        para las otras ubicaciones que definimos anteriormente*/}
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
         {/* Llamado al archivo MapRutas */}
        <MapRutas/>
    </MapContainer>
    </div>
)
}
export default MapView;