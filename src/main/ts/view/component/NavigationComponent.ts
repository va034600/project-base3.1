/// <reference path="../../index.d.ts"/>
import Vue from 'vue'
import Component from 'vue-class-component'
import router from '../router/mainRouter'

@Component({
    router,
    template: require('../../../vhtml/navigation.vhtml'),
})
export class NavigationComponent extends Vue {
    flag = false;

    get opendMenu() {
        return this.flag;
    }

    clickByToggleMenuButton() {
        this.flag = !this.flag;
    }
}
