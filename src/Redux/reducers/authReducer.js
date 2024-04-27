import { createSlice } from "@reduxjs/toolkit";
import {
    signInAction,
    registerStudentAction,
    registerTutorAction,
    contactFormAction,
    newsletterAction,
    createClassAction
} from "../actions/Auth";
const initialState = {
    // signingInStatus: "idle",
    // signingInSuccess: "",
    // signingInError: "",

    registerStatus: "idle",
    registerSuccess: "",
    registerError: "",
    adminData: null,
    student: null
};

const authenticationSlice = createSlice({
    name: "authentication",
    initialState,
    reducers: {
        clearLoginStatus(state) {
            state.signingInStatus = "idle";
            state.signingInSuccess = "";
            state.signingInError = "";
        },

        setStudent(state) {
            state.signingInStatus = "idle";
            state.signingInSuccess = "";
            state.signingInError = "";
        },

        clearSignUpStatus(state) {
            state.registerStatus = "idle";
            state.registerSuccess = "";
            state.registerError = "";
        },

        clearResetPasswordStatus(state) {
            state.resetSubAdminPasswordStatus = "idle";
            state.resetSubAdminPasswordSuccess = "";
            state.resetSubAdminPasswordError = "";
        },

        clearUserData(state) {
            state.adminData = null;
        },

        clearContactFormStatus(state) {
            state.contactFormActionStatus = 'idle';
            state.contactFormActionSuccess = '';
            state.contactFormActionError = '';
        },

        clearNewsletterAction(state) {
            state.newsletterActionStatus = 'idle';
            state.newsletterActionSuccess = '';
            state.newsletterActionError = '';
        },

        clearCreateClassStatus(state) {
            state.createClassActionStatus = 'idle';
            state.createClassActionSuccess = '';
            state.createClassActionError = '';
        }
    },

    extraReducers: (builder) => {
        // ======SIGNING STATUS ACTION=======//
        builder
            .addCase(signInAction.pending, (state) => {
                state.signingInStatus = "loading";
            })
            .addCase(signInAction.fulfilled, (state, { payload }) => {
                state.signingInStatus = "completed";
                // update redux state
                state.adminData = payload;
                console.log(payload, "gggggggg");
            })
            .addCase(signInAction.rejected, (state, { payload }) => {
                state.signingInStatus = "failed";
                // console.log(payload, "error message");
                state.signingInError = payload;
            });


        builder
            .addCase(registerStudentAction.pending, (state) => {
                state.registerStudentActionStatus = "loading";
            })
            .addCase(registerStudentAction.fulfilled, (state, { payload }) => {
                state.registerStudentActionStatus = "completed";
            })
            .addCase(registerStudentAction.rejected, (state, { payload }) => {
                state.registerStudentActionStatus = "failed";

                state.registerStudentActionError = payload;
            });

        builder
            .addCase(registerTutorAction.pending, (state) => {
                state.registerTutActionorStatus = "loading";
            })
            .addCase(registerTutorAction.fulfilled, (state, { payload }) => {
                state.registerTutorActionStatus = "completed";
            })
            .addCase(registerTutorAction.rejected, (state, { payload }) => {
                state.registerTutorActionStatus = "failed";

                state.registerTutorActionError = payload;
            });

        builder
            .addCase(contactFormAction.pending, (state) => {
                state.contactFormActionStatus = "loading";
            })
            .addCase(contactFormAction.fulfilled, (state, { payload }) => {
                state.contactFormActionStatus = "completed";
            })
            .addCase(contactFormAction.rejected, (state, { payload }) => {
                state.contactFormActionStatus = "failed";

                state.contactFormActionError = payload;
            });

        builder
            .addCase(newsletterAction.pending, (state) => {
                state.newsletterActionStatus = "loading";
            })
            .addCase(newsletterAction.fulfilled, (state, { payload }) => {
                state.newsletterActionStatus = "completed";
            })
            .addCase(newsletterAction.rejected, (state, { payload }) => {
                state.newsletterActionStatus = "failed";

                state.newsletterActionError = payload;
            });

        builder
            .addCase(createClassAction.pending, (state) => {
                state.createClassActionStatus = "loading";
            })
            .addCase(createClassAction.fulfilled, (state, { payload }) => {
                state.createClassActionStatus = "completed";
            })
            .addCase(createClassAction.rejected, (state, { payload }) => {
                state.createClassActionStatus = "failed";

                state.createClassActionError = payload;
            });
    },
});

export const {
    clearLoginStatus,
    clearSignUpStatus,
    clearContactFormStatus,
    clearNewsletterStatus,
    clearCreateClassStatus
    //   clearAdminLoginStatus,
    //   clearUserData,
    //   clearSocialSignUpStatus,
    //   clearRequestOtpStatus,
    //   clearConfirmChangeOfPasswordStatus,
    //   clearResetPasswordStatus,
} = authenticationSlice.actions;

export default authenticationSlice.reducer;