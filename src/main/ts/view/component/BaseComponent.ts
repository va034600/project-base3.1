/// <reference path="../../index.d.ts"/>
import Vue from 'vue'
import {MainState} from "../store/MainStore";
import {Store} from "vuex";

export default class BaseComponent extends Vue {
  $store: Store<MainState>;
}
