/// <reference path="../../index.d.ts"/>

import Vue from 'vue'
import Vuex, {MutationTree} from 'vuex'
import EnvironmentUtility from "../../utility/EnvironmentUtility";
import sampleLoadModule, {SampleLoadState} from '../module/SampleLoadModule'
import sampleBindModule, {SampleBindState} from '../module/SampleBindModule'
import sampleModalModule, {SampleModalState} from '../module/SampleModalModule'

const NAMESPACE = 'main';
const NAMESPACE_ACTION = `${NAMESPACE}/a/`
const NAMESPACE_GETTER = `${NAMESPACE}/g/`
const NAMESPACE_MUTATION = `${NAMESPACE}/m/`

Vue.use(Vuex)

export const ActionKey = {
}

export const GetterKey = {
}

export const MutationKey = {
}

export class MainState {
    public sampleLoad:SampleLoadState
    public sampleBind:SampleBindState
    public sampleModal:SampleModalState
}

function createStore(){
    const mutations = {
    } as MutationTree<MainState>

    return new Vuex.Store<MainState>({
        state: new MainState(),
        mutations,
        strict: EnvironmentUtility.isDevelopment(),
        modules:{
            sampleLoad:sampleLoadModule,
            sampleBind:sampleBindModule,
            sampleModal:sampleModalModule,
        }
    })
}

export default createStore()