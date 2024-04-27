import { createSlice } from '@reduxjs/toolkit';
import { getTutorProfileAction, findTutorsAction, createClassAction, updateClassAction /* Import other actions */ } from '../actions/tutorActions';

const initialState = {
    tutorProfile: null,
    tutorProfileStatus: 'idle',
    tutorProfileError: null,
    tutors: [],
    tutorsStatus: 'idle',
    tutorsError: null,
    createClassStatus: 'idle',
    createClassError: null,
    updateClassStatus: 'idle',
    updateClassError: null,
    // Add other relevant initial state properties here...
};

const tutorSlice = createSlice({
    name: 'tutor',
    initialState,
    reducers: {
        // Define any additional reducers here if needed
    },
    extraReducers: (builder) => {
        builder
            .addCase(getTutorProfileAction.pending, (state) => {
                state.tutorProfileStatus = 'loading';
            })
            .addCase(getTutorProfileAction.fulfilled, (state, action) => {
                state.tutorProfileStatus = 'succeeded';
                state.tutorProfile = action.payload;
            })
            .addCase(getTutorProfileAction.rejected, (state, action) => {
                state.tutorProfileStatus = 'failed';
                state.tutorProfileError = action.payload;
            })
            // Add cases for other actions similarly...
            .addCase(createClassAction.pending, (state) => {
                state.createClassStatus = 'loading';
            })
            .addCase(createClassAction.fulfilled, (state) => {
                state.createClassStatus = 'succeeded';
            })
            .addCase(createClassAction.rejected, (state, action) => {
                state.createClassStatus = 'failed';
                state.createClassError = action.payload;
            });
        // Add cases for other actions similarly...
    },
});

export default tutorSlice.reducer;