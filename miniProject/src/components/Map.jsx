import { useSearchParams } from 'react-router-dom';
import { MapContainer, TileLayer, Marker, Popup, useMap } from "react-leaflet";
import { useEffect } from 'react';  // ✅ Add this import

function Map() {
  const [searchParams] = useSearchParams();
  
  const lat = searchParams.get('lat');  // "35.8361"
  const lng = searchParams.get('lng');  // "10.637"
  const address = searchParams.get('address')
  const selectedPosition = (lat && lng) ? [parseFloat(lat), parseFloat(lng)] : null;

  return (
    <MapContainer
      center={[36.8065, 10.1815]}  // FIXED: ALWAYS valid
      zoom={13}
      scrollWheelZoom={false}
      style={{ height: "400px", width: "100%" }}
    >
      <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
      
      <ChangeView position={selectedPosition} />
      
      {selectedPosition && (
        <Marker position={selectedPosition}>
          <Popup> {address}!</Popup>
        </Marker>
      )}
    </MapContainer>
  );
}

function ChangeView({ position }) {
  const map = useMap(); 
  
  useEffect(() => {
    if (position) {
      map.setView(position, 15, { animate: true });
    }
  }, [position]);
  
  return null;
}

export default Map;
