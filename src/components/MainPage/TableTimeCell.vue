<template>
  <div class="time-container" :class="currentLesson ? 'currentLesson': ''">
    <p>{{ getTimeFormat }}</p>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
  name: 'TableTimeCell',
  props: {
    time: {
      required: true,
      type: Object
    },
    currentLesson: {
      required: false,
      default: false,
      type: Boolean
    }
  },
  computed: {
    getTimeFormat():string {
      return `${this.time.start} - ${this.time.end}`
    }
  }
})
</script>
