<template>
    <div class="select">
        <div class="select-header" :class="selectValues.length ? '' : 'select-disabled'">
            <input type="text" 
                :placeholder="'День недели'" 
                v-model="selectCurrentValue.value" 
                :disabled="disabledFilter"
                @click="openSelect"
            >
        </div>
        <Teleport to="#app">
            <transition name="select">
                <div class="select-body" v-if="stateSelect">
                    <div class="select-item" v-for="(item, index) of selectValues" :key="index">
                        <p>{{ item.value }}</p>
                    </div>
                </div>
            </transition>
        </Teleport>
    </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
export default defineComponent({
    props: {
        selectValues: {
            type: Array,
            default: [],
            required: false
        },
        selectCurrentValue: {
            type: Object,
            default: ''
        },
        disabledFilter: {
            type: Boolean,
            default: true
        }
    },
    data() {
        return {
            stateSelect: false
        }
    },
    methods: {
        openSelect() {
            this.stateSelect = !this.stateSelect
        }
    }
})

</script>