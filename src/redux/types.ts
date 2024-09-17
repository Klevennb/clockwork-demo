export type ActivityStatus = {
    name: string
    completed: boolean
}

export type DayPlannerState = {
    possibleActivities: string[]
    chosenActivites: ActivityStatus[]
}