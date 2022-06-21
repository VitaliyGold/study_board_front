<template>
  <header class="header">
    <div class="header-inner">
      <div class="user-panel" v-if="user">
        <div class="user-panel__item">
          <button class="btn white" @click="openRightMenu">Меню</button>
        </div>
        <div class="user-panel__item">
          <button class="btn white">Выход</button>
        </div>
      </div>
      <div class="login-panel" v-else>
        <button class="btn white" @click="toLoginPage">Войти</button>
      </div>
    </div>
  </header>
</template>

<script lang="ts">
import { defineComponent, PropType } from 'vue'
import { ElementControlMapper } from '@/store/modules/elements';
import { User } from '@/types/userInfo';

export default defineComponent({
  name: 'v-header',
  props: {
    user: {
      type: Object as PropType<User> | null,
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
    toLoginPage(): void {
      this.$router.push({ name: 'AuthPage' })
    }
  }
})
</script>
