import {
    createSlice,
    createAsyncThunk
} from "@reduxjs/toolkit"
import axios from "axios"

// Initial state
const initialState = {
    employeesData: [],
    isBoolean: false,
    errorMessage: null,
}

// Create thunk
export const fetchEmployeesByUrl = createAsyncThunk(
    'users/fetchEmployees',
    // API call
    async () => {
        const baseUrl = 'https://jsonplaceholder.typicode.com/todos'
        const response = await axios.get(baseUrl)
        return response.data
    }
)

// Creating slice
const employeeSlice = createSlice({
    name: 'employees',
    initialState,
    reducers: {
        updateCheckBox: (state, action) => {
            state.employees = state.employeesData.map((ele) => {
                const {
                    id,
                    completed
                } = ele;
                if (id === action.payload) {
                    return {
                        ...ele,
                        completed: !completed
                    }
                }
            })
        }
    },
    extraReducers: (builder) => {
        builder
            .addCase(fetchEmployeesByUrl.pending, (state) => {
                state.isBoolean = true
            })
            .addCase(fetchEmployeesByUrl.fulfilled, (state, action) => {
                state.isBoolean = false
                state.employeesData = action.payload
            })
            .addCase(fetchEmployeesByUrl.rejected, (state) => {
                state.isBoolean = false
                state.errorMessage = 'network-issue'
            })
    }
})

// exporting actions
export const {
    updateCheckBox
} = employeeSlice.actions

// exporting reducers
export default employeeSlice.reducer