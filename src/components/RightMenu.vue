<template>
    <transition appear :duration="1000" name='first'>
      <div class="popup-container" @click.self="closeMenu" v-if="getStateRightMenu()">
        <transition appear name='fade'>
          <div class="right-menu open" v-if="showMenu">
              <div class="right-menu-container">
                <mini-profile-info :user="user"/>
                <list-menu-items/>
              </div>
          </div>
        </transition>
      </div>
    </transition>
</template>
<script lang="ts">
import { defineComponent } from 'vue';
import { ElementControlMapper } from '@/store/modules/elements';
import MiniProfileInfo from '@/components/MiniProfileInfo.vue';
import ListMenuItems from '@/components/ListMenuItems.vue'
export default defineComponent({
  name: 'right-menu',
  data() {
    return {
      showMenu: true,
      state: false
    }
  },
  props: {
    user: {
      type: Object || null,
      required: true
    },
  },
  components: {
    'mini-profile-info': MiniProfileInfo,
    'list-menu-items': ListMenuItems
  },
  methods: {
    ...ElementControlMapper.mapMutations(['changeStateRightMenu']),
    closeMenu(): void {
      this.showMenu = false
      setTimeout(() => {
        this.changeStateRightMenu(false)
        this.showMenu = true

      }, 0)
      
    },
  },
  computed: {
    ...ElementControlMapper.mapGetters(['getStateRightMenu'])
  },
})
</script>
