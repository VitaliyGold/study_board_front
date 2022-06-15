<template>
    <div class="user-avatar-container mini">
        <div v-if='srcImage' class="user-avatar mini">
            <img :srс='srcImage'>
        </div>
        <div v-else>
            <div class="user-initials mini">
                <div class="user-initials-container mini">
                    <p>{{ getUserInitials }}</p>
                </div>
            </div>
        </div>
    </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
export default defineComponent({
    name: 'MiniPhotoContainer',
    props: {
        srcImage: {
            type: String,
            required: false,
            default: ''
        },
        userName: {
            type: String,
            required: true,
            default: 'Тест Тест'
        }
    },
    computed: {
        getUserInitials():string {
            return this.userName.split(' ')[0][0].toUpperCase() + this.userName.split(' ')[1][0].toUpperCase()
        }
    }
})
</script>