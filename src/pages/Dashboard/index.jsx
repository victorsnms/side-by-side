import {
  GoogleMap,
  Marker,
  useLoadScript,
  InfoWindow,
} from "@react-google-maps/api";
//mapstyles
import mapStyles from "./mapStyles";
import { useState, useCallback, useRef } from "react";
import { useMarkers } from "../../providers/MarkersContext";
import { useAuth } from "../../providers/AuthContext";
import { useEffect } from "react";
import { DrawerForms } from "../../components/Modals/DrawerForms";
import { DashboardMenu } from "../../components/DashboardMenu";
import { Box, IconButton, Icon, Text } from "@chakra-ui/react";
import { EventDetails } from "../../components/Modals/EventDetails";
import { BiHome } from "react-icons/bi";

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
  const { markers, createMarker, loadMarkers } = useMarkers();
  const { accessToken } = useAuth();

  //Mock: markers
  // [
  //   {
  //     lat: -25.41410596566802,
  //     lng: -49.28868879508972,
  //     time: new Date(),
  //     type: "Event",
  //     title: "Ponto A",
  //   },
  //   {
  //     lat: -25.414351799555913,
  //     lng: -49.24346097325786,
  //     time: new Date(),
  //     type: "Wastecol",
  //     title: "Ponto B",
  //   },
  //   {
  //     lat: -25.431392761944345,
  //     lng: -49.268089429855344,
  //     time: new Date(),
  //     type: "Event",
  //     title: "Ponto C",
  //   },
  // ]

  //onClick
  const onMapClick = useCallback((event) => {
    setInputMarker((_) => [
      {
        lat: event.latLng.lat(),
        lng: event.latLng.lng(),
        created_at: new Date(),
      },
    ]);
  }, []);

  //Ref
  const mapRef = useRef();
  const onMapLoad = useCallback((map) => {
    mapRef.current = map;
  }, []);

  //Pan to
  const panTo = useCallback(({ lat, lng }) => {
    mapRef.current.panTo({ lat, lng });
    mapRef.current.setZoom(15);
  }, []);

  const getUserLocation = () => {
    navigator.geolocation.getCurrentPosition(
      (position) => {
        panTo({
          lat: position.coords.latitude,
          ng: position.coords.longitude,
        });
      },
      () => null
    );
  };

  useEffect(() => {
    loadMarkers(accessToken);
  }, []);

  if (loadError) return <div>Error loading maps"</div>;
  if (!isLoaded) return <div>"Loading maps"</div>;

  return (
    <Box position="relative">
      <DrawerForms isDisable={inputMarker.length === 0} inputMarker={inputMarker}/>
      <GoogleMap
        mapContainerStyle={mapContainerStyle}
        zoom={14}
        center={center}
        options={options}
        onClick={onMapClick}
        onLoad={onMapLoad}
        clickableIcons={false}
      >
        <DashboardMenu />
        <Locate panTo={panTo} />
        {markers.map((marker) => (
          <Marker
            key={marker.created_at}
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
            <Box>
              <Text color="green.400" fontSize="1rem" fontWeight="bold">
                {selected.title}
              </Text>
              <Text>
                {selected.type === "WasteCollection" ? "Working" : null}Time:{" "}
                {selected.start_time} - {selected.end_time}
              </Text>
              <Text>Contact:{selected.contact}</Text>
              {selected.description ? <h3>{selected.description}</h3> : <></>}
              {selected.materials_type ? (
                <Text>Collecting: {selected.materials_type.join(", ")}</Text>
              ) : (
                <></>
              )}
              {selected.type === "Event" ? (
                <EventDetails marker={selected} />
              ) : null}
            </Box>
          </InfoWindow>
        ) : null}

        {inputMarker.map((marker) => (
          <Marker
            key={marker.created_at}
            position={{ lat: marker.lat, lng: marker.lng }}
          />
        ))}
      </GoogleMap>
    </Box>
  );

  function Locate({ panTo }) {
    return (
      <IconButton
        aria-label="Show modals"
        colorScheme="white"
        color="green.300"
        borderRadius="100%"
        position="absolute"
        top="18%"
        right="10%"
        bg="white"
        zIndex="7"
        onClick={() => {
          navigator.geolocation.getCurrentPosition(
            (position) => {
              panTo({
                lat: position.coords.latitude,
                lng: position.coords.longitude,
              });
            },
            () => null
          );
        }}
      >
        <Icon as={BiHome} fontSize="2xl" />
      </IconButton>
    );
  }
};
