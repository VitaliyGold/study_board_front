<template>
  <div class='timetable-container'>
    <div class='times-container'>
        <time-table-cell v-for='(time, index) of timeData' :key='index' :time='time' 
            :currentLesson='timeTableData[index].currentLesson'
        />
    </div>
    <div class='lessons-container'>
        <table-lesson v-for='(lesson, index) of timeTableData' 
            :key='index'
            :lessonInfo='lesson'
        />
    </div>
  </div>
</template>

<script lang='ts'>
import { defineComponent, PropType } from 'vue'
import TableTimeCell from '@/components/MainPage/TableTimeCell.vue';
import TableLesson from '@/components/MainPage/TableLesson.vue';
import { TimeTableDay } from '@/types/timetable';


export default defineComponent({
  name: 'TimeTable',
  data() {
      return {
          timeData: [
              {
                  start: '9:00',
                  end: '10:30'
              },
              {
                  start: '10:40',
                  end: '12:10'
              },
              {
                  start: '12:30',
                  end: '14:00'
              },
              {
                  start: '14:10',
                  end: '15:40'
              },
              {
                  start: '15:50',
                  end: '17:20'
              },
              {
                  start: '17:30',
                  end: '19:00'
              },
              {
                  start: '19:10',
                  end: '20:40'
              },
              
          ]
      }
  },
  props: {
    timeTableData: {
        type: Object as PropType<TimeTableDay>,
        required: true
    }
  },
  components: {
      'time-table-cell': TableTimeCell,
      'table-lesson': TableLesson
  },
})
</script>
