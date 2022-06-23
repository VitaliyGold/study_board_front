import { mount } from '@vue/test-utils'
import AuthPage from '@/views/AuthPage.vue';


describe('AuthPage', () => {

    it('try login with empty fields', async () => {
      
      const AuthComponent = mount(AuthPage)
        
      await AuthComponent.setData({ login: '', password: '' })

      const btnSubmit = AuthComponent.find('.btns-container button[type=submit]')

      await btnSubmit.trigger('click')

      const loginInput = AuthComponent.find('.input-container[test-data="login"] input')
      const passwordInput = AuthComponent.find('.input-container[test-data="password"] input')

      expect(loginInput.classes('input-error')).toBe(true)
      expect(passwordInput.classes('input-error')).toBe(true)  

    })
    it('try one empty fields', async () => {
      
      const AuthComponent = mount(AuthPage)

      const loginInput = AuthComponent.find('.input-container[test-data="login"] input')

      const passwordInput = AuthComponent.find('.input-container[test-data="password"] input')

      const btnSubmit = AuthComponent.find('.btns-container button[type=submit]')
      
      // проверяем с пустым паролем

      await AuthComponent.setData({ login: '12345', password: '' })

      await btnSubmit.trigger('click')

      expect(passwordInput.classes('input-error')).toBe(true)

      // проверяем с пустым логином

      await AuthComponent.setData({ login: '', password: '12345' })

      await btnSubmit.trigger('click')

      expect(loginInput.classes('input-error')).toBe(true)

    })

    it('try login with short value', async () => {
      
      const AuthComponent = mount(AuthPage)

      const loginInput = AuthComponent.find('.input-container[test-data="login"] input')

      const passwordInput = AuthComponent.find('.input-container[test-data="password"] input')

      const btnSubmit = AuthComponent.find('.btns-container button[type=submit]')
      
      // проверяем с коротким паролем паролем

      await AuthComponent.setData({ login: '12345', password: '1234' })

      await btnSubmit.trigger('click')

      expect(passwordInput.classes('input-error')).toBe(true)

      await AuthComponent.setData({ login: '12345', password: '1' })

      await btnSubmit.trigger('click')

      expect(passwordInput.classes('input-error')).toBe(true)

      // проверяем с пустым логином

      await AuthComponent.setData({ login: '1', password: '12345' })

      await btnSubmit.trigger('click')

      expect(loginInput.classes('input-error')).toBe(true)

      await AuthComponent.setData({ login: '1234', password: '12345' })

      await btnSubmit.trigger('click')

      expect(loginInput.classes('input-error')).toBe(true)

    })

    it('try login with valid data', async () => {
      const AuthComponent = mount(AuthPage)

      const loginInput = AuthComponent.find('.input-container[test-data="login"] input')

      const passwordInput = AuthComponent.find('.input-container[test-data="password"] input')

      const btnSubmit = AuthComponent.find('.btns-container button[type=submit]')

      await AuthComponent.setData({ login: 'kysko68', password: '12345678' })

      await btnSubmit.trigger('click')

      expect(loginInput.classes('input-error')).toBe(false)

      expect(passwordInput.classes('input-error')).toBe(false)
    })
    /*
    it('btn forget password click', async () => {
      const AuthComponent = mount(AuthPage)
      const btnForgetPassword = AuthComponent.find('.btns-container .btn[data-test=""]')
      await btnForgetPassword.trigger('click')


      
    })
    */
  })