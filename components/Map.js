import { getCenter } from "geolib";
import { React, useState } from "react";
import ReactMapGL,{Marker,Popup} from "react-map-gl";

export default function Map({ searchResults }) {
    const [selectedLocation,setSelectedLocation]=useState({})
  const coordinates = searchResults.map((result) => ({
    longitude: result.long,
    latitude: result.lat,
  }));
  const center = getCenter(coordinates);
  const [viewport, setViewport] = useState({
    width: "100%",
    height: "100%",
    latitude: center.latitude,
    longitude: center.longitude,
    zoom: 12,
  });

  return (
    <ReactMapGL
      mapStyle="mapbox://styles/mehdilhy/cksc7hyqi2rg117rzp7bnemzr"
      mapboxApiAccessToken={process.env.mapbox_key}
      {...viewport}
      onViewportChange={(nextViewPort) => setViewport(nextViewPort)}
    >
        {searchResults.map((item)=>(
            <div key={item.long}>
                <Marker
                longitude={item.long}
                latitude={item.lat}
                offsetLeft={-20}
                offsetTop={-10}
                >
                   <p onClick ={()=>setSelectedLocation(item)}className="cursor-pointer animate-pulse">
                   📌</p> 
                </Marker>
                {selectedLocation.long===item.long ? (
                    <Popup
                    onClose={()=>setSelectedLocation({})}
                    closeOnClick={true}
                    latitude={item.lat}
                    longitude={item.long}
                    >
                        {item.title}
                    </Popup>
                ):false}
            </div>

        ))}
    </ReactMapGL>
  );
}
