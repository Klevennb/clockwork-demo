import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import {  Writing, WritingAssistantState } from '../types';

const initialState: WritingAssistantState = {
    writings: [],
};

const writingAssistantSlice = createSlice({
    name: 'writingAssistant',
    initialState,
    reducers: {
        addWriting(state, action: PayloadAction<Writing>) {
                state.writings.push(action.payload)
        },

    },
});

export const { addWriting } = writingAssistantSlice.actions;

export default writingAssistantSlice.reducer;
