import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { DayPlannerState } from '../types';

const initialState: DayPlannerState = {
    possibleActivities: [],
    chosenActivites: []
};

const dayPlannerSlice = createSlice({
    name: 'dayPlanner',
    initialState,
    reducers: {
        addActivity(state, action: PayloadAction<string>) {
            if (!state.possibleActivities.includes(action.payload)) {
                state.possibleActivities.push(action.payload)
            }
        },
        removeActivity(state, action: PayloadAction<string>) {
            state.possibleActivities.filter(e => e === action.payload)
        },
    },
});

export const { addActivity, removeActivity } = dayPlannerSlice.actions;

export default dayPlannerSlice.reducer;
