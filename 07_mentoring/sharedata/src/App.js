import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css'
import {useState} from 'react';
import Login from './login.js'




function App() {

  const [user, setUser] = useState({});

  const changeHandler = (event) => {
    // console.log(event.target.value)
    return {[event.target.name]: event.target.value}
  }

  const submitHandler = (event) => {
    event.preventDefault();
    console.log(user)
  }

  return (
    <div className="container mt-5 p-3">
      <form className="form" onSubmit={submitHandler}>
        <input type="text" className="form-control mb-2" onChange={(e)=>{setUser({...user, ...changeHandler(e)})}} placeholder="firstName" name="firstName" id="" />
        <input type="text" className="form-control mb-2" onChange={(e)=>{setUser({...user, ...changeHandler(e)})}} placeholder="lastName" name="lastName" id="" />
        <input type="text" className="form-control mb-2" onChange={(e)=>{setUser({...user, ...changeHandler(e)})}} placeholder="address" name="address" id="" />
        <input type="text" className="form-control mb-2" onChange={(e)=>{setUser({...user, ...changeHandler(e)})}} placeholder="Tel" name="tel" id="" />
        <input type="submit" value="Submit" className="btn btn-primary" />
      </form>
      
      <Login userInfo={user}/>
    </div>
  );
}

export default App;
