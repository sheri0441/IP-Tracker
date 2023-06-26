import L from "leaflet";
import markerpic from "../images/icon-location.svg";
import { useEffect } from "react";
import { useMap, Marker, Popup } from "react-leaflet";

const markerIcon = new L.Icon({
  iconUrl: markerpic,
});

function MarkerPoint({ address }) {
  const position = [address.latitude, address.longitude];
  const map = useMap();

  useEffect(() => {
    map.flyTo(position, 13, {
      animate: true,
    });
  }, [map, position]);

  return (
    <>
      <Marker position={position} icon={markerIcon}>
        <Popup>IP Address Location</Popup>
      </Marker>
    </>
  );
}

export default MarkerPoint;
