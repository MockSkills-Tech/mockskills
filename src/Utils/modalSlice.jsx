import { createSlice } from '@reduxjs/toolkit';

const modalSlice = createSlice({
    name: 'modal',
    initialState: {
        isOpen: false,
        isLoginForm: true, // true = Login, false = Signup
        previousPath: "/",
    },
    reducers: {
        openLoginModal: (state,action) => {
            state.isOpen = true;
            state.isLoginForm = true;
            state.previousPath = action.payload;
        },
        openSignupModal: (state,action) => {
            state.isOpen = true;
            state.isLoginForm = false;
            state.previousPath = action.payload;
        },
        closeModal: (state) => {
            state.isOpen = false;
        },
        toggleForm: (state, action) => {
            state.isLoginForm = action.payload;
        },
    },
});

export const { openLoginModal, openSignupModal, closeModal, toggleForm } = modalSlice.actions;

export default modalSlice.reducer;
