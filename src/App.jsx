
import {useState} from "react";
import './assets/css/style.css'
import Selector from "./components/Selector.jsx";

function App() {
 const colorOptions = [
     {label: 'Red' , value: 'red'},
     {label: 'Blue' , value: 'blue'},
     {label: 'Green' , value: 'green'},
     {label: 'Yellow' , value: 'yellow'},
 ]
    return (
        <>
           <Selector colors={colorOptions} onChange={(val)=>document.getElementById("square").style.backgroundColor = val}/>
            <div className="square" id="square"></div>
        </>
    )
}

export default App
