<template>
  <div class="container">
    <v-header :user='getUser()'/>
    <Teleport to='#app'>
      <right-menu :user='getUser()'/>
    </Teleport>
    <teleport-container/>
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
import RightMenu from '@/components/RightMenu/RightMenu.vue'
import TeleportContainers from './components/TeleportContainers.vue';
import { UserInfoMapper } from '@/store/modules/userInfo'
import { ElementControlMapper } from '@/store/modules/elements';
export default defineComponent({
  name: 'App',
  components: {
    'v-header': vHeader,
    'right-menu': RightMenu,
    'teleport-container': TeleportContainers
  },
  computed: {
    ...UserInfoMapper.mapGetters(['getUser']),
    ...ElementControlMapper.mapGetters(['getStateRightMenu'])
  }
})
</script>
