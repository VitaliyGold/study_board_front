import { TimeTableDay, TimeTableAll, TypeOfWeek } from '@/types/timetable';
import { DateTime } from 'ts-luxon';


function getNumberOfWeek(currentDate: Date): number {
    const numberWeek = DateTime.fromJSDate(currentDate).weekNumber
    return numberWeek % 2
    // знаменатель - четная неделя
    // знаменатель - 0, числитель - 1
}

export default function getTimeTableState(lessonsData: TimeTableAll, currentDate: Date) : TimeTableDay {
    const typeOfWeek: TypeOfWeek = getNumberOfWeek(currentDate) ? 'odd' : 'even';
    const currentDayOfWeek = DateTime.fromJSDate(currentDate).weekday - 1
    return lessonsData[typeOfWeek][currentDayOfWeek]
}