import React from 'react';
import Todo from './Todo';
import {useSelector} from 'react-redux';


export default function ListTodo() {

    const todos = useSelector(state => state.todos.list)

    return(
        <main className="bg-light">
            <div className="todo-item text-muted container fst-italic"><p className='mb-0'>What needs to be done?</p></div>
                <hr className="m-0 p-0"/>
                <>
                    {   
                        ! todos.length > 0
                        ? <div className="todo-item text-center container fw-bold"><p className='mb-0'>There is no data for show !</p></div>
                        :  todos.map(todo => <Todo  key={todo.id} todo={todo} />)
                    }
                </>
        </main>
    )
}