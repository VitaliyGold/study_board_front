<template>
    <div class="filter date">
        <label :for="idFilter" >{{ getDateToString }}</label>
        <input type="date" :id="idFilter" @change="changeDate" ref="dateFilter">
    </div>
</template>
<script lang="ts">
import { defineComponent } from 'vue';
export default defineComponent({
    name: 'SingleDateFilter',
    data() {
        return {
            idFilter: Math.floor(Math.random() * new Date().getTime()) + 'date_filter',
            filterDate: new Date
        }
    },
    computed: {
        getDateToString(): string {
            return 'Сегодня'
        }
    },
    methods: {
        changeDate(e: any): void {
            console.log(e)
            console.log(e.target.value)
        },
        
    }
})


</script>