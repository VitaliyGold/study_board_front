<template>
  <div class="main-layout">
    <p>Уведомление о предстоящем отчислении</p>
    <div class="mg-top40 main-page-shadow-elem">
      <time-table-single/>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import TimeTableSingle from '@/components/MainPage/TimeTableSingle.vue';

export default defineComponent({
  name: 'Main',
  components: {
    'time-table-single': TimeTableSingle
  }
  
})
</script>
