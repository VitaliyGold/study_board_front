<template>
    <div class='main-layout'>
        <div class='auth-container'>
            <form class='auth-form' @submit='auth'>
                <div class="form-title mg-bottom40">
                    <h2>Вход в систему</h2>
                </div>
                <div class='input-container'>
                    <label>Логин</label>
                    <input type='text' v-model='login' placeholder="Введите логин" :class="v$.login.$invalid ? 'input-error': ''">
                </div>
                <div class='input-container'>
                    <label>Пароль</label>
                    <input type='password' v-model='password' placeholder="Введите пароль" :class="v$.password.$invalid ? 'input-error': ''">
                </div>
                <div class='btns-container mg-top40'>
                    <button class="btn transparent blue-font">Забыл пароль</button>
                    <button class="btn blue" type="submit">Войти</button>
                </div>
            </form>
        </div>
    </div>
</template>

<script lang="ts">


import { defineComponent } from 'vue';
import useVuelidate from '@vuelidate/core'
import { required, minLength } from '@vuelidate/validators'
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
        auth(e: Event) {
            e.preventDefault()
            console.log(232)
            console.log(this.v$)
        }
    },
    validations() {
        return {
            login: {
                required,
                minLength: minLength(5)
            },
            password: {
                required,
                minLength: minLength(5)
            }
        }
    }
})
</script>>