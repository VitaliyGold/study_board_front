<template>
    <button :class="btnClass" @click="leftClickEvent">
        <div class="btn-img-container" :class="svgClass">
            <btn-icon :iconName='iconName'/>
        </div>
        <div v-if="btnText">
            <p>{{ btnText }}</p>
        </div>
    </button>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import BtnIcon from '@/components/Buttons/components/BtnIcon.vue'
export default defineComponent({
    name: 'BtnWithIcon',
    components: {
        'btn-icon': BtnIcon
    },
    props: {
        iconName: {
            type: String,
            required: true,
            default: 'arrow'
        },
        svgClass: {
            type: String,
            required: false,
            default: ''
        },
        btnClass: {
            type: String,
            required: true,
            default: 'btn'
        },
        btnText: {
            type: String,
            required: false,
            default: ''
        },
    },
    methods: {
        leftClickEvent():void {
            this.$emit('leftClickHandler')
        }
    }
})
</script>