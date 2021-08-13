import React, { Component, useState } from 'react'

// export default class App extends Component {
    
    
//     state = {
//         name: 'fahim'
//     }

//     render() {
//         return (
//             <div>
//                 <h3>Welcome {this.state.name}</h3>

//                 Name:
//                 <input type="text" name="name" id="name" onInput={(e) => {
//                     this.setState({name: e.target.value})
//                 }}/>
//             </div>
//         )
//     }
// }


export default function App(){
    const [name, setName] = useState('fahim')
    
        return (
            <div>
                <h3>Welcome {name}</h3>

                Name:
                <input type="text" name="name" id="name" onInput={(e) => {
                    setName(e.target.value)
                }}/>
            </div>
        )
}
