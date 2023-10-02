# OpenStreetMap 
OpenStreetMap es un proyecto colaborativo para crear mapas editables y libres, para consumir.OpenStreetMap se apoya de la biblioteca Leaflet de JavaScript de código abierto el cual tiene mapas interactivos. Al encontrar esta biblioteca, react contiene una libreria llamada react-leaflet el cual este tiene componentes basados en leaflet para su manipulacion en react. 

# Instalacion de react-leaflet
Se deben de ejecutar los siguientes comandos en la carpeta de nuestro proyecto:
```
npm install react react-dom leaflet
npm install react-leaflet
```

Al instalar lo anteriormente comentado, debemos de importar los componentes que vamos a utilizar que son los siguientes:
```
import { MapContainer, TileLayer, useMap } from 'react-leaflet'
```

Nota: Si es que no se hacen las anteriores instalaciones, se puede sustituir por esta linea de codigo:
```
npm install -D @types/leaflet
```

# Configuracion y desarrollo 
-Versiones
Para realizar este proyecto se utilizaron las siguientes versiones: 
![versiones](https://github.com/OrtegaF/Proyecto-de-Geolocalizacion/assets/105130659/2a708179-3c3c-4234-9e83-85194e69a0ad)

-Desarrollo 
Ya que solamente se necesitaba marcar nodos se utilizo el siguiente codigo, recordemos que este cambiara en las variables ya que se pide 4 nodos de referencia:
```
const position = [51.505, -0.09]

render(
  <MapContainer center={position} zoom={13} scrollWheelZoom={false}>
    <TileLayer
      attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
      url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
    />
    <Marker position={position}>
      <Popup>
        A pretty CSS3 popup. <br /> Easily customizable.
      </Popup>
    </Marker>
  </MapContainer>,
)
```

# Resultado
![WhatsApp Image 2023-09-30 at 11 18 02 PM](https://github.com/OrtegaF/Proyecto-de-Geolocalizacion/assets/105130659/f31e36ad-fae9-478b-a2b3-b1da1ffa3000)
