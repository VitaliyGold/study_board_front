import { Getters, Mutations, Actions, Module, createMapper } from 'vuex-smart-module'

class RootState {
  stateRightMenu = false
}

class RootGetters extends Getters<RootState> {
  getStateRightMenu (): boolean {
    return this.state.stateRightMenu
  }
}

class RootMutations extends Mutations<RootState> {
  changeStateRightMenu (newStateRightMenu: boolean) {
    this.state.stateRightMenu = newStateRightMenu
  }
}

class RootActions extends Actions<
  RootState,
  RootGetters,
  RootMutations,
  RootActions
> {}

export const ElementsControlStore = new Module({
  namespaced: true,
  state: RootState,
  getters: RootGetters,
  mutations: RootMutations,
  actions: RootActions
})

export const ElementControlMapper = createMapper(ElementsControlStore)
