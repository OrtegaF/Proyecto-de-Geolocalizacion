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

# Configuracion y desarrollo 
-Versiones
Para realizar este proyecto se utilizan las siguientes versiones: 
* "leaflet": "^1.9.4",
* "leaflet-control-geocoder": "^2.4.0",
* "leaflet-routing-machine": "^3.2.12",
* "react": "^18.2.0",
* "react-dom": "^18.2.0",
* "react-leaflet": "^4.2.1"


# Desarrollo Creacion de nodos (primera parte)
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
![result](https://github.com/OrtegaF/Proyecto-de-Geolocalizacion/assets/105130659/502791c1-0e0b-47da-99b2-b642f95ca733)
