import employeeSlice from './features/employeeSlice'
import counterSlice from './features/counterSlice'
import usersSlice from './features/usersSlice'

// rootReducer - to combine all reducers
export const rootReducer = {
    employees:employeeSlice,
    counter: counterSlice,
    users : usersSlice
}