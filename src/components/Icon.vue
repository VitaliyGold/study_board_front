<template>
    <div class="svg-container">
        <svg v-if="name ==='arrow'" version="1.1" id="Capa_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px"
            width="124.138px" height="124.138px" viewBox="0 0 124.138 124.138" xml:space="preserve"><g><path d="M50.569,124.138h23.1c4.7,0,9-3.8,9-8.601V81.138c0-4.7,3.5-9,8.2-9h14.699c7.2,0,11.2-8.101,6.801-13.8l-44.101-55c-3.5-4.5-10.2-4.4-13.6,0l-42.9,55c-4.4,5.699-0.4,13.8,6.8,13.8h14.8c4.7,0,8.3,4.2,8.3,9v34.399C41.669,120.338,45.769,124.138,50.569,124.138z"/></g>
        </svg>
        <svg v-if="name ==='warning'" version="1.1" id="Capa_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px"
            viewBox="0 0 488.451 488.451" style="enable-background:new 0 0 488.451 488.451;" xml:space="preserve">
        <g><path d="M484.125,412.013l-212.2-367.6c-12.3-21.3-43.1-21.3-55.4,0l-212.2,367.6c-12.3,21.3,3.1,48,27.7,48h424.4
            C481.025,460.013,496.425,433.313,484.125,412.013z M244.525,157.613c13.6,0,24.6,11.3,24.2,24.9l-4,139.6
            c-0.3,11-9.3,19.7-20.3,19.7s-20-8.8-20.3-19.7l-3.9-139.6C219.925,168.913,230.825,157.613,244.525,157.613z M244.225,410.113
            c-13.9,0-25.2-11.3-25.2-25.2c0-13.9,11.3-25.2,25.2-25.2s25.2,11.3,25.2,25.2S258.125,410.113,244.225,410.113z"/></g>
        </svg>
        <svg v-if="name ==='close'" viewBox="0 0 12 11" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M11.25 1.3075L10.1925 0.25L6 4.4425L1.8075 0.25L0.75 1.3075L4.9425 5.5L0.75 9.6925L1.8075 10.75L6 6.5575L10.1925 10.75L11.25 9.6925L7.0575 5.5L11.25 1.3075Z" fill="#323232"/>
        </svg>
    </div>
</template>
<script lang="ts">
import { defineComponent} from 'vue'
export default defineComponent({
    name: 'Icon',
    props: {
        name: {
            required: false,
            default: 'arrow',
            type: String
        }
    }
})
</script>

<style lang="less">
.svg-container {
    width: 100%;
    height: 100%;
}
</style>