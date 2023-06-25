import React from "react";

import {
  MapContainer,
  TileLayer,
  useMap,
  Marker,
  Popup,
  LayersControl,
  LayerGroup,
} from "react-leaflet";

export default function Map() {
  const [location, setLocation] = React.useState("");

  //Geolocation
  React.useEffect(() => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition((position) => {
        console.log(position.coords);
        setLocation(position.coords);
      });
    }
  }, []);

  return (
    <div className="">
      <div id="map" className="h-screen">
        {location ? (
          <MapContainer
            center={[location.latitude, location.longitude]}
            zoom={15}
            scrollWheelZoom={true}
            className=" h-screen"
          >
            <TileLayer
              attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
              url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            />

            <LayersControl position="topright">
              <LayersControl.Overlay checked name="weather map">
                <LayerGroup>
                  <TileLayer
                    attribution="Openweathermap"
                    url={`https://tile.openweathermap.org/map/temp_new/{z}/{x}/{y}.png?appid=${process.env.REACT_APP_OPENWEATHER_API_KEY}`}
                  />
                </LayerGroup>
              </LayersControl.Overlay>
              <LayersControl.Overlay name="cloud map">
                <LayerGroup>
                  <TileLayer
                    attribution="Openweathermap"
                    url={`https://tile.openweathermap.org/map/clouds_new/{z}/{x}/{y}.png?appid=${process.env.REACT_APP_OPENWEATHER_API_KEY}`}
                  />
                </LayerGroup>
              </LayersControl.Overlay>
              <LayersControl.Overlay name="precipitation map">
                <LayerGroup>
                  <TileLayer
                    attribution="Openweathermap"
                    url={`https://tile.openweathermap.org/map/precipitation_new/{z}/{x}/{y}.png?appid=${process.env.REACT_APP_OPENWEATHER_API_KEY}`}
                  />
                </LayerGroup>
              </LayersControl.Overlay>
              <LayersControl.Overlay name="wind map">
                <LayerGroup>
                  <TileLayer
                    attribution="Openweathermap"
                    url={`https://tile.openweathermap.org/map/wind_new/{z}/{x}/{y}.png?appid=${process.env.REACT_APP_OPENWEATHER_API_KEY}`}
                  />
                </LayerGroup>
              </LayersControl.Overlay>
            </LayersControl>

            <Marker position={[location.latitude, location.longitude]}>
              <Popup>You are here !</Popup>
            </Marker>
          </MapContainer>
        ) : null}
      </div>
    </div>
  );
}
