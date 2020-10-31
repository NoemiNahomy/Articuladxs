
export default class GeojsonMapService {
  static loadGeojson(map, folder, isMobile, coords, lang, popupText) {
    this.addGeojsonSource.bind(this, map, isMobile, lang,
      popupText, coords, folder);
  
  }

  static loadGeojsonTiles(map, tilecount, folder) {
    for (let i = 0; i < tilecount; i++) {
      fetch(`${URL_DATA}/data/${folder}/final_tile${i}.geojson`)
        .then((res) => res.json())
        .then(this.addGeojsonSource.bind(this, map));
    }
  }

  static addGeojsonSource(
    map,
    isMobile,
    lang,
    popupText,
    coords,
    sourcename,
    geojson,
  ) {
    const widthFemale = isMobile ? 5 : 4;
    const widthMale = isMobile ? 4 : 3;

    map.addLayer({
      id: `${sourcename}-line`,
      type: 'line',
      source: {
        type: 'geojson',
        data: geojson,
      },
      layout: {
        'line-join': 'round',
        'line-cap': 'round',
      },
      paint: {
        'line-blur': ['case', ['==', ['get', 'wikipedia_link'], ''], 4, 1],
        'line-color': [
          'case',
          ['==', ['get', 'gender'], FEMALE],
          '#ffca3a',
          '#00B99E',
        ],
        'line-width': [
          'case',
          ['==', ['get', 'gender'], FEMALE],
          widthFemale,
          widthMale,
        ],
      },
      filter: ['==', '$type', 'LineString'],
    });

    map.addLayer({
      id: `${sourcename}-fill`,
      type: 'fill',
      source: {
        type: 'geojson',
        data: geojson,
      },
      layout: {},
      paint: {
        'fill-color': ['case', ['==', ['get', 'gender'], FEMALE], '#ffca3a', '#00B99E'],
        'fill-opacity': ['case', ['==', ['get', 'wikipedia_link'], ''], 0.2, 0.6],
      },
      filter: ['==', '$type', 'Polygon'],
    });

    this.addAnimatedPoint(map, `${sourcename}-point`, `${sourcename}-point`, coords);
  }
}
