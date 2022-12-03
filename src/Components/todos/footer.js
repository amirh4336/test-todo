import React from 'react'
import {useSelector , useDispatch} from 'react-redux';
import {navigateList , clearDone} from '../../Store/slices/todosSlices'

export default function Footer() {

    const dispatch = useDispatch();

    const navigateListHandler = (e) => {
        dispatch(navigateList(e.target.value))

    }

    const clearDoneHandler = (e) => {
        dispatch(clearDone())
    }

    const todosUndone = useSelector(state => state.todos.listUndone)

    const todosCheck = useSelector(state => state.todos.CheckUndone)

    return(
        <footer className="bg-footer fixed-bottom p-1">
            <div className="container d-flex justify-content-between align-items-center">
            <p className="m-0"><span className='fw-bold'>{`${todosUndone.length}`}</span> item left</p>
            <div className="navigate d-flex">
                <button type='button' className={`me-2 border-0 bg-footer ${todosCheck ? '' : 'active'}`} value={'all'} onClick={navigateListHandler} >All</button>
                <button type='button' className={`border-0 bg-footer ${todosCheck ? 'active' : ''}`} value={'active'} onClick={navigateListHandler}> Active</button>
            </div>
            <button type="button" className="btn-custom1 m-0 p-0" onClick={clearDoneHandler}>Clear completed</button>

            </div>
        </footer>
    )
}