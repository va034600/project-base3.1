/// <reference path="../../index.d.ts"/>
import Vue from 'vue'
import Component from 'vue-class-component'

@Component({
    template: require('../../../vhtml/sample.vhtml'),
})
export class SampleComponent extends Vue {
}
