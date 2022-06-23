<template>
    <div>
        <div class="full-time-table-control">
            <big-toggle :toggleValues='toggleValues' :width='400' 
                :toggleMode='toggleMode' 
                :changeToggle='changeToggle'
            />
        </div>
        <div class="full-time-table-container">
            <time-table v-for='(day, index) in getCurrentWeek' :key='index' :timeTableData='day'/>
        </div>
    </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import BigToggle from '@/components/BigToggle.vue';
import TimeTable from '@/components/MainPage/TimeTable.vue'
import TestData from '@/types/testData';
import { TimeTableWeek } from '@/types/timetable';
import { ToggleValuesType } from '@/types/components';
import { TypeOfWeek } from '@/types/timetable';
export default defineComponent({
    name: 'FullTimeTable',
    data() {
        return {
            toggleValues: [
                { name: 'Четная', type: 'even' },
                { name: 'Нечетная', type: 'odd' },
            ] as ToggleValuesType<TypeOfWeek>,
            toggleMode: 'even' as TypeOfWeek,
        }
    },
    components: {
        'big-toggle': BigToggle,
        'time-table': TimeTable
    },
    methods: {
        changeToggle(mode: TypeOfWeek): void {
            this.toggleMode = mode
        }
    },
    computed: {
        getCurrentWeek(): TimeTableWeek {
            return TestData[this.toggleMode]
        }
    }
})
</script>>