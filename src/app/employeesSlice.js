import { createSlice } from "@reduxjs/toolkit"

const employeesSlice = createSlice ({
    name: "employees",
    initialState: {
        employeesList: []
    },
    reducers: {
        addNewEmployee: (state, action) => {
            state.employeesList.push(action.payload)
        }
    }
})

export const { addNewEmployee } = employeesSlice.actions

export default employeesSlice.reducer

export const selectEmployeesList = state => state.employees.employeesList
