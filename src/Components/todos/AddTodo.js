import React, { useState } from 'react'
import { addTodo } from '../../Store/slices/todosSlices';
import {useDispatch} from "react-redux";


export default function AddTodo() {
    const dispatch = useDispatch();

    const [inputTodo , setInputTodo] =useState("");

    const inputTodoHandler = (e) => setInputTodo(e.target.value)

    const addTodoHandler = (e) => {
        if (inputTodo.length > 0) {
            dispatch(
                addTodo({
                    id : new Date().getTime(),
                    text : inputTodo,
                    done : false
                })
            )
        }

        setInputTodo("")
    }

    return(
        <div className="header w-100 bg-custom ">
            <div className="container text-center py-5">
                <h1 className="text-white">To Do List</h1>
                <form className="form-inline mt-4">
                    <div className="form-group d-flex w-100 ms-auto me-auto ">
                        <input 
                        onChange={inputTodoHandler}
                        value={inputTodo}
                        type="text" 
                        className="form-control rounded-0" 
                        placeholder="title..."/>
                        <button onClick={addTodoHandler} type="button" className="btn-custom px-5">Submit</button>
                    </div>
                </form>
            </div>
        </div>
    )

}