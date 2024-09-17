import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { ActivityStatus, DayPlannerState } from '../types';

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
            state.possibleActivities = state.possibleActivities.filter(e => e !== action.payload)
        },
        choseActivities(state, action: PayloadAction<ActivityStatus[]>) {
            state.chosenActivites = action.payload
        },
        toggleCompleted(state, action: PayloadAction<string>) {
            const activity = state.chosenActivites.find(act => act.name === action.payload);
            if (activity) {
              activity.completed = !activity.completed;
            }
          },
        resetAllActivities: () => initialState
    },
});

export const { addActivity, removeActivity, choseActivities, toggleCompleted, resetAllActivities } = dayPlannerSlice.actions;

export default dayPlannerSlice.reducer;
