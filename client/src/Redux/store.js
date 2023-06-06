import {configureStore} from "@reduxjs/toolkit"
import TaskReducer from "./Reducers/TaskReducer"


const Store = configureStore({
    reducer : {

        ListTasks : TaskReducer

    }
})

export default Store