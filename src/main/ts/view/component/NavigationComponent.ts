/// <reference path="../../index.d.ts"/>
import Component from 'vue-class-component'
import HtmlTemplate from '../../../vhtml/navigation.vhtml'
import router from '../router/mainRouter'
import BaseComponent from "./BaseComponent";

@HtmlTemplate
@Component({
    router,
})
export class NavigationComponent extends BaseComponent {
    flag = false;

    get opendMenu() {
        return this.flag;
    }

    clickByToggleMenuButton() {
        this.flag = !this.flag;
    }
}
