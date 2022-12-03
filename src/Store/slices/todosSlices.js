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
        toggleTodo : (state , action) => {
            state.list = state.list.map(item => {
                if (item.id === action.payload.id) {
                    item.done = !item.done
                }
                return item
            })

        },
    }
})


export const {addTodo , deleteTodo , toggleTodo} = todosSlice.actions;

export default todosSlice.reducer;