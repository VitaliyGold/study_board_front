<template>
    <div class="time-table-single-container">
        <div class="table-controls">
            <control-panel/>
        </div>
        <time-table/>
    </div>
</template>
<script lang="ts">
import { defineComponent } from 'vue';
import TimeTable from '@/components/MainPage/TimeTable.vue';
import ControlPanel from '../TableContol/ControlPanel.vue';
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
        getDateForTimeTable(): string {
            return '1234'
        }
    }
})
</script>