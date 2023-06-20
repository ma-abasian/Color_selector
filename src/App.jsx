import {useState} from "react";
import './assets/css/style.css'
import Selector from "./components/Selector.jsx";
import Box from "./components/Box.jsx";

function App() {
    const colorOptions = [
        {label: 'Red', value: 'red'},
        {label: 'Blue', value: 'blue'},
        {label: 'Green', value: 'green'},
        {label: 'Yellow', value: 'yellow'},
    ]

    const colorHandel = (val) => document.getElementById("square").style.backgroundColor = val;

    return (
        <>
            <Selector colors={colorOptions} onChange={colorHandel}/>
            <Box/>
        </>
    )
}

export default App
