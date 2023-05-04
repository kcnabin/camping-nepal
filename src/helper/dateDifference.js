import { differenceInCalendarDays } from "date-fns"

export const dateDifference = (endDate, startDate) => {
   return differenceInCalendarDays(new Date(endDate), new Date(startDate))
}