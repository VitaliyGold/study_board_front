import { DateTime } from 'ts-luxon';

export function incrementDate(currentDate: Date, incrementNumber: number): Date {
    return DateTime.fromJSDate(currentDate).plus({ days: incrementNumber }).toJSDate()

}

export function formatDate(currentDate: Date): string {
    return DateTime.fromJSDate(currentDate).setLocale('ru').toLocaleString({ month: 'long', day: 'numeric' })
}