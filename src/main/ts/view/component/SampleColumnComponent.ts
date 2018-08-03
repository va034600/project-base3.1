/// <reference path="../../index.d.ts"/>
import Component from 'vue-class-component'
import HtmlTemplate from '../../../vhtml/sample-column.vhtml'
import BaseComponent from "./BaseComponent";

@HtmlTemplate
@Component({
})
export class SampleColumnComponent extends BaseComponent {
    st = "RIGHT"

    get selectType(){
        return this.st;
    }

    set selectType(value) {
        this.st = value;
    }
}
