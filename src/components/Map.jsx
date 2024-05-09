import { MapContainer, TileLayer } from "react-leaflet";
import MarkerPosition from "./MarkerPosition";
import PropTypes from "prop-types";

const Map = ({ address }) => {
  return (
    <>
      <MapContainer
        center={[51.505, -0.09]}
        zoom={13}
        scrollWheelZoom={true}
        style={{ height: "66.2vh", width: "100vw" }}
      >
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        {address && <MarkerPosition address={address} />}
      </MapContainer>
    </>
  );
};

Map.propTypes = {
  address: PropTypes.object,
};

export default Map;
