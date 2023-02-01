import {
    createSlice
} from "@reduxjs/toolkit"

const usersData = [{
        name: "Golden Corn",
        checked: false
    },

    {
        name: "Paneer",
        checked: false
    },

    {
        name: "Tomato",
        checked: false
    },

    {
        name: "Mushroom",
        checked: false
    },

    {
        name: "Onion",
        checked: false
    },

    {
        name: "Black Olives",
        checked: false
    }
]

// Initial state
const initialState = {
    employeesData: usersData
}

// Creating slice
const employeeSlice = createSlice({
    name: 'employees',
    initialState,
    reducers: {
        updateCheckBox: (state, action) => {
            state.employees = state.employeesData.map((ele, i) => {
                const {
                    checked
                } = ele;
                if (+i === action.payload) {
                    return {
                        ...ele,
                        checked: !checked
                    }
                } else {
                    return ele;
                }
            })
        }
    },
})

// exporting actions
export const {
    updateCheckBox
} = employeeSlice.actions

// exporting reducers
export default employeeSlice.reducer