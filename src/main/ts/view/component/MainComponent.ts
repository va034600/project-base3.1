/// <reference path="../../index.d.ts"/>
import Component from 'vue-class-component'
import HtmlTemplate from '../../../vhtml/main.vhtml'

import store from '../store/MainStore';
import router from '../router/mainRouter'
import BaseComponent from "./BaseComponent";

@HtmlTemplate
@Component({
  router,
  store,
})
export class MainComponent extends BaseComponent {
  message: string = 'Hello Vue.js typescript!!'
}
