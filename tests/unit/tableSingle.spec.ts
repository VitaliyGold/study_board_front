import { mount } from '@vue/test-utils'
import ControlPanel from '@/components/TableContol/ControlPanel.vue';


describe('TimeTableSingle', () => {
    it('correct data format in timetable', async () => {

        const listDates = [
            {dateString: '2022-06-24', dateFormatValue: '24 июня'}, 
            {dateString: '2022-06-26', dateFormatValue: '26 июня'},
            {dateString: '2022-01-26', dateFormatValue: '26 января'},
            {dateString: '2021-01-25', dateFormatValue: '25 января'},
            {dateString: '2022-06-01', dateFormatValue: '1 июня'}
        ]
        listDates.forEach(date => {
            const controlPanel = mount(ControlPanel, {
                propsData: {
                    currentDate: new Date(date.dateString)
                }
            })
            const currentDateWrapper = controlPanel.find('.btns-container button[test-data="date-format-container"]')
            expect(currentDateWrapper.text()).toBe(date.dateFormatValue)
        })
        
    })
    it('')
    /*
    it('click for date-field btn', async () => {
        const controlPanel = mount(ControlPanel, {
            propsData: {
                currentDate: new Date('2022-06-01')
            }
        })
        const currentDateBtn = controlPanel.find('.btns-container button[test-data="date-format-container"]')
        await currentDateBtn.trigger('click')
        expect(currentDateBtn.text()).toBe('1 июня')
    })
    */
})