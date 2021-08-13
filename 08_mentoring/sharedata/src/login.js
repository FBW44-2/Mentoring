import React from 'react'

export default function Login() {
    return (
        <div className="m-5 p-5">
            <form action="">
                <input type="text" name="username" id="" className="form-control" />
                <input type="text" name="password" id="" className="form-control" />
                <input type="submit" value="login" className="btn btn-primary" />
            </form>
        </div>
    )
}
