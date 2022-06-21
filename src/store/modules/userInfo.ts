import { Getters, Mutations, Actions, Module, createMapper } from 'vuex-smart-module'
import { User } from '@/types/userInfo'

class RootState {
  user: User | null = null /* {
    name: 'Виталий Прохоров',
    login: 'vitaliy',
    group: '01.03.02',
    studyDirections: 'Прикладная математика и информатика'
  }*/ 
}

class RootGetters extends Getters<RootState> {
  getUser () {
    return this.state.user
  }
}

class RootMutations extends Mutations<RootState> {
  changeUser (userInfo: User) {
    this.state.user = userInfo
  }
}

class RootActions extends Actions<
  RootState,
  RootGetters,
  RootMutations,
  RootActions
> {

}

export const UserInfoStore = new Module({
  namespaced: true,
  state: RootState,
  getters: RootGetters,
  mutations: RootMutations,
  actions: RootActions,
  modules: {}
})

export const UserInfoMapper = createMapper(UserInfoStore)
