import {createSlice} from '@reduxjs/toolkit';

const initialState = {
    users: []
};

export const usersSlice = createSlice({
    name: 'users',
    initialState,
    reducers: {
        addUser(state, action) {
            const newUser = {
                name: action.payload,
                id: Math.floor(Math.random() * 100) + 1
            }

            state.users.push(newUser)
        },

        removeUser(state, action) {
            state.users = state.users.filter(user => user.id !== action.payload)
        }
    }
});

export const {addUser, removeUser} = usersSlice.actions
export default usersSlice.reducer

