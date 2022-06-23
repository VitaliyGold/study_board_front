<template>
    <div class="big-toggle" :style="{ width: width + 'px' }">
        <div class="toggle-element" v-for="item in toggleValues" 
            :key="item.type"
            :style="{ width: getWidthElement + 'px' }"
            :class="item.type === toggleMode ? 'active': ''"
            @click="changeModeToggle(item.type)"
        >
            <span>{{ item.name }}</span>
        </div>
    </div>
</template>

<script lang="ts">
import { defineComponent, PropType } from 'vue'
import { ToggleValuesType, CallbackChangeToggle } from '@/types/components';
import { TypeOfWeek } from '@/types/timetable';

export default defineComponent({
    name: 'BigToggle',
    props: {
        toggleValues: {
            required: true,
            type: Object as PropType<ToggleValuesType<TypeOfWeek>>
        },
        width: {
            type: Number,
            required: true
        },
        toggleMode: {
            type: String,
            required: true
        },
        changeToggle: {
            type: Function as PropType<CallbackChangeToggle<TypeOfWeek>>,
            required: true
        },
    },
    methods: {
        changeModeToggle(mode: any): void {
            this.changeToggle(mode)
        }
    },
    computed: {
        getWidthElement():number {
            return this.width/this.toggleValues.length
        }
    }
})
</script>