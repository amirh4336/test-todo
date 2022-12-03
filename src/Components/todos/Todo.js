import React from 'react';



export default function Todo({ todo}) {
    
    return (
        <div className="todo">
            <div className="todo-items container d-flex justify-content-between">
                <div className="form-check">
                    <input className="form-check-input" type="checkbox" value="" id="flexCheckDefault"/>
                    <p className="m-0 p-0 ps-1">{todo.text}</p>
                </div>
                <button type="button" className="btn-close" data-bs-dismiss="offcanvas" aria-label="Close"></button>
            </div>
            <hr className="m-0 p-0"/>
        </div>
    )
}