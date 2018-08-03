/// <reference path="../../index.d.ts"/>
import Component from 'vue-class-component'
import HtmlTemplate from '../../../vhtml/sample-modal-button.vhtml'
import {SampleModalComponent} from "./SampleModalComponent";
import {MutationKey} from "../module/SampleModalModule";
import BaseComponent from "./BaseComponent";

@HtmlTemplate
@Component({
    components: { //ここでコンポーネントを読み込みます。
        "sample-modal":SampleModalComponent,
    },
})
export class SampleModalButtonComponent extends BaseComponent {
    //クリックするとshownをtrueにして、モーダルを表示します。
    clickByShowModalButton() {
        this.$store.commit(MutationKey.SET_SHOWN, true)
    }
}
