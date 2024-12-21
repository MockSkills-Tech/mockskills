import { createSlice } from "@reduxjs/toolkit";

const userSlice = createSlice({
    name: 'user',
    initialState: null,
    reducers: {
        addUser: (state, actions) => {
            localStorage.setItem('user', JSON.stringify(actions.payload));
            return actions.payload;
        },
        removeUser: () => {
            localStorage.removeItem('user');
            return null;
        }
    }
});
export const { addUser, removeUser } = userSlice.actions;
export default userSlice.reducer;