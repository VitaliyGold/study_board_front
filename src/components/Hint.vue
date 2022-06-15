<template>
    <div @contextmenu="changeHintState">
        <slot></slot>
        <Teleport to='#app'>
            <div class="hint-container" v-if='hintState' :style="coords">
                <div class="hint-container__inner">
                    <p>Какой-то текст</p>
                </div>
            </div>
        </Teleport>
    </div>
</template>
<script lang='ts'>
import { defineComponent } from 'vue';
export default defineComponent({
    name: 'Hint',
    data() {
        return {
            hintState: false,
            coords: {
                left: '0',
                top: '0',
            }
        }
    },
    methods: {
        changeHintState(e: any) : void {
            e.preventDefault();
            document.querySelector('#app')?.dispatchEvent(new CustomEvent('hideHint'))
            this.coords.left = e.clientX + 'px';
            this.coords.top = e.clientY + 'px';
            this.hintState = !this.hintState
        }
    },
    mounted() {
        document.querySelector('#app')?.addEventListener('hideHint', () => {
            this.hintState = false
        })
    }
})
</script>

