import { Getters, Mutations, Actions, Module, createMapper } from 'vuex-smart-module';
import { MainMessageConfig } from '@/types/messageTypes'

class RootState {
  visibleMainMessage = false
  mainMessageConfig: null | MainMessageConfig = null
}

class RootGetters extends Getters<RootState> {
    getVisibleMainMessage(): boolean {
        return this.state.visibleMainMessage
    }
    getMainMessageConfig(): MainMessageConfig | null {
        return this.state.mainMessageConfig
    }
}

class RootMutations extends Mutations<RootState> {
    openMainMessage(config: MainMessageConfig | null):void {
        this.state.visibleMainMessage = true
        this.state.mainMessageConfig = config
    }
    closeMainMessage():void {
        this.state.visibleMainMessage = false
        this.state.mainMessageConfig = null
    }
}

class RootActions extends Actions<
  RootState,
  RootGetters,
  RootMutations,
  RootActions
> {}

export const MainMessageStore = new Module({
  namespaced: true,
  state: RootState,
  getters: RootGetters,
  mutations: RootMutations,
  actions: RootActions
})

export const MainMessageMapper = createMapper(MainMessageStore)
