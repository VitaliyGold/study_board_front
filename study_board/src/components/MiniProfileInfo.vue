<template>
    <div class="mini-profile-info">
        <mini-photo-container :userName='user.name'/>
        <div class="user-info mini">
            <p class="user-info-item mini">
                {{ user.name }}
            </p>
            <p class="user-info-item mini">
                {{ user.login }}
            </p>
            <p class="user-info-item mini">
                {{ user.group }}
            </p>
            <p class="user-info-item mini">
                {{ user.studyDirections }}
            </p>
        </div>
    </div>
</template>
<script lang="ts">
import { defineComponent } from 'vue';
import MiniPhotoContainer from '@/components/MiniPhotoContainer.vue'
export default defineComponent({
    props: {
        user: {
            type: Object,
            required: true
        }
    },
    name: 'MiniProfileInfo',
    components: {
        'mini-photo-container': MiniPhotoContainer
    }
})
</script>