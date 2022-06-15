<template>
  <header class="header">
    <div class="header-inner">
      <div class="user-panel">
        <div class="user-panel__item">
          <button class="btn white" @click="openRightMenu">Настройки</button>
        </div>
        <div class="user-panel__item">
          <button class="btn white">Выход</button>
        </div>
      </div>
    </div>
  </header>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import { ElementControlMapper } from '@/store/modules/elements';

export default defineComponent({
  name: 'v-header',
  props: {
    user: {
      type: Object,
      required: true
    }
  },
  data() {
    return {
      openTeleport: false
    }
  },
  methods: {
    ...ElementControlMapper.mapMutations(['changeStateRightMenu']),
    openRightMenu() {
      this.changeStateRightMenu(true);
    },
  }
})
</script>
