import { mount } from '@vue/test-utils'
import AuthPage from '@/views/AuthPage.vue';


describe('AuthPage', () => {

    it('try login with empty fields', async () => {
      
      const AuthComponent = mount(AuthPage)
        
      await AuthComponent.setData({ login: '', password: '' })

      const form = AuthComponent.find('.auth-form')
      await form.trigger('submit')

      const loginWrapper = AuthComponent.find('.input-container[test-data="login"]')
      const passwordWrapper = AuthComponent.find('.input-container[test-data="password"]')

      const loginErrorTextContainer = loginWrapper.find('.error-container p')
      const passwordErrorTextContainer = passwordWrapper.find('.error-container p')

      const loginInput = loginWrapper.find('input')
      const passwordInput = passwordWrapper.find('input')

      expect(loginInput.classes('input-error')).toBe(true)
      expect(loginErrorTextContainer.text()).toBe('Это обязательное поле')
      expect(passwordInput.classes('input-error')).toBe(true)
      expect(passwordErrorTextContainer.text()).toBe('Это обязательное поле')

    })
    it('try one empty fields', async () => {
      
      const AuthComponent = mount(AuthPage)

      const loginWrapper = AuthComponent.find('.input-container[test-data="login"]')
      const passwordWrapper = AuthComponent.find('.input-container[test-data="password"]')

      const loginInput = loginWrapper.find('input')

      const passwordInput = passwordWrapper.find('input')

      const form = AuthComponent.find('.auth-form')

      let loginErrorTextContainer, passwordErrorTextContainer
      
      // проверяем с пустым паролем и корректным логином

      await AuthComponent.setData({ login: '12345', password: '' })

      await form.trigger('submit')

      loginErrorTextContainer = loginWrapper.find('.error-container p')
      passwordErrorTextContainer = passwordWrapper.find('.error-container p')
      
      expect(passwordInput.classes('input-error')).toBe(true)
      expect(loginInput.classes('input-error')).toBe(false)
      expect(loginErrorTextContainer.exists()).toBe(false)
      expect(passwordErrorTextContainer.exists()).toBe(true)
      expect(passwordErrorTextContainer.text()).toBe('Это обязательное поле')

      // проверяем с пустым логином и корректным паролем

      await AuthComponent.setData({ login: '', password: '12345' })

      await form.trigger('submit')

      loginErrorTextContainer = loginWrapper.find('.error-container p')
      passwordErrorTextContainer = passwordWrapper.find('.error-container p')
      
      expect(loginInput.classes('input-error')).toBe(true)
      expect(passwordInput.classes('input-error')).toBe(false)
      expect(passwordErrorTextContainer.exists()).toBe(false)
      expect(loginErrorTextContainer.exists()).toBe(true)
      expect(loginErrorTextContainer.text()).toBe('Это обязательное поле')

    })

    it('try login with short value', async () => {
      
      const AuthComponent = mount(AuthPage)

      const loginWrapper = AuthComponent.find('.input-container[test-data="login"]')

      const passwordWrapper = AuthComponent.find('.input-container[test-data="password"]')

      const loginInput = loginWrapper.find('input')

      const passwordInput = passwordWrapper.find('input')

      const form = AuthComponent.find('.auth-form')

      let loginErrorTextContainer, passwordErrorTextContainer
      
      // проверяем с коротким паролем паролем

      await AuthComponent.setData({ login: '12345', password: '1234' })

      await form.trigger('submit')

      loginErrorTextContainer = loginWrapper.find('.error-container p')
      passwordErrorTextContainer = passwordWrapper.find('.error-container p')
      
      expect(loginInput.classes('input-error')).toBe(false)
      expect(passwordInput.classes('input-error')).toBe(true)
      expect(passwordErrorTextContainer.exists()).toBe(true)
      expect(loginErrorTextContainer.exists()).toBe(false)
      expect(passwordErrorTextContainer.text()).toBe('Минимальная длина 5 символов')

      await AuthComponent.setData({ login: '12345', password: '1' })

      await form.trigger('submit')

      loginErrorTextContainer = loginWrapper.find('.error-container p')
      passwordErrorTextContainer = passwordWrapper.find('.error-container p')
      
      expect(loginInput.classes('input-error')).toBe(false)
      expect(passwordInput.classes('input-error')).toBe(true)
      expect(passwordErrorTextContainer.exists()).toBe(true)
      expect(loginErrorTextContainer.exists()).toBe(false)
      expect(passwordErrorTextContainer.text()).toBe('Минимальная длина 5 символов')

      // проверяем с коротким логином и корректным паролем

      await AuthComponent.setData({ login: '1', password: '12345' })

      await form.trigger('submit')

      loginErrorTextContainer = loginWrapper.find('.error-container p')
      passwordErrorTextContainer = passwordWrapper.find('.error-container p')
      
      expect(loginInput.classes('input-error')).toBe(true)
      expect(passwordInput.classes('input-error')).toBe(false)
      expect(passwordErrorTextContainer.exists()).toBe(false)
      expect(loginErrorTextContainer.exists()).toBe(true)
      expect(loginErrorTextContainer.text()).toBe('Минимальная длина 5 символов')

      await AuthComponent.setData({ login: '1234', password: '12345' })

      await form.trigger('submit')

      loginErrorTextContainer = loginWrapper.find('.error-container p')
      passwordErrorTextContainer = passwordWrapper.find('.error-container p')
      
      expect(loginInput.classes('input-error')).toBe(true)
      expect(passwordInput.classes('input-error')).toBe(false)
      expect(passwordErrorTextContainer.exists()).toBe(false)
      expect(loginErrorTextContainer.exists()).toBe(true)
      expect(loginErrorTextContainer.text()).toBe('Минимальная длина 5 символов')

    })

    it('try login with valid data', async () => {
      const AuthComponent = mount(AuthPage)

      const loginWrapper = AuthComponent.find('.input-container[test-data="login"]')
      const loginInput = loginWrapper.find('input')

      const passwordWrapper = AuthComponent.find('.input-container[test-data="password"]')
      const passwordInput = passwordWrapper.find('input')

      const form = AuthComponent.find('.auth-form')

      await AuthComponent.setData({ login: 'kysko68', password: '12345678' })

      await form.trigger('submit')

      const loginErrorTextContainer = loginWrapper.find('.error-container p')
      const passwordErrorTextContainer = passwordWrapper.find('.error-container p')

      expect(loginInput.classes('input-error')).toBe(false)
      expect(loginErrorTextContainer.exists()).toBe(false)
      expect(passwordInput.classes('input-error')).toBe(false)
      expect(passwordErrorTextContainer.exists()).toBe(false)
    })
    it('try login with two invalid field', async () => {
      const AuthComponent = mount(AuthPage)

      const loginWrapper = AuthComponent.find('.input-container[test-data="login"]')
      const loginInput = loginWrapper.find('input')

      const passwordWrapper = AuthComponent.find('.input-container[test-data="password"]')
      const passwordInput = passwordWrapper.find('input')

      const form = AuthComponent.find('.auth-form')
      
      let loginErrorTextContainer, passwordErrorTextContainer

      // short login and password

      await AuthComponent.setData({ login: 'kys', password: '123' })

      await form.trigger('submit')

      loginErrorTextContainer = loginWrapper.find('.error-container p')
      passwordErrorTextContainer = passwordWrapper.find('.error-container p')

      expect(loginInput.classes('input-error')).toBe(true)
      expect(loginErrorTextContainer.exists()).toBe(true)
      expect(passwordInput.classes('input-error')).toBe(true)
      expect(passwordErrorTextContainer.exists()).toBe(true)
      expect(loginErrorTextContainer.text()).toBe('Минимальная длина 5 символов')
      expect(passwordErrorTextContainer.text()).toBe('Минимальная длина 5 символов')
      

      // short login and empty password

      await AuthComponent.setData({ login: 'kys', password: '' })

      await form.trigger('submit')

      loginErrorTextContainer = loginWrapper.find('.error-container p')
      passwordErrorTextContainer = passwordWrapper.find('.error-container p')

      expect(loginInput.classes('input-error')).toBe(true)
      expect(loginErrorTextContainer.exists()).toBe(true)
      expect(passwordInput.classes('input-error')).toBe(true)
      expect(passwordErrorTextContainer.exists()).toBe(true)
      expect(loginErrorTextContainer.text()).toBe('Минимальная длина 5 символов')
      expect(passwordErrorTextContainer.text()).toBe('Это обязательное поле')

      // empty login and short password

      await AuthComponent.setData({ login: '', password: '123' })

      await form.trigger('submit')

      loginErrorTextContainer = loginWrapper.find('.error-container p')
      passwordErrorTextContainer = passwordWrapper.find('.error-container p')

      expect(loginInput.classes('input-error')).toBe(true)
      expect(loginErrorTextContainer.exists()).toBe(true)
      expect(passwordInput.classes('input-error')).toBe(true)
      expect(passwordErrorTextContainer.exists()).toBe(true)
      expect(loginErrorTextContainer.text()).toBe('Это обязательное поле')
      expect(passwordErrorTextContainer.text()).toBe('Минимальная длина 5 символов')

    })
  })