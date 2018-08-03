/// <reference path="../../index.d.ts"/>
import Component from 'vue-class-component'
import BaseComponent from "./BaseComponent";

@Component<PageNotFoundComponent>({
    template: `<div>page not found!!</div>`
})
export class PageNotFoundComponent extends BaseComponent {
}
