// https://github.com/parcel-bundler/parcel/issues/1128
// import mapboxgl from 'mapbox-gl';

export default class MyMap {
  constructor(initCenter = [-66.1562, -17.4211], style = 'mapbox://styles/mapbox/streets-v11') {
    mapboxgl.accessToken = process.env.MAPBOX_TOKEN || 'pk.eyJ1IjoibmFob215IiwiYSI6ImNrZzhhdmR6bjAwMXUyeHFjZTdqN3hwN3EifQ.vV6DlgPVXN_SUPokKWJ8tA';

    this.map = new mapboxgl.Map({
      container: 'map',
      style,
      center: initCenter, // [lng, lat]
      zoom: 11,
    });

  }

  mapTo(center, zoom = 13) {
    this.map.flyTo({
      center,
      zoom,
    });
  }
}
