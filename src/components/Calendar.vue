<template>
    <div class="calendar-container">
        <v-date-picker v-model="getCopyDate"/>
    </div>
</template>
<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
    props: {
        currentDate: {
            type: Date,
            required: false
        }
    },
    data() {
        return {
            date: null
        }
    },
    computed: {
        getCopyDate: {
            get(): any {
                if (this.currentDate) {
                    return new Date(this.currentDate)
                }
                return new Date()
                
            },
            set(value: any) {
                this.$emit('changeDate', value)
            }
        }
    }
})
</script>