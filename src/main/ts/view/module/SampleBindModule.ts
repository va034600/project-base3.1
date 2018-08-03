/// <reference path="../../index.d.ts"/>

import {ActionTree, GetterTree, ModuleTree, MutationTree} from "vuex";
import {MainState} from "../store/MainStore";

const NAMESPACE = 'sample-bind';
const NAMESPACE_ACTION = `${NAMESPACE}/a/`
const NAMESPACE_GETTER = `${NAMESPACE}/g/`
const NAMESPACE_MUTATION = `${NAMESPACE}/m/`

export const ActionKey = {
}

export const GetterKey = {
}

export const MutationKey = {
    SET_COMMENT: `${NAMESPACE_MUTATION}SET_COMMENT`,
}

export class SampleBindState {
    constructor(
        public comment: String = null,
    ) { }
}

function createStore(){
    const getters = {
    } as GetterTree<SampleBindState, MainState>

    const actions = {
    } as ActionTree<SampleBindState, MainState>

    const mutations = {
        [MutationKey.SET_COMMENT] (state, comment:String) {
            state.comment = comment;
        },
    } as MutationTree<SampleBindState>

    return {
        state: new SampleBindState(),
        getters,
        actions,
        mutations
    } as ModuleTree<SampleBindState>
}

export default createStore()
