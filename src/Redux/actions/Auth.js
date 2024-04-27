import { createAsyncThunk } from "@reduxjs/toolkit";
import axiosClient from "../../api/axios";
import { setToken } from "../storage";

const SIGN_IN = "authentication:SIGN_IN";
const SIGN_UP_AS_STUDENT = "authentication:SIGN_UP_AS_STUDENT";
const SIGN_UP_AS_TUTOR = "authentication:SIGN_UP_AS_TUTOR";
const CONTACT_FORM = "authentication:CONTACT_FORM"
const NEWSLETTER = "authentication:NEWSLETTER"
const CREATE_CLASS = "authentication:CREATE_CLASS"


export const signInAction = createAsyncThunk(
    SIGN_IN,
    async(args, { rejectWithValue }) => {
        try {
            const response = await axiosClient().post("users/login/", args);

            console.log(response.data, "User found!");
            setToken(response.data.token_key); // Set token upon successful sign-in
            return response.data;
        } catch (error) {
            console.log(error, "error");
            return rejectWithValue(error.response.data.detail);
        }
    }
);


// Register as Student
export const registerStudentAction = createAsyncThunk(
    SIGN_UP_AS_STUDENT,
    async(args, { rejectWithValue }) => {
        try {
            const response = await axiosClient().post("users/register/student/", args);

            console.log(response.data, "kkkkk");
            setToken(response.data.token_key); // Set token upon successful sign-up
            return response.data;
        } catch (error) {
            console.log(error, "error");
            return rejectWithValue(error.response.data.email);
        }
    }
);



// 


//Register as Tutor

export const registerTutorAction = createAsyncThunk(
    SIGN_UP_AS_TUTOR,
    async(args, { rejectWithValue }) => {
        try {
            const response = await axiosClient().post("users/register/tutor/", args);

            console.log(response.data, "kkkkk");
            setToken(response.data.token_key); // Set token upon successful sign-up
            return response.data;
        } catch (error) {
            console.log(error, "error");
            return rejectWithValue(error.response.data.email);
        }
    }
);

// Contact form

export const contactFormAction = createAsyncThunk(
    CONTACT_FORM,
    async(args, { rejectWithValue }) => {
        try {
            const response = await axiosClient().post("users/contact/", args);

            console.log(response.data, "kkkkk");
            setToken(response.data.token_key); // Set token upon successful sign-up
            return response.data;
        } catch (error) {
            console.log(error, "error");
            return rejectWithValue(error.response.data);
        }
    }
);

//Newsletters
export const newsletterAction = createAsyncThunk(
    NEWSLETTER,
    async(args, { rejectWithValue }) => {
        try {
            const response = await axiosClient().post("newsletter/subscribe/", args);

            console.log(response.data, "kkkkk");
            setToken(response.data.token_key); // Set token upon successful sign-up
            return response.data;
        } catch (error) {
            console.log(error, "error");
            return rejectWithValue(error.response.data.email);
        }
    }
);

//Create classes
export const createClassAction = createAsyncThunk(
    CREATE_CLASS,
    async(args, { rejectWithValue }) => {
        try {
            const response = await axiosClient().post("classes/", args);

            console.log(response.data, "kkkkk");
            setToken(response.data.token_key); // Set token upon successful sign-up
            return response.data;
        } catch (error) {
            console.log(error, "error");
            return rejectWithValue(error.response.data.email);
        }
    }
);