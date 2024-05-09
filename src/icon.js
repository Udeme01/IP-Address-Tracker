import L from "leaflet";
import icon from "./assets/icon-location.svg";

export default L.icon({
  iconUrl: icon,
  iconSize: [32, 40],
  iconAnchor: [16, 16],
  popupAnchor: [0, -16],
});
