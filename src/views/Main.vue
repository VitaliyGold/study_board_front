<template>
  <div class="main-layout">
    <div>стартовая страница</div>
    <div>
      <time-table-single/>
    </div>
    <time-table/>
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
