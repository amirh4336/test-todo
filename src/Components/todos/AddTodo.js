import React from 'react'


export default function AddTodo() {


    return(
        <div className="header w-100 bg-custom ">
            <div className="container text-center py-5">
                <h1 className="text-white">To Do List</h1>
                <form className="form-inline mt-4">
                    <div className="form-group d-flex w-100 w-lg-75 ms-auto me-auto ">
                        <input type="text" className="form-control rounded-0" placeholder="title..."/>
                        <button type="submit" className="btn btn-custom rounded-0 ">Submit</button>
                    </div>
                </form>
            </div>
        </div>
    )

}