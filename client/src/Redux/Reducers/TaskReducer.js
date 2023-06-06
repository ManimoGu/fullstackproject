import { createSlice } from "@reduxjs/toolkit";
import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios"

export const getList = createAsyncThunk("Tasks/getList", async ()=>{

    return axios.get("http://localhost:9000/ListTasks")
    .then(res => {return res.data})
    .catch(err => console.log(err))

})

const TaskSlice = createSlice({
    name : "Tasks",
    initialState : {
        tasks : [],
        status : "",
        erreur : ""
    },
    reducers:{

    },
    extraReducers : (builder) =>{
        builder.addCase(getList.fulfilled, (state, action)=>{
        
            state.tasks = action.payload
            state.status = "Accepted"
        })
        .addCase(getList.rejected, (state, action)=>{
            state.status = "Rejected"
            state.erreur = action.payload
        })
        .addCase(getList.pending, (state)=>{
            state.status = "Pending"
        } )
    }
})

export default TaskSlice.reducer