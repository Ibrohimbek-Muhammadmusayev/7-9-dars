import { createSlice } from "@reduxjs/toolkit";

const todoSlice = createSlice({
    initialState: {
        list: [],
        text: 'hello',
    },
    name: "todo",
    reducers: {
        addTodo: (state, action)=> {
           state.list = [action.payload];
           console.log(state.list);
        },
        deleteTodo: ()=> {},
        editTodo: ()=> {},
    }
})

export const {
    addTodo,
    deleteTodo,
    editTodo,
} = todoSlice.actions;

export default todoSlice.reducer;
