import React from 'react'


export default function Footer() {
    
    return(
        <footer className="bg-footer fixed-bottom p-1">
            <div className="container d-flex justify-content-between align-items-center">
            <p className="m-0"><span className='fw-bold'>1</span> item left</p>
            <div className="navigate d-flex">
                <div className="active me-2" >All</div>
                <div className="" > Active</div>
            </div>
            <button type="button" className="btn-custom1 m-0 p-0">Clear completed</button>

            </div>
        </footer>
    )
}