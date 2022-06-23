<template>
    <div v-if="getVisibleMainMessage()">
        <Teleport :to="getMainMessageConfig()?.toWrapperSelector">
            <div class="main-message_container" v-if="getVisibleMainMessage()">
                <div class="main-message">
                    <div class="img-container">
                        <icon :name='getMainMessageConfig()?.type'/>
                    </div>
                    <div class="content-container">
                        <p>{{ getMainMessageConfig()?.messageText }}</p>
                    </div>
                    <div class="close-btn-container" @click="closeModal">
                        <icon name='close'/>
                    </div>
                </div>
            </div>
        </Teleport>
    </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import { MainMessageMapper } from '@/store/modules/mainMessage';
import Icon from '@/components/Icon.vue'

export default defineComponent({
    name: 'MainMessage',
    components: {
        'icon': Icon
    },
    computed: {
        ...MainMessageMapper.mapGetters(['getVisibleMainMessage', 'getMainMessageConfig'])
    },
    methods: {
        ...MainMessageMapper.mapMutations(['closeMainMessage']),
        closeModal():void {
            this.closeMainMessage()
        }
    }

})
</script>
