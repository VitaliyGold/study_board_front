<template>
    <div class="contol-panel-timetable">
        <div class="contol-panel-timetable__title">
            <h2>Расписание</h2>
        </div>
        <div class="contol-panel-timetable__control">
            <div class="btns-container">
                <btn-with-icon iconName='arrow' 
                            svgClass='rotate270 gray' 
                            btnClass='btn transparent only-icon' 
                            @leftClickHandler='changeDate(-1)'
                />
                <button class="btn white with-border" @click="setToday" test-data="date-format-container">
                    {{ getCurrentDateFormat }}
                </button>
                <btn-with-icon iconName='arrow' 
                            svgClass='rotate90  gray' 
                            btnClass='btn transparent only-icon' 
                            @leftClickHandler='changeDate(1)'
                />
            </div>
            <calendar-contol :choooseDateFromCalendar='choooseDateFromCalendar' :currentDate='currentDate'/>
        </div>
    </div>    
</template>
<script lang="ts">
import { defineComponent } from 'vue'
import BtnWithIcon from '@/components/Buttons/BtnWithIcon.vue';
import { formatDate, incrementDate } from '@/components/TableContol/scripts/timeHelpers';
import { TimeTableMapper } from '@/store/modules/timetable';
import CalendarControl from '@/components/TableContol/CalendarControl.vue';
export default defineComponent({
    name: 'ControlPanel',
    components: {
        'btn-with-icon': BtnWithIcon,
        'calendar-contol': CalendarControl
    },
    props: {
        currentDate: {
            type: Date,
            required: true
        }
    },
    methods: {
        ...TimeTableMapper.mapMutations(['changeCurrentDate']),
        changeDate(incrementNumber: number): void {
            this.changeCurrentDate(incrementDate(this.currentDate, incrementNumber))
        },
        choooseDateFromCalendar(newDate: Date):void {
            this.changeCurrentDate(newDate)
        },
        setToday():void {
            this.choooseDateFromCalendar(new Date)
        }
    },
    computed: {
        getCurrentDateFormat(): string {
            console.log(this.currentDate)
            console.log(new Date('2022-06-24'))
            return formatDate(this.currentDate)
        }
    }
})
</script>