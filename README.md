# OpenStreetMap 
OpenStreetMap es un proyecto colaborativo para crear mapas editables y libres, para consumir.OpenStreetMap se apoya de la biblioteca Leaflet de JavaScript de código abierto el cual tiene mapas interactivos. Al encontrar esta biblioteca, react contiene una libreria llamada react-leaflet el cual este tiene componentes basados en leaflet para su manipulacion en react. 

# Clonar proyecto y instalacion
Debes de clonar el proyecto en la consola de git de la siguiente manera 
```
git clone https://github.com/OrtegaF/Proyecto-de-Geolocalizacion.git
```

Para la instalacion deberas de ejecutar la siguiente linea dentro de la carpeta del proyecto (en el cmd)
```
npm install
```

# Instalacion de react-leaflet, leaflet-routing-machine y leaflet-control-geocoder
Se deben de ejecutar los siguientes comandos en la carpeta de nuestro proyecto con la finalidad de instalar leaflet para utilizar los mapas, routing y geocoder para marcar las rutas:
```
npm install react react-dom leaflet
npm install react-leaflet
leaflet-routing-machine
npm install leaflet-control-geocoder
```

# Iniciar el proyecto
Para visualizar el proyecto en el navegador debemos de colorcar la siguiente linea de codigo en el cmd de la carpeta del proyecto, al ajecuarlo nos aparecera la direccion local copiarla y pegarla en el navegador
```
npm run dev
```

# Versiones (Configuración)
Para realizar este proyecto se utilizan las siguientes versiones: 
* "leaflet": "^1.9.4",
* "leaflet-control-geocoder": "^2.4.0",
* "leaflet-routing-machine": "^3.2.12",
* "react": "^18.2.0",
* "react-dom": "^18.2.0",
* "react-leaflet": "^4.2.1"

En el archivo index.html se debe de colocar las siguientes lineas para utilizar las hojas de estilo y funcionalidades de leaflet-routing-machine 
```
 <link rel="stylesheet" href="https://unpkg.com/leaflet@1.2.0/dist/leaflet.css" />
<link rel="stylesheet" href="./node_modules/leaflet-routing-machine/dist/leaflet-routing-machine.css" />
 <script src="https://unpkg.com/leaflet@1.2.0/dist/leaflet.js"></script>
 <script src="./node_modules/leaflet-routing-machine/dist/leaflet-routing-machine.js"></script>
```



# Desarrollo Creacion de nodos MapView.jsx (primera parte)
En esta primera parte se crean nodos por defecto que se nos solicito en la primera practica titulada "Implementación de servicios de Geolocalización", a ccontinuacion se presenta el siguiente codigo comentando para un mejor entendimiento de que es lo que se hizo
```
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
```

# Resultado de la parte 1
![result](https://github.com/OrtegaF/Proyecto-de-Geolocalizacion/assets/105130659/502791c1-0e0b-47da-99b2-b642f95ca733)

# Desarrollo Creacion de rutas mediante inputs (segunda parte)
En esta primera parte se crea un componente el cual nos ayude al trazado de rutas mediante inputs, a continuacion, se presenta el siguiente codigo comentado para un mayor entendimiento
```
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
export default MapView;import React from 'react' //Importacion de React
import { useEffect } from 'react'//importacion de useEffect
import { useMap } from 'react-leaflet' //Importacion de useMap
import L from "leaflet"; //Libreria de Leaflet para trabajar con mapas interactivos

//Extension de leaflet para las rutas y estilos de este (leaflet-routing-machine)
import "leaflet-routing-machine/dist/leaflet-routing-machine.css"; 
import "leaflet-routing-machine";

//Extension de leaflet para trabajar con el geodificador
import 'leaflet-control-geocoder/dist/Control.Geocoder.css';
import 'leaflet-control-geocoder/dist/Control.Geocoder.js';


export const MapRutas = () => {
  //Declaracion del useMap para trabajar con el mapa que se tiene actualmente
  const map = useMap();

  useEffect(() => {
    if (!map) return;

    //funcion que nos ayuda  a crear una instancia de un nuevo control de enrutamiento con las opciones proporcionadas a continuacion
    const routingControl = L.Routing.control({
      //Se puede colocar una latitud y longitud por defecto si es que se necesita tener un marcado de ruta por defecto, si es que no, no se coloca nada
      waypoints: [L.latLng(), L.latLng()],
      routeWhileDragging: true,
      //Con este se coloca los input para que se puedan colocar las direcciones y asi mismo las instrucciones para llegar a dicho punto de destino
      geocoder: L.Control.Geocoder.nominatim(),
      //se cambia el lenguaje a español
      language: 'es',
    }).addTo(map);

    //retornamos el mapa
    return () => map.removeControl(routingControl);
  }, [map]);


  return null
}

```

# Archivo App.jsx 
En este archivo solamente lo que hacemos es improtar lo que es el componente de MapView ya que recordemos que en este ya esta integrado las rutas y los nodos
```
import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css';
import MapView from './components/MapView'
import Map2View from './components/Map2View';
function App() {

  return (
    <MapView />
  );
}

export default App

```

# Resultado final 
Marcado de nodos e inputs para colocar una direccion
![WhatsApp Image 2023-10-13 at 1 36 16 PM](https://github.com/OrtegaF/Proyecto-de-Geolocalizacion/assets/105130659/e78c139c-95d7-4411-afe6-f9ec9c711b9e)

Marcado de rutas dependiendo de las direcciones que se colocaron en los inputs 
![WhatsApp Image 2023-10-13 at 1 39 28 PM](https://github.com/OrtegaF/Proyecto-de-Geolocalizacion/assets/105130659/5973840b-b2cb-459f-b645-144cf557a1c3)

Santa Maria Xonacatepec hacia Cerro de Amalucan
![WhatsApp Image 2023-10-13 at 1 40 39 PM](https://github.com/OrtegaF/Proyecto-de-Geolocalizacion/assets/105130659/d0beb8f8-200f-4a73-a201-e0f159cb5d69)




