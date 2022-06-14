import { Getters, Mutations, Actions, Module, createMapper } from 'vuex-smart-module'

class RootState {
    currentTableDate = new Date()
}
  
class RootGetters extends Getters<RootState> {
    getCurrentDate  (): Date {
      return this.state.currentTableDate
    }
}
  
class RootMutations extends Mutations<RootState> {
    changeStateRightMenu (newDate: Date) {
        this.state.currentTableDate = newDate
    }
}
  
class RootActions extends Actions<
    RootState,
    RootGetters,
    RootMutations,
    RootActions
> {}
  
export const TimeTableStore = new Module({
    namespaced: true,
    state: RootState,
    getters: RootGetters,
    mutations: RootMutations,
    actions: RootActions
})
  
export const TimeTableMapper = createMapper(TimeTableStore)