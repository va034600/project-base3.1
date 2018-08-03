/// <reference path="../../index.d.ts"/>
import Component from 'vue-class-component'
import HtmlTemplate from '../../../vhtml/sample-load.vhtml'
import {ActionKey} from "../module/SampleLoadModule";
import BaseComponent from "./BaseComponent";

@HtmlTemplate
@Component({
})
export class SampleLoadComponent extends BaseComponent {
  /**
   * ライフサイクル
   */
  async created(){
    console.log("load 1");
    console.log(`message:${this.$store.state.sampleLoad.message}`);
    await this.$store.dispatch(ActionKey.LOAD_MESSAGE)
    console.log(`message loaded:${this.$store.state.sampleLoad.message}`);
    console.log("load 2");
    await this.$store.dispatch(ActionKey.LOAD_TITLE, "fff")
    console.log("load 3");
  }

  /**
   * プロパティ
   */
  get message(){
    return this.$store.state.sampleLoad.message;
  }

  get title(){
    return this.$store.state.sampleLoad.title;
  }
}
