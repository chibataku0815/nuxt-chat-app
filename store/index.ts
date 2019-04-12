import Vue from 'vue'
import Vuex from 'vuex'

import { createVuexStore, Module } from 'vuex-simple'

import { BarModule } from './bar'

Vue.use(Vuex)

export class MyStore {

  @Module()
  public bar = new BarModule();

}

// create and export our store
export default () => createVuexStore(new MyStore(), {
  strict: false,
  modules: {},
  plugins: []
})
