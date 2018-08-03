/// <reference path="../../index.d.ts"/>
import Component from 'vue-class-component'
import HtmlTemplate from '../../../vhtml/sample-modal.vhtml'
import {MutationKey} from "../module/SampleModalModule";
import BaseComponent from "./BaseComponent";

@HtmlTemplate
@Component({
})
export class SampleModalComponent extends BaseComponent {
    get shown() {
        return this.$store.state.sampleModal.shown
    }

    //クローズボタン押下時にshownをfalseにしてモーダルを非表示にします。
    clickByCloseButton() {
        this.$store.commit(MutationKey.SET_SHOWN, false)
    }

    clickByCancelButton() {
        this.$store.commit(MutationKey.SET_SHOWN, false)
    }
}
