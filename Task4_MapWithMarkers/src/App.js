import "./App.css";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import marker from "./marker.png";
import L from "leaflet";

function App() {
  const mapCenter = [31.5497, 74.3436]; // Lahore
  const markers = [
    {
      location: [31.5497, 74.3436],
      title: "Marker 1",
    },
    {
      location: [31.5597, 74.2936],
      title: "Marker 2",
    },
    {
      location: [31.5697, 74.3836],
      title: "Marker 3",
    },
  ];

  const customIcon = L.icon({
    iconUrl: marker,
    iconSize: [40, 40],
    iconAnchor: [16, 32],
  });

  return (
    <>
      <nav className="bg-gradient-to-r from-blue-200 via-purple-300 to-green-200 p-4">
        <div className="container mx-auto flex items-center h-full">
          <h1
            className="text-2xl font-bold text-blue-600 text-center flex-grow"
            style={{ fontFamily: "Courier New, monospace" }}
          >
            MapMaster
          </h1>
        </div>
      </nav>

      <MapContainer zoom={13} center={mapCenter}>
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright" target="_blank">OpenStreetMap contributors</a>'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />

        {markers.map((marker, index) => (
          <Marker key={index} position={marker.location} icon={customIcon}>
            <Popup>{marker.title}</Popup>
          </Marker>
        ))}
      </MapContainer>
    </>
  );
}

export default App;
