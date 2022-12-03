import React from 'react';
import Todo from './Todo';



export default function ListTodo() {
    return(
        <main className="bg-light">
            <div className="todo-item text-muted container fst-italic"><p className='mb-0'>What needs to be done?</p></div>
                <hr className="m-0 p-0"/>
            <Todo />
        </main>
    )
}