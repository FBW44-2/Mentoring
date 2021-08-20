import React, { useState } from 'react';
import axios from 'axios';
import "./App.css";

function App() {

  const [data, setData] = useState({});

  const changeHandler = (e) => {
    setData({...data, [e.target.name]:e.target.value})
  }

  const submitHandler = (e) => {
    e.preventDefault();

    axios({
      method: 'POST',
      url: '/users/feedback',
      baseURL: 'http://localhost:5000',
      data: data
    }).then((res) => {
      console.log(res)
    }).catch(err => {
      console.log(err)
    })
  }

  return (
    <div className="container m-5 p-5 border-1 border-primary">
      <form className="form" onSubmit={submitHandler}>
        <div className="mb-3">
          <label htmlFor="exampleFormControlInput1" className="form-label">
            Email address
          </label>
          <input
            type="email"
            className="form-control"
            id="exampleFormControlInput1"
            placeholder="name@example.com"
            name="email"
            onChange={(e) => { changeHandler(e) }}
          />
        </div>
        <div className="mb-3">
          <label htmlFor="exampleFormControlTextarea1" className="form-label">
            Feedback
          </label>
          <textarea
            className="form-control"
            id="exampleFormControlTextarea1"
            rows="3"
            name="feedback"
            onChange={changeHandler}
          ></textarea>
        </div>

        <div className="d-flex justify-content-end">
          <input type="submit" value="Submit" className="btn btn-primary" />
        </div>
      </form>
    </div>
  );
}

export default App;
