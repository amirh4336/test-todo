import { createSlice } from '@reduxjs/toolkit'


const todosSlice = createSlice({
    name : 'todos' ,
    initialState : {
        list : [] ,
        todo : {} ,
        listUndone : [],
        CheckUndone : false
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
        navigateList : (state , action) => {
            state.CheckUndone = action.payload === 'all' ?  false :  true
        },
        clearDone : (state , action) => {
            state.list = state.listUndone
        }
    }
})


export const {addTodo , deleteTodo , toggleTodo ,navigateList , clearDone} = todosSlice.actions;

export default todosSlice.reducer;