import {
  GoogleMap,
  Marker,
  useLoadScript,
  InfoWindow,
} from "@react-google-maps/api";
//mapstyles
import mapStyles from "./mapStyles";
import "./index.css";
import { useState, useCallback, useRef } from "react";

//consts to avoid re-renders
const libraries = ["places"];

const mapContainerStyle = {
  width: "100vw",
  height: "100vh",
};
const center = {
  lat: -25.42836,
  lng: -49.27325,
};
const options = {
  styles: mapStyles,
  disableDefaultUI: true,
  zoomControl: true,
};

export const Dashboard = () => {
  const { isLoaded, loadError } = useLoadScript({
    googleMapsApiKey: process.env.REACT_APP_GOOGLE_MAPS_API_KEY,
    libraries,
  });
  const [selected, setSelected] = useState(null);
  const [inputMarker, setInputMarker] = useState([]);
  const [mapMarker, setMapMarker] = useState([
    {
      lat: -25.41410596566802,
      lng: -49.28868879508972,
      time: new Date(),
      type: "Event",
      title: "Ponto A",
    },
    {
      lat: -25.414351799555913,
      lng: -49.24346097325786,
      time: new Date(),
      type: "Wastecol",
      title: "Ponto B",
    },
    {
      lat: -25.431392761944345,
      lng: -49.268089429855344,
      time: new Date(),
      type: "Event",
      title: "Ponto C",
    },
  ]);

  //onClick
  const onMapClick = useCallback((event) => {
    setInputMarker((_) => [
      {
        lat: event.latLng.lat(),
        lng: event.latLng.lng(),
        time: new Date(),
      },
    ]);
  }, []);

  //Ref
  const mapRef = useRef();
  const onMapLoad = useCallback((map) => {
    mapRef.current = map;
  }, []);

  if (loadError) return <div>Error loading maps"</div>;
  if (!isLoaded) return <div>"Loading maps"</div>;

  return (
    <div>
      <h1>Logo</h1>
      <GoogleMap
        mapContainerStyle={mapContainerStyle}
        zoom={14}
        center={center}
        options={options}
        onClick={onMapClick}
        onLoad={onMapLoad}
      >
        {mapMarker.map((marker) => (
          <Marker
            key={marker.time.toISOString()}
            position={{ lat: marker.lat, lng: marker.lng }}
            icon={{
              url: marker.type === "Event" ? "/event.png" : "/wastecol.png",
              scaledSize: new window.google.maps.Size(30, 30),
              origin: new window.google.maps.Point(0, 0),
              anchor: new window.google.maps.Point(15, 15),
            }}
            onClick={() => setSelected(marker)}
          />
        ))}

        {selected ? (
          <InfoWindow
            position={{ lat: selected.lat, lng: selected.lng }}
            onCloseClick={() => {
              setSelected(null);
            }}
          >
            <div>
              <h2>{selected.title}</h2>
            </div>
          </InfoWindow>
        ) : null}

        {inputMarker.map((marker) => (
          <Marker
            key={marker.time.toISOString()}
            position={{ lat: marker.lat, lng: marker.lng }}
          />
        ))}
      </GoogleMap>
    </div>
  );
};
