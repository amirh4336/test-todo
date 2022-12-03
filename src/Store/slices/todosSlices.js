import { createSlice } from '@reduxjs/toolkit'


const todosSlice = createSlice({
    name : 'todos' ,
    initialState : {
        list : [] ,
        todo : {} ,
    },
    reducers : {
        addTodo : (state , action) => {
            state.list.push(action.payload)
        },
        deleteTodo : (state , action) => {
            state.list = state.list.filter(item => item.id !== action.payload)
        },
    }
})


export const {addTodo , deleteTodo} = todosSlice.actions;

export default todosSlice.reducer;