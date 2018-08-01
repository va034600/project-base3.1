/// <reference path="../../index.d.ts"/>
import Vue from 'vue'
import Component from 'vue-class-component'

@Component({
    template: require('../../../vhtml/sample-button.vhtml'),
})
export class SampleButtonComponent extends Vue {
    clickByAlertButton() {
        alert("clicked test");
    }
}
