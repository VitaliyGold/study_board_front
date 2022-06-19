<template>
  <div class="container">
    <v-header :user='getUser()'/>
    <Teleport to='#app'>
      <right-menu :user='getUser()'/>
    </Teleport>
    <main class="main-layout">
      <router-view/>
    </main>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import '@/assets/styles/app.less';
import 'v-calendar/dist/style.css';
import vHeader from '@/components/v-header.vue'
import RightMenu from '@/components/RightMenu.vue'
import { UserInfoMapper } from '@/store/modules/userInfo'
import { ElementControlMapper } from '@/store/modules/elements';
export default defineComponent({
  components: {
    'v-header': vHeader,
    'right-menu': RightMenu
  },
  computed: {
    ...UserInfoMapper.mapGetters(['getUser']),
    ...ElementControlMapper.mapGetters(['getStateRightMenu'])
  }
})
</script>
