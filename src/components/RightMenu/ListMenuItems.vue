<template>
    <div class="menu-list-items">
        <ul>
            <li v-for="(item, key) in menuItems" :key="key" @click="changeRouter(item.routeAddress)">
                <p>{{ item.title }}</p>
            </li>
            <li>
                <p>Выход</p>
            </li>
        </ul>
    </div>
</template>
<script lang="ts">

type MenuItem = {
    routeAddress: string,
    title: string,
    hidden: boolean,
}

type ListMenuItems = Array<MenuItem>

import { defineComponent } from 'vue';
export default defineComponent({
    name: 'ListMenuItems',
    data() {
        return {
            menuItems: [
                {
                    routeAddress: 'personal',
                    title: 'Личный кабинет',
                    hidden: false,
                },
                {
                    routeAddress: 'FullTimeTable',
                    title: 'Все расписание',
                    hidden: false,
                },
                {
                    routeAddress: 'HomeWork',
                    title: 'Домашнее задание',
                    hidden: false,
                },
                {
                    routeAddress: 'MyGroup',
                    title: 'Моя группа',
                    hidden: false,
                },
                {
                    routeAddress: 'Teachers',
                    title: 'Преподаватели',
                    hidden: false,
                },
            ] as ListMenuItems,

        }
    },
    props: {
        closeMenu: {
            type: Function,

        }
    },
    methods: {
        chooseSection(routeAddress: string): void {
            this.$router.push({ name: routeAddress })
        },
        changeRouter(routeAddress: string): void {
            const callbackFunc = this.chooseSection.bind(this, routeAddress)
            if (this.closeMenu) {
                this.closeMenu(callbackFunc)    
            }
            
        }
     }

})
</script>