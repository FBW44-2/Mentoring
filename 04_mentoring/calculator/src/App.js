
import './App.css';
import Button from './components/button'
import {useState} from 'react'

function App() {
  const [display, setDisplay] = useState("");

  return (
    <div className="App">
      <div className="logo">iCalc</div>
      <input type="text" name="display" id="display" className="display" readOnly={true} value={ display}/>
      <div className="btn-container">
        <Button label="(" grid="op" display={display} setDisplay={setDisplay}/>
        <Button label=")" grid="cp" display={display} setDisplay={setDisplay}/>
        <Button label="C" grid="cls" display={display} setDisplay={setDisplay}/>
        <Button label="<=" grid="bsp" display={display} setDisplay={setDisplay}/>
        <Button label="+" grid="plus" bg="orange" display={display} setDisplay={setDisplay}/>
        <Button label="1" grid="one" display={display} setDisplay={setDisplay}/>
        <Button label="2" grid="two" display={display} setDisplay={setDisplay}/>
        <Button label="3" grid="three" display={display} setDisplay={setDisplay}/>
        <Button label="000" grid="tzero" display={display} setDisplay={setDisplay}/>
        <Button label="-" grid="minus" bg="orange" display={display} setDisplay={setDisplay}/>
        <Button label="4" grid="four" display={display} setDisplay={setDisplay}/>
        <Button label="5" grid="five" display={display} setDisplay={setDisplay}/>
        <Button label="6" grid="six" display={display} setDisplay={setDisplay}/>
        <Button label="00" grid="dzero" display={display} setDisplay={setDisplay}/>
        <Button label="/" grid="div" bg="orange" display={display} setDisplay={setDisplay}/>
        <Button label="7" grid="seven" display={display} setDisplay={setDisplay}/>
        <Button label="8" grid="eight" display={display} setDisplay={setDisplay}/>
        <Button label="9" grid="nine" display={display} setDisplay={setDisplay}/>
        <Button label="0" grid="zero" display={display} setDisplay={setDisplay}/>
        <Button label="*" grid="mult" bg="orange" display={display} setDisplay={setDisplay}/>
        <Button label="===" grid="tequal" display={display} setDisplay={setDisplay}/>
        <Button label="!==" grid="notequal" display={display} setDisplay={setDisplay}/>
        <Button label=">" grid="gt" display={display} setDisplay={setDisplay}/>
        <Button label="<" grid="lt" display={display} setDisplay={setDisplay}/>
        <Button label="." grid="dot" bg="orange" display={display} setDisplay={setDisplay}/>
        <Button label="=" grid="eq" bg="orange" display={display} setDisplay={setDisplay}/>
      </div>
    </div>
  );
}

export default App;
