/// <reference path="../../index.d.ts"/>
import Component from 'vue-class-component'
import HtmlTemplate from '../../../vhtml/sample.vhtml'
import BaseComponent from "./BaseComponent";

@HtmlTemplate
@Component({
})
export class SampleComponent extends BaseComponent {
}
