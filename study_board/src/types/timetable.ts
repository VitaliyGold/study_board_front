type TimeTableLesson = {
    subjectName: string,
    teacherName: string,
    subjectType: string,
    roomLesson: string,
    currentLesson: boolean
}

type TimeTableDay = Array<TimeTableLesson>

type TimeTableWeek = Array<TimeTableDay>

type TimeTableAll = {
    'odd': TimeTableWeek,
    'even': TimeTableWeek
}

type TypeOfWeek = 'odd' | 'even'

export {
    TimeTableLesson,
    TimeTableDay,
    TimeTableWeek,
    TimeTableAll,
    TypeOfWeek
}