import {
    createSlice,
    createAsyncThunk
} from "@reduxjs/toolkit"
import axios from "axios"

// Initial state
const initialState = {
    usersData: [],
    isBoolean: false,
    errorMessage: null
}

// Create thunk
export const fetchUsersByUrl = createAsyncThunk(
    'users/fetchUsers',
    // API call
    async () => {
        const baseUrl = 'https://jsonplaceholder.typicode.com/users'
        const response = await axios.get(baseUrl)
        return response.data
    }
)

// creating slice 
const usersSlice = createSlice({
    name: 'users',
    initialState,
    extraReducers: (builder) => {
        builder
            .addCase(fetchUsersByUrl.pending, (state) => {
                state.isBoolean = true;
            })
            .addCase(fetchUsersByUrl.fulfilled, (state, action) => {
                state.isBoolean = false;
                state.usersData = action.payload;
            })
            .addCase(fetchUsersByUrl.rejected, (state) => {
                state.isBoolean = false;
                state.errorMessage = 'network-issue';
            })
    }
})

export default usersSlice.reducer;