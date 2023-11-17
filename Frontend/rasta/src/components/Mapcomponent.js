import React, { useRef, useEffect, useState } from 'react';
import axios from 'axios';
import mapboxgl from 'mapbox-gl';
import MapboxDirections from '@mapbox/mapbox-gl-directions/dist/mapbox-gl-directions';

mapboxgl.accessToken = 'pk.eyJ1IjoicmlzaGlrYS0xOTAxMDEiLCJhIjoiY2xvbXJieHJ6MTVncTJpczJhZnh4N3Z6dSJ9.btunGukUKM2vCeMJtrOwuw';

const Mapcomponent = () => {
    console.log("mapbox")
    const mapContainer = useRef(null);
    const map = useRef(null);
    const [lng, setLng] = useState(78.381914);
    const [lat, setLat] = useState(17.450764);
    const [zoom, setZoom] = useState(12);
    const [showSidebar, setShowSidebar] = useState(false);
    const [imagePath, setImagePath] = useState('');

    const handleSidebarToggle = () => {
        setShowSidebar(!showSidebar);
    };

    const routeGeoJSON = {
        type: 'FeatureCollection',
        features: [
            {
                type: 'Feature',
                properties: {
                    id: 'route-1',
                    title: 'Route HitechCity',
                    description: 'This is the route that you have selected.',
                },
                geometry: {
                    type: 'LineString',
                    coordinates: [
                        [78.382589, 17.449566],
                        [78.382197, 17.450083],
                        [78.381916, 17.450498],
                        [78.381570, 17.450938],
                        [78.380804, 17.451769],
                        [78.379919, 17.452729]
                    ],
                },
            },
        ],
    };

    useEffect(() => {
        if (map.current) return;

        console.log("Entered Use effect")

        map.current = new mapboxgl.Map({
            container: mapContainer.current,
            style: 'mapbox://styles/rishika-190101/clonw3gbd00db01nzepkb9gnx',
            center: [lng, lat],
            zoom: zoom,
        });

        const directions = new MapboxDirections({
            accessToken: mapboxgl.accessToken,
            unit: 'metric',
        });

        map.current.addControl(directions, 'top-left');
    }, [lng, lat, zoom]);

    return (
        <div>
            <div ref={mapContainer} className="map-container" />
            {showSidebar && imagePath && <Sidebar showSidebar={showSidebar} imagePath={imagePath} handleSidebarToggle={handleSidebarToggle} />}
        </div>
    );
}

export default Mapcomponent;
