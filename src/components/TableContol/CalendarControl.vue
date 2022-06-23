<template>
    <div class="btns-container flex-horiz-center pos-rel close-calendar" >
        <button class="btn white with-border" @click="changeStateCalendar">Выбрать день в календаре</button>
        <calendar :currentDate='currentDate' 
            @changeDate='choooseDateFromCalendar'
            v-if="openCalendarState"
            v-click-out="vOutObj"
        />
    </div>
</template>
<script lang="ts">
import Calendar from '@/components/Calendar.vue'
import { defineComponent, PropType } from 'vue'
export default defineComponent({
    name: 'CalendarControl',
    props: {
        choooseDateFromCalendar: {
            type: Function as PropType<() => void>,
            required: true
        },
        currentDate: {
            type: Date,
            required: true
        }
    },
    data() {
        return {
            openCalendarState: false,
            vOutObj: {
                callback: this.closeCalendar,
                listExceptionsSelectors: [],
                customRootSelection: 'close-calendar'
            }
        }
    },
    methods: {
        closeCalendar() {
            this.openCalendarState = false
        },
        openCalendar() {
            this.openCalendarState = true
        },
        changeStateCalendar() {
            if (this.openCalendarState) {
                this.closeCalendar()
            } else {
                this.openCalendar()
            }
        }
    },
    components: {
        'calendar': Calendar
    }
})
</script>>