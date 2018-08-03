/// <reference path="../../index.d.ts"/>
import Component from 'vue-class-component'
import HtmlTemplate from '../../../vhtml/sample-parameter.vhtml'
import BaseComponent from "./BaseComponent";

@HtmlTemplate
@Component({
})
export class SampleParameterComponent extends BaseComponent {
    get pathVariable() {
        return this.$route.params.id;
    }

    get getVariable() {
        return this.$route.query.test;
    }
}
