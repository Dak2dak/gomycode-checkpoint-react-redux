import { createSlice } from "@reduxjs/toolkit";
import { uuid } from "uuidv4";

const TaskSlice = createSlice({

    name: 'tasks',
    initialState: [
        {id: 1, description: "JavaScript class", isDone: false},
        {id: 2, description: "Python class", isDone: false},
        {id: 3, description: "C++ class", isDone: false},
        {id: 4, description: "Java class", isDone: false},
        {id: 5, description: "Fortran class", isDone: false}
    ],
    reducers : {
        addtask: (state, action) => {
                const newTask = {
                    id: uuid(),
                    title: action.payload.description,
                    isDone: false
                }
                state.push(newTask);
        },
        toggleDone : (state, action) => {
            const index = state.findIndex(
                (task) =>task.id === action.payload.id
            );
            state[index].isDone = action.payload.isDone;
        }
    },
});

export const {addtask, toggleDone} = TaskSlice.actions;

export default TaskSlice.reducer;