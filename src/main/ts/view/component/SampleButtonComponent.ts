/// <reference path="../../index.d.ts"/>
import Component from 'vue-class-component'
import HtmlTemplate from '../../../vhtml/sample-button.vhtml'
import BaseComponent from "./BaseComponent";

@HtmlTemplate
@Component({
})
export class SampleButtonComponent extends BaseComponent {
    clickByAlertButton() {
        alert("clicked test");
    }
}
