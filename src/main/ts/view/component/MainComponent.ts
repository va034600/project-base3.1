/// <reference path="../../index.d.ts"/>
import Vue from 'vue'
import Component from 'vue-class-component'

import store from '../store/MainStore';
import router from '../router/mainRouter'

// import * as data from '../../../vhtml/main.vhtml!text';
import * as Template from '../../../vhtml/main.vhtml';
import html from '../../../vhtml/main.vhtml'
var a = require('../../../vhtml/main.vhtml');
alert(a);

@Component({
  router,
  store,
  template: require('../../../vhtml/main.vhtml'),
})
export class MainComponent extends Vue {
  message: string = 'Hello Vue.js typescript!!'
}
