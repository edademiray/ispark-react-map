import react from "react";
import "../mapbox/mapbox.css";
import React, { useRef, useEffect, useState } from 'react';
import 'mapbox-gl/dist/mapbox-gl.css';

import mapboxgl from '!mapbox-gl'; // eslint-disable-line import/no-webpack-loader-syntax
mapboxgl.accessToken = 'pk.eyJ1IjoiZWRhZGVtaXJheSIsImEiOiJja3lsZ2Z0ZjYwcTc1MnZ1ZndpYTdnbDBzIn0.CMtEIw9MwNaDS09ZudHlYA';


function Mapbox() {

    const mapContainer = useRef(null);
    const map = useRef(null);
    const [zoom, setZoom] = useState(9);


    useEffect(() => {
        if (map.current) return; // initialize map only once
        map.current = new mapboxgl.Map({
            container: mapContainer.current,
            style: 'mapbox://styles/edademiray/ckyo9bpo82hm514o4b8d1ukjy',
            center: [28.969267, 41.065633],
            zoom: 12
        });
    });

    



    return (
        <div>
            <div ref={mapContainer} className="map-container" />
        </div>
    );
}

export default Mapbox;