import React from "react";
import 'https://api.mapbox.com/mapbox-gl-js/v2.8.1/mapbox-gl.js';
mapboxgl.accessToken = 'pk.eyJ1IjoiZHJhbnNpbCIsImEiOiJjbDJ1c3o5d3cwMXNyM2Jxb2t1NzJ0ejIzIn0.VFMlkIALRh7U_opSXBER6w';

const map = new mapboxgl.Map({
    container: 'map',
    style: 'mapbox://styles/dransil/cl2ut927z000z14nxynseyfb2',
    center: [-66.1572027, -17.3922683],
    zoom: 12.5
});
const nav = new mapboxgl.NavigationControl()
map.addControl(nav)

function setupMap(center) {
    var map = new mapboxgl.Map({
        container: "map",
        style: "mapbox://styles/dransil/cl2ut927z000z14nxynseyfb2",
        center: center,
        zoom: 15
    })
}

const geojson = {
    type: 'FeatureCollection',
    features: [
        {
            type: 'Feature',
            geometry: {
                type: 'Point',
                coordinates: [-66.2035555, -17.3898705]
            },
            properties: {
                title: 'EPI COÑA COÑA',
                description: 'Teléfono: 800140185'
            }
        },
        {
            type: 'Feature',
            geometry: {
                type: 'Point',
                coordinates: [-66.1729699, -17.3616001]
            },
            properties: {
                title: 'EPI NORTE',
                description: 'Teléfono: 800140188'
            }
        },
        {
            type: 'Feature',
            geometry: {
                type: 'Point',
                coordinates: [-66.240059, -17.3890775]
            },
            properties: {
                title: 'EPI COLCAPIRHUA',
                description: 'Teléfono: 44379347'
            }
        },
        {
            type: 'Feature',
            geometry: {
                type: 'Point',
                coordinates: [-66.1385951, -17.4183215]
            },
            properties: {
                title: 'EPI ALALAY',
                description: 'Teléfono: 800140189'
            }
        },
        {
            type: 'Feature',
            geometry: {
                type: 'Point',
                coordinates: [-66.1747284, -17.4023409]
            },
            properties: {
                title: 'EPI CENTRAL',
                description: 'Teléfono: 800140190'
            }
        },
        {
            type: 'Feature',
            geometry: {
                type: 'Point',
                coordinates: [-66.182899, -17.4311088]
            },
            properties: {
                title: 'EPI 3 ZONA SUR',
                description: 'Teléfono: 800140187'
            }
        },
        {
            type: 'Feature',
            geometry: {
                type: 'Point',
                coordinates: [-66.1737486, -17.4397048]
            },
            properties: {
                title: 'FELCC EPI SUD',
                description: 'Teléfono: 800140188'
            }
        },
        {
            type: 'Feature',
            geometry: {
                type: 'Point',
                coordinates: [-66.1480596, -17.4001553]
            },
            properties: {
                title: 'FELCC',
                description: 'Teléfono: 77933274'
            }
        },
    ]

};
for (const feature of geojson.features) {
    // create a HTML element for each feature
    const el = document.createElement('div');
    el.className = 'marker';

    // make a marker for each feature and add to the map
    new mapboxgl.Marker(el).setLngLat(feature.geometry.coordinates)
        .setLngLat(feature.geometry.coordinates)
        .setPopup(
            new mapboxgl.Popup({
                offset: 25
            })
                .setHTML(
                    `<h3>${feature.properties.title}</h3><p>${feature.properties.description}</p>`
                )
        )
        .addTo(map);

}
function mapitas() {
    return (
        <script src='https://api.mapbox.com/mapbox-gl-js/v2.8.1/mapbox-gl.js'></script>,
        <link href='https://api.mapbox.com/mapbox-gl-js/v2.8.1/mapbox-gl.css' rel='stylesheet' />,
        <body>
            <div id='map' style='width: 1880px; height: 900px;'></div>
        </body>
    );
}
export default mapitas;
