/* eslint-disable no-loop-func */

import MyMap from './MyMap';
import GeojsonService from './GeojsonService';
import * as constants from './Constants';

export default class MyApp {
  constructor() {
    this.myMap = new MyMap();

    //this.currentLang = this.addText();

    this.selectedCity = window.location.hash
      ? window.location.hash.replace('#', '')
      : '';

    this.menuListELem = document.getElementById('menu-list');
    this.panelListELem = document.getElementById('colectivas-list');
  }

  startApp() {
    this.initDataList();
  }

  initDataList() {
    for (let j = 0; j < constants.collectiveList.length; j++) {
      const collective = constants.collectiveList[j];
      const elemC = document.createElement('DIV');
      const elemCardBody = document.createElement('div');
      const elemRow = document.createElement('div');
      const elemColBody = document.createElement('div');
      const elemCol = document.createElement('div');
      const elemTitle = document.createElement('p');
      const elemCategory = document.createElement('p');
      const elemDescription = document.createElement('p');

      elemC.setAttribute('id', collective.id);
      elemC.classList.add('card');

      elemCardBody.classList.add('card-body');
      elemRow.classList.add('row');

      elemCol.classList.add('col-sm');
      elemColBody.classList.add('col-sm');
      elemTitle.classList.add('card-title');
      elemCategory.classList.add('text-right');
      elemDescription.classList.add('card-text');

      elemTitle.appendChild(
        document.createTextNode(collective.name),
      );
      elemCategory.appendChild(
        document.createTextNode(collective.type),
      );
      elemDescription.appendChild(
        document.createTextNode(collective.description),
      );

      elemCol.appendChild(elemTitle);
      elemRow.appendChild(elemCol);
      elemColBody.appendChild(elemCategory);
      elemRow.appendChild(elemColBody);
      elemCardBody.appendChild(elemRow);
      elemCardBody.appendChild(elemDescription);
      elemC.appendChild(elemCardBody);

      this.panelListELem.appendChild(elemC);
      // this.menuListELem.appendChild(elemMenuC);
      const el = document.createElement('div');
      el.className = 'markerc';
      if (collective.type === 'ONG') {
        el.className = 'markero';
      }
      const marker = new mapboxgl.Marker(el)
        .setLngLat(collective.center)
        .addTo(this.myMap.map);
      elemC.onclick = () => {
          const prevElemMenu = document.getElementsByClassName('menu-selected');
          if (prevElemMenu.length !== 0) {
            prevElemMenu[0].classList.remove('menu-selected');
          }
          elemC.classList.add('menu-selected');

          this.myMap.mapTo(collective.center);
          $('#myModal').modal();
        };

      // Create an HTML node for every city and load its data
      // for (let i = 0; i < collective.networks.length; i++) {
      //   const network = collective.networks[i];
      //   // this.myMap.map.on(
      //   //   'load',
      //   //   GeojsonService.loadGeojson(
      //   //     this.myMap.map,
      //   //   ),
      //   // );
      //
      //
      // }
    }
  }
}
