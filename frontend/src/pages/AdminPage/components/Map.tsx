import { MapContainer, TileLayer ,Marker, Popup } from "react-leaflet"
import 'leaflet/dist/leaflet.css';
import L from 'leaflet';

import iconUrl from 'leaflet/dist/images/marker-icon.png';
import shadowUrl from 'leaflet/dist/images/marker-shadow.png';

let DefaultIcon = L.icon({
  iconUrl,
  shadowUrl,
});
L.Marker.prototype.options.icon = DefaultIcon;

type LocalProps = {
    position?: [number, number]
    adress?: string,
}


export function Map({position, adress}: LocalProps) { 


    return(
    <div className="flex flex-col h-100 rounded-3xl items-start justify-start w-full p-6 mb-12">
        <h1 className="text-2xl mb-4 font-roboto-100 font-bold w-full text-left">Mapa</h1>
        <div className="w-full h-full bg-primary-100 rounded-3xl overflow-hidden">
        <MapContainer center={position} zoom={13} scrollWheelZoom={true} className="w-full h-full z-0 rounded-3xl">
          <TileLayer
            attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          />
          <Marker position={position}>
            <Popup>
               CE, {adress}
            </Popup>
          </Marker>
        </MapContainer>

        </div>

        </div>
    )
}