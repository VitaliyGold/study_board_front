<template>
    <div class="time-table-single-container">
        <div class="table-controls">
            <control-panel :currentDate='getCurrentDate()'/>
        </div>
        <time-table :timeTableData='getTimeTableData'/>
    </div>
</template>
<script lang="ts">
import { defineComponent } from 'vue';
import TimeTable from '@/components/MainPage/TimeTable.vue';
import ControlPanel from '../TableContol/ControlPanel.vue';
import { TimeTableMapper } from '@/store/modules/timetable';
import { TimeTableDay } from '@/types/timetable';
import getTimeTableState from '@/components/MainPage/scripts/getTimeTableToday'
import TestData from '@/types/testData';
export default defineComponent({
    components: {
        'time-table': TimeTable,
        'control-panel': ControlPanel
    },
    data() {
        return {
            filterDate: new Date()
        }
    },
    computed: {
        ...TimeTableMapper.mapGetters(['getCurrentDate']),
        getTimeTableData(): TimeTableDay {
            return getTimeTableState(TestData, this.getCurrentDate())
        }
    }
})
</script>