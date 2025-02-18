import { configureStore } from "@reduxjs/toolkit"
import employeesSlice from "./employeesSlice"


const store = configureStore({
    reducer: {
            employees: employeesSlice,
        }
    }
)

export default store