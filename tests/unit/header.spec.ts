import { mount } from '@vue/test-utils'
import VHeader from '@/components/v-header.vue'
import { User } from '@/types/userInfo'

describe('VHeader', () => {
  it('test header contain btns', () => {
    const userInfo: User = {
        name: 'Виталий Прохоров',
        login: 'vitaliy',
        group: '01.03.02',
        studyDirections: 'Прикладная математика и информатика'
    }
    const headerWithoutData = mount(VHeader, {
        props: { user: null }
    })
    expect(headerWithoutData.find('.login-panel').exists()).toBe(true)

    const headerWithData = mount(VHeader, {
      props: { user: userInfo }
    })
    expect(headerWithData.find('.user-panel').exists()).toBe(true)
  })
})
