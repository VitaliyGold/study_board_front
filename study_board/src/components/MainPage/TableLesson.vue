<template>
  <div class="lesson-container" :class="lessonInfo.currentLesson ? 'currentLesson': ''">
      <div class="lesson-cell subject-name">
          <p>{{ lessonInfo.subjectName }}</p>
      </div>
      <div class="lesson-cell subject-type">
          <p>{{ lessonInfo.subjectType }}</p>
      </div>
      <div class="lesson-cell teacher-name">
          <hint-component>
            <p>{{ lessonInfo.teacherName }}</p>
          </hint-component>
      </div>
      <div class="lesson-cell room-number">
          <p>{{ lessonInfo.roomLesson }}</p>
      </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import Hint from '@/components/Hint.vue'

export default defineComponent({
  name: 'TableLesson',
  components: {
      'hint-component': Hint
  },
  props: {
      lessonInfo: {
          type: Object,
          required: true
      }
  }
})
</script>
