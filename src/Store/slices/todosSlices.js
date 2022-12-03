import { createSlice } from '@reduxjs/toolkit'


const todosSlice = createSlice({
    name : 'todos' ,
    initialState : {
        list : [] ,
        todo : {} ,
        listUndone : []
    },
    reducers : {
        addTodo : (state , action) => {
            state.list.push(action.payload)
            state.listUndone = state.list.filter(item => item.done !== true)
        },
        deleteTodo : (state , action) => {
            state.list = state.list.filter(item => item.id !== action.payload)
            state.listUndone = state.list.filter(item => item.done !== true)
        },
        toggleTodo : (state , action) => {
            state.list = state.list.map(item => {
                if (item.id === action.payload.id) {
                    item.done = !item.done
                }
                return item
            })
            state.listUndone = state.list.filter(item => item.done !== true)
        },
    }
})


export const {addTodo , deleteTodo , toggleTodo} = todosSlice.actions;

export default todosSlice.reducer;