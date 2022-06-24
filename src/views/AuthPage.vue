<template>
    <div class='page-layout' id="auth-layout">
        <div class='auth-container'>
            <form class='auth-form' @submit='auth'>
                <div class="form-title mg-bottom40">
                    <h2>Вход в систему</h2>
                </div>
                <div class='input-container' test-data="login">
                    <label>Логин</label>
                    <input type='text' v-model='login' placeholder="Введите логин" 
                        :class="v$.login.$error ? 'input-error': ''" @change="v$.login.$reset()"
                    >
                    <div class="error-container" v-if="v$.login.$error">
                        <p v-if="v$.login.minLength.$invalid" >{{ v$.login.minLength.$message }}</p>
                        <p v-if="v$.login.required.$invalid" >{{ v$.login.required.$message }}</p>
                    </div>
                </div>
                <div class='input-container' test-data="password">
                    <label>Пароль</label>
                    <input type='password' v-model='password' placeholder="Введите пароль" 
                        :class="v$.password.$error ? 'input-error': ''" @change="v$.password.$reset()"
                    >
                    <div class="error-container" v-if="v$.password.$error">
                        <p v-if="v$.password.minLength.$invalid" >{{ v$.password.minLength.$message }}</p>
                        <p v-if="v$.password.required.$invalid" >{{ v$.password.required.$message }}</p>
                    </div>
                </div>
                <div class='btns-container mg-top40'>
                    <button class="btn transparent blue-font" 
                         data-test="btn-forget" type="button" @click="forgetPassword"
                    >
                        Забыл пароль
                    </button>
                    <button class="btn blue" type="submit" data-test="btn-login">Войти</button>
                </div>
            </form>
        </div>
    </div>
</template>

<script lang="ts">


import { defineComponent } from 'vue';
import useVuelidate from '@vuelidate/core'
import { required, minLength, helpers } from '@vuelidate/validators';
import { MainMessageMapper } from '@/store/modules/mainMessage';
import { GenerateMessages } from '@/helpers/generateMessages';

export default defineComponent({
    name: 'AuthPage',
    setup() {
        return { v$: useVuelidate() }
    },
    data() {
        return {
            login: '',
            password: ''
        }
    },
    methods: {
        ...MainMessageMapper.mapMutations(['openMainMessage']),
        auth(e: Event) {
            e.preventDefault()
            this.v$.$touch()
        },
        forgetPassword() {
            const message = GenerateMessages('not_ready_functional', '.page-layout')
            this.openMainMessage(message)
        }
    },
    validations() {
        return {
            login: {
                minLength: helpers.withMessage(({ $params }) => `Минимальная длина ${$params.min} символов`, minLength(5)),
                required: helpers.withMessage('Это обязательное поле', required)
            },
            password: {
                minLength: helpers.withMessage(({ $params }) => `Минимальная длина ${$params.min} символов`, minLength(5)),
                required: helpers.withMessage('Это обязательное поле', required)
            }
        }
    },
})
</script>