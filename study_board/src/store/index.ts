import { Getters, Mutations, Actions, Module } from 'vuex-smart-module'
import { UserInfoStore } from './modules/userInfo'
import { ElementsControlStore } from './modules/elements'
import { TimeTableStore } from './modules/timetable'

class RootState {}

class RootGetters extends Getters<RootState> {}

class RootMutations extends Mutations<RootState> {}

class RootActions extends Actions<
  RootState,
  RootGetters,
  RootMutations,
  RootActions
> {

}

export const RootStore = new Module({
  namespaced: true,
  state: RootState,
  getters: RootGetters,
  mutations: RootMutations,
  actions: RootActions,
  modules: {
    UserInfoStore,
    ElementsControlStore,
    TimeTableStore
  }
})
