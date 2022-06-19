<template>
    <div class="btns-container flex-horiz-center pos-rel close-calendar">
        <button class="btn white with-border" @click="changeCalendarState">Выбрать день в календаре</button>
        <calendar :currentDate='currentDate' 
            @changeDate='choooseDateFromCalendar'
            v-if="openCalendarState"
        />
    </div>
</template>
<script lang="ts">
import Calendar from '@/components/Calendar.vue'
import { defineComponent } from 'vue'
export default defineComponent({
    name: 'CalendarControl',
    props: {
        choooseDateFromCalendar: {
            type: Function,
            required: true
        }
    },
    data() {
        return {
            openCalendarState: false
        }
    },
    methods: {
        eventCloseCalendar(event: Event):void {
            const pathList: any = event.composedPath()
            const clickForCalendar = pathList.find((element: any) => {
                if (element.className && element.className.includes('close-calendar')) {
                    return true
                }
                return false
            })
            if (!clickForCalendar) {
                this.openCalendarState = false
            }
        },
        changeCalendarState():void {
            this.openCalendarState = !this.openCalendarState
            if (this.openCalendarState) {
                document.addEventListener('click', this.eventCloseCalendar)
            } else {
                document.removeEventListener('click', this.eventCloseCalendar)
            }
        }
    },
    components: {
        'calendar': Calendar
    }
})
</script>>