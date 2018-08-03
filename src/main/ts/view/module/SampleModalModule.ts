/// <reference path="../../index.d.ts"/>

import {ActionTree, GetterTree, ModuleTree, MutationTree} from "vuex";
import {MainState} from "../store/MainStore";

const NAMESPACE = 'sample-modal';
const NAMESPACE_ACTION = `${NAMESPACE}/a/`
const NAMESPACE_GETTER = `${NAMESPACE}/g/`
const NAMESPACE_MUTATION = `${NAMESPACE}/m/`

export const ActionKey = {
}

export const GetterKey = {
}

export const MutationKey = {
    SET_SHOWN: `${NAMESPACE_MUTATION}SET_SHOWN`,
}

export class SampleModalState {
    constructor(
        public shown: Boolean = false,
    ) { }
}

function createStore(){
    const getters = {
    } as GetterTree<SampleModalState, MainState>

    const actions = {
    } as ActionTree<SampleModalState, MainState>

    const mutations = {
        [MutationKey.SET_SHOWN] (state, value) {
            state.shown = value;
        },
    } as MutationTree<SampleModalState>

    return {
        state: new SampleModalState(),
        getters,
        actions,
        mutations
    } as ModuleTree<SampleModalState>
}

export default createStore()
