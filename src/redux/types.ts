export type ActivityStatus = {
    name: string
    completed: boolean
}

export type DayPlannerState = {
    possibleActivities: string[]
    chosenActivites: ActivityStatus[]
}

export type Writing = {
    title: string
    prompt: string
    editorContents: string
}

export type WritingAssistantState = {
    writings: Writing[]
}