<template>
    <div>
        <main-message/>
    </div>
</template>
<script lang="ts">
import { defineComponent } from 'vue';
import MainMessage from './MainMessage.vue';
export default defineComponent({
    name: 'TeleportContainer',
    components: {
        'main-message': MainMessage
    }
})
</script>