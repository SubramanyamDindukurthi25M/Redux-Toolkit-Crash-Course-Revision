import {
    createSlice
} from "@reduxjs/toolkit"

// Initial state
const initialState = {
    count: 0
}

// creating slice
const counterSlice = createSlice({
    name: 'counter',
    initialState,
    reducers: {
        increment: (state) => {
            state.count += 1;
        },
        decrement: (state) => {
            state.count -= 1;
        },
        incrementBy5: (state, action) => {
            state.count += action.payload;
        }
    }
})

// exporting actions
export const {
    increment,
    decrement,
    incrementBy5
} = counterSlice.actions;

// exporting reducers
export default counterSlice.reducer;