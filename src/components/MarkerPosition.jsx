import { Popup, Marker, useMap } from "react-leaflet";
import icon from "../icon";
import PropTypes from "prop-types";

import { useEffect, useMemo } from "react";

const MarkerPosition = ({ address }) => {
  const map = useMap();
  const position = useMemo(
    () => [address.location.lat, address.location.lng],
    [address]
  );

  useEffect(() => {
    map.flyTo(position, 13, {
      animate: true,
    });
  }, [map, position]);

  return (
    <>
      <Marker icon={icon} position={position}>
        <Popup>
          A pretty CSS3 popup. <br /> Easily customizable.
        </Popup>
      </Marker>
    </>
  );
};

MarkerPosition.propTypes = {
  address: PropTypes.object.isRequired,
};

export default MarkerPosition;
