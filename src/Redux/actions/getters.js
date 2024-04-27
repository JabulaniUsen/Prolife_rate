import { createAsyncThunk } from "@reduxjs/toolkit";
import axiosClient from "../../api/axios";
import { setToken } from "../storage";
// '; // Import your Axios instance configured for making API requests

// Define async thunk for getting tutor profile
export const getTutorProfile = createAsyncThunk(
    'tutor/getTutorProfile',
    async(_, { rejectWithValue }) => {
        try {
            const response = await axiosClient.get('tutor/get-tutor-profile/');
            return response.data;
        } catch (error) {
            return rejectWithValue(error.response.data);
        }
    }
);

// Define async thunk for finding tutors
export const findTutors = createAsyncThunk(
    'tutor/findTutors',
    async(_, { rejectWithValue }) => {
        try {
            const response = await axiosClient.get('tutor/find-tutors/');
            return response.data;
        } catch (error) {
            return rejectWithValue(error.response.data);
        }
    }
);

// Define async thunk for creating a class
export const createClass = createAsyncThunk(
    'tutor/createClass',
    async(classData, { rejectWithValue }) => {
        try {
            const response = await axiosClient.post('/create-class/', classData);
            return response.data;
        } catch (error) {
            return rejectWithValue(error.response.data);
        }
    }
);

// Define async thunk for updating a class
export const updateClass = createAsyncThunk(
    'tutor/updateClass',
    async({ id, classData }, { rejectWithValue }) => {
        try {
            const response = await axiosClient.put(`/update-class/${id}/`, classData);
            return response.data;
        } catch (error) {
            return rejectWithValue(error.response.data);
        }
    }
);

// Define other async thunks for the remaining API endpoints similarly...

// Export all async thunks
// export { getTutorProfileAction, findTutorsAction, createClassAction, updateClassAction /* Add other actions here */ };