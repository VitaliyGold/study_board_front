<template>
    <div class="contol-panel-timetable">
        <div class="contol-panel-timetable__title">
            <h2>Расписание</h2>
        </div>
        <div class="contol-panel-timetable__control">
            <p>
                Изменить день
            </p>
            <div class="btns-container">
                <btn-with-icon iconName='arrow' 
                            svgClass='rotate270 gray' 
                            btnClass='btn transparent only-icon' 
                            @leftClickHandler='changeDate(-1)'
                />
                <button class="btn">Сегодня</button>
                <btn-with-icon iconName='arrow' 
                            svgClass='rotate90  gray' 
                            btnClass='btn transparent only-icon' 
                            @leftClickHandler='changeDate(1)'
                />
            </div>
            <div class="btns-container">
                    <button class="btn">Выбрать день в календаре</button>
                </div>
        </div>
    </div>    
</template>
<script lang="ts">
import { defineComponent } from 'vue'
import BtnWithIcon from '@/components/Buttons/BtnWithIcon.vue'
export default defineComponent({
    name: 'ControlPanel',
    components: {
        'btn-with-icon': BtnWithIcon
    },
    methods: {
        changeDate(direction: number):void {
            console.log(direction)
        }
    },
    computed: {
        
    }
})
</script>