export const mapDarkStyle = 'mapbox://styles/mapbox/streets-v11';

export const initCenter = [-39.11133, 36.66842];

// export const framesPerSecond = 60;
// export const initialOpacity = 1;
// export const initialRadius = 5;
// export const maxRadius = 18;

export const collectiveList = [
  {
    id: 'mc',
    name: 'Mujeres Creando',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec finibus dolor velit,a eleifend neque elementum vel.',
    history: ' Lorem ipsum dolor sit amet, consectetur adipiscing elit. '
     + 'Donec finibus dolor velit, a eleifend neque elementum vel. Pellentesque',

    type: 'COLECTIVA',
    networks: [{
      fb: 'https://www.facebook.com/MUJERESCREANDO1',
      tw: 'https://www.facebook.com/MUJERESCREANDO1',
      in: 'https://www.facebook.com/MUJERESCREANDO1',
      wsite: 'http://mujerescreando.org/',
      wp: '+5917845623',
      address: 'Calle los tres tristes tigres',
    }],
    center: [-68.1470, -16.5013],
  },

  {
    id: 'mc',
    name: 'Mujeres Creando',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec finibus dolor velit,a eleifend neque elementum vel.',
    history: ' Lorem ipsum dolor sit amet, consectetur adipiscing elit.'
     + 'Donec finibus dolor velit, a eleifend neque elementum vel. Pellentesque',
    type: 'ONG',
    networks: [{
      fb: 'https://www.facebook.com/MUJERESCREANDO1',
      tw: 'https://www.facebook.com/MUJERESCREANDO1',
      in: 'https://www.facebook.com/MUJERESCREANDO1',
      wsite: 'http://mujerescreando.org/',
      wp: '+5917845623',
      address: 'Calle los tres tristes tigres',
    }],
    center: [-68.1547, -16.5224],
  },
];

export const lang = {
  es: {
    panelDescriptionText1:
      'Mapa generado a partir de las calles con nombre de mujeres, en diferentes ciudades de habla hispana (Latinoamérica y España).',
    panelDescriptionText2:
      'El objetivo es visibilizar la brecha que existe históricamente en la representación de figuras femeninas en las calles de las ciudades.',
    panelDescriptionTextShort:
      'Mapa de las calles con nombre de mujer en ciudades de Latinoamérica y España, para visibilizar la brecha que existe en la representación de figuras femeninas en las ciudades.',
    panelProjectBy: 'Un proyecto de',
    panelProjectBy2: 'Proyecto de',
    menuTitle: 'Las calles de las mujeres',
    chartTxt: {
      chartMen: 'Hombres',
      chartWomen: 'Mujeres',
      chartStreetsOf: 'Calles de',
      chartHave: 'tiene',
      chartNotHave: 'no tiene',
      chartText1: 'Mujeres con artículo en Wikipedia',
    },
    popupText: 'Calle sin artículo',
  },

};
