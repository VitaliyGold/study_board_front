<template>
    <div @contextmenu="changeCoordsHint">
        <slot></slot>
        <Teleport to='#app'>
            <div class="hint-container" v-if='hintState' :style="coords" v-click-out="vOutObj">
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
            },
            vOutObj: {
                callback: this.closeHint,
                listExceptionsSelectors: [],
                customRootSelection: ''
            }
        }
    },
    methods: {
        closeHint() {
            this.hintState = false
        },
        openHint() {
            this.hintState = true
        },
        
        changeCoordsHint(e: any) : void {
            e.preventDefault();
            document.querySelector('#app')?.dispatchEvent(new CustomEvent('hideHint'))
            this.coords.left = e.clientX + 'px';
            this.coords.top = e.clientY + 'px';
            if (this.hintState) {
                this.closeHint()
            } else {
                this.openHint()
            }
        }
    },
    mounted() {
        document.querySelector('#app')?.addEventListener('hideHint', () => {
            this.hintState = false
        })
    }
})
</script>

