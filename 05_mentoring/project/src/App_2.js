import React, {useState, useEffect} from 'react'

export default function App() {
    const [counter, setCounter] = useState(0);
    const [users, setUsers] = useState([]);
    /* useEffect(() => {
        //console.log('componentDidMount/DidUpdate');
        fetch('https://randomuser.me/api/?results=5').then(res => res.json()).then(jsonres => setUsers([...users, jsonres.results]));
        return () => {
            console.log('componentWillUnmount');
        }
// eslint-disable-next-line
    }, []) */

    console.log('render')
    return (
        <div>
            <h3>welcome</h3>
            <button onClick={() => { setCounter(counter + 1) }}>+</button>
            <span>{counter}</span>
        </div>
    )
}
