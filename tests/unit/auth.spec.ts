import { mount } from '@vue/test-utils'
import AuthPage from '@/views/AuthPage.vue'


describe('AuthPage', () => {
    it('try login with empty field', async () => {
      
        const AuthComponent = mount(AuthPage)
        
        await AuthComponent.setData({ login: '', password: '' })

        const btnSubmit = AuthComponent.find('.btns-container button[type=submit]')

        expect(btnSubmit.exists()).toBe(true)
        

      //expect(AuthComponent.find('.login-panel').exists()).toBe(true)
    })
  })