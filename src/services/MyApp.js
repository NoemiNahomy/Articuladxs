/* eslint-disable no-loop-func */

import MyMap from './MyMap';
import GeojsonService from './GeojsonService';
import * as constants from './Constants';

export default class MyApp {
  constructor() {
    this.myMap = new MyMap();



    this.selectedCity = window.location.hash
      ? window.location.hash.replace('#', '')
      : '';

    this.menuListELem = document.getElementById('menu-list');
    this.panelListELem = document.getElementById('colectivas-list');
    this.modaldetail =  document.getElementById('myModal');
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
      if (collective.type === 'Asociación de mujeres') {
        el.className = 'markero';
      }
      // if (collective.type === 'ONG') {
      //   el.className = 'markero';
      // }
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

          if  (elemC.id === 'wp'){
              const colec = constants.collectiveList[0];

              const name =  document.getElementById('name');
              
              name.innerText = colec.name;
              description = document.getElementById('description');
              description.innerText = colec.description;
              historyC = document.getElementById('historyC');
              historyC.innerText = colec.history;
              type = document.getElementById('type');
              type.innerText = colec.type;
              fb = document.getElementById('fb');
              fb.href = colec.fb;
              tw = document.getElementById('tw');
              tw.href = colec.tw;
              ins = document.getElementById('in');
              ins.href = colec.in;
              wsite = document.getElementById('wsite');
              wsite.href = colec.wsite;
              phone = document.getElementById('phone');
              phone.innerHTML = colec.phone;
              address = document.getElementById('address')
              address.innerHTML = colec.address;

          };
        if  (elemC.id === 'wy'){
            const colec = constants.collectiveList[1];
            const name =  document.getElementById('name');
            name.innerText = colec.name;
            description = document.getElementById('description');
            description.innerText = colec.description;
            historyC = document.getElementById('historyC');
            historyC.innerText = colec.history;
            type = document.getElementById('type');
            type.innerText = colec.type;
            fb = document.getElementById('fb');
            fb.href = colec.fb;
            tw = document.getElementById('tw');
            tw.href = colec.tw;
            ins = document.getElementById('in');
            ins.href = colec.in;
            wsite = document.getElementById('wsite');
            wsite.href = colec.wsite;
            phone = document.getElementById('phone');
            phone.innerHTML = colec.phone;
            address = document.getElementById('address')
            address.innerHTML = colec.address;

        };
        if  (elemC.id === 'wn'){
            const colec = constants.collectiveList[2];
            const name =  document.getElementById('name');

            name.innerText = colec.name;
            description = document.getElementById('description');
            description.innerText = colec.description;
            historyC = document.getElementById('historyC');
            historyC.innerText = colec.history;
            type = document.getElementById('type');
            type.innerText = colec.type;
            fb = document.getElementById('fb');
            fb.href = colec.fb;
            tw = document.getElementById('tw');
            tw.href = colec.tw;
            ins = document.getElementById('in');
            ins.href = colec.in;
            wsite = document.getElementById('wsite');
            wsite.href = colec.wsite;
            phone = document.getElementById('phone');
            phone.innerHTML = colec.phone;
            address = document.getElementById('address')
            address.innerHTML = colec.address;

        };
        if  (elemC.id === 'iva'){
            const colec = constants.collectiveList[3];
            const name =  document.getElementById('name');
            name.innerText = colec.name;
            description = document.getElementById('description');
            description.innerText = colec.description;
            historyC = document.getElementById('historyC');
            historyC.innerText = colec.history;
            type = document.getElementById('type');
            type.innerText = colec.type;
            fb = document.getElementById('fb');
            fb.href = colec.fb;
            tw = document.getElementById('tw');
            tw.href = colec.tw;
            ins = document.getElementById('in');
            ins.href = colec.in;
            wsite = document.getElementById('wsite');
            wsite.href = colec.wsite;
            phone = document.getElementById('phone');
            phone.innerHTML = colec.phone;
            address = document.getElementById('address')
            address.innerHTML = colec.address;

        };
        if  (elemC.id === 'gt'){
            const colec = constants.collectiveList[4];

            const name =  document.getElementById('name');
            name.innerText = colec.name;
            description = document.getElementById('description');
            description.innerText = colec.description;
            historyC = document.getElementById('historyC');
            historyC.innerText = colec.history;
            type = document.getElementById('type');
            type.innerText = colec.type;
            fb = document.getElementById('fb');
            fb.href = colec.fb;
            tw = document.getElementById('tw');
            tw.href = colec.tw;
            ins = document.getElementById('in');
            ins.href = colec.in;
            wsite = document.getElementById('wsite');
            wsite.href = colec.wsite;
            phone = document.getElementById('phone');
            phone.innerHTML = colec.phone;
            address = document.getElementById('address')
            address.innerHTML = colec.address;

        };
        if  (elemC.id === 'cn'){
            const colec = constants.collectiveList[5];

            const name =  document.getElementById('name');

            name.innerText = colec.name;
            description = document.getElementById('description');
            description.innerText = colec.description;
            historyC = document.getElementById('historyC');
            historyC.innerText = colec.history;
            type = document.getElementById('type');
            type.innerText = colec.type;
            fb = document.getElementById('fb');
            fb.href = colec.fb;
            tw = document.getElementById('tw');
            tw.href = colec.tw;
            ins = document.getElementById('in');
            ins.href = colec.in;
            wsite = document.getElementById('wsite');
            wsite.href = colec.wsite;
            phone = document.getElementById('phone');
            phone.innerHTML = colec.phone;
            address = document.getElementById('address')
            address.innerHTML = colec.address;

        };
        if  (elemC.id === 'wmp'){
            const colec = constants.collectiveList[6];

            const name =  document.getElementById('name');

            name.innerText = colec.name;
            description = document.getElementById('description');
            description.innerText = colec.description;
            historyC = document.getElementById('historyC');
            historyC.innerText = colec.history;
            type = document.getElementById('type');
            type.innerText = colec.type;
            fb = document.getElementById('fb');
            fb.href = colec.fb;
            tw = document.getElementById('tw');
            tw.href = colec.tw;
            ins = document.getElementById('in');
            ins.href = colec.in;
            wsite = document.getElementById('wsite');
            wsite.href = colec.wsite;
            phone = document.getElementById('phone');
            phone.innerHTML = colec.phone;
            address = document.getElementById('address')
            address.innerHTML = colec.address;

        };
        if  (elemC.id === 'jr'){
            const colec = constants.collectiveList[7];

            const name =  document.getElementById('name');

            name.innerText = colec.name;
            description = document.getElementById('description');
            description.innerText = colec.description;
            historyC = document.getElementById('historyC');
            historyC.innerText = colec.history;
            type = document.getElementById('type');
            type.innerText = colec.type;
            fb = document.getElementById('fb');
            fb.href = colec.fb;
            tw = document.getElementById('tw');
            tw.href = colec.tw;
            ins = document.getElementById('in');
            ins.href = colec.in;
            wsite = document.getElementById('wsite');
            wsite.href = colec.wsite;
            phone = document.getElementById('phone');
            phone.innerHTML = colec.phone;
            address = document.getElementById('address')
            address.innerHTML = colec.address;

        };
        if  (elemC.id === 'fc'){
            const colec = constants.collectiveList[8];

            const name =  document.getElementById('name');

            name.innerText = colec.name;
            description = document.getElementById('description');
            description.innerText = colec.description;
            historyC = document.getElementById('historyC');
            historyC.innerText = colec.history;
            type = document.getElementById('type');
            type.innerText = colec.type;
            fb = document.getElementById('fb');
            fb.href = colec.fb;
            tw = document.getElementById('tw');
            tw.href = colec.tw;
            ins = document.getElementById('in');
            ins.href = colec.in;
            wsite = document.getElementById('wsite');
            wsite.href = colec.wsite;
            phone = document.getElementById('phone');
            phone.innerHTML = colec.phone;
            address = document.getElementById('address')
            address.innerHTML = colec.address;

        };

        if  (elemC.id === 'mb'){
            const colec = constants.collectiveList[9];

            const name =  document.getElementById('name');

            name.innerText = colec.name;
            description = document.getElementById('description');
            description.innerText = colec.description;
            historyC = document.getElementById('historyC');
            historyC.innerText = colec.history;
            type = document.getElementById('type');
            type.innerText = colec.type;
            fb = document.getElementById('fb');
            fb.href = colec.fb;
            tw = document.getElementById('tw');
            tw.href = colec.tw;
            ins = document.getElementById('in');
            ins.href = colec.in;
            wsite = document.getElementById('wsite');
            wsite.href = colec.wsite;
            phone = document.getElementById('phone');
            phone.innerHTML = colec.phone;
            address = document.getElementById('address')
            address.innerHTML = colec.address;
        };
      }
    }
  }

}
