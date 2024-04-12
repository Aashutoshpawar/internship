import React from "react";
import  ReactDOM  from "react-dom/client";
function Demo1(){
    alert('hello event handler');
}

const Demo2 = () =>{
    alert("hello functional component");
}


const App2 = () =>{
    return(
    <>
    <h1>Events in functional Component</h1>
    <button onClick={Demo1}>Click here</button>
    <button onClick={this.Demo2}></button>
    <button onClick={()=>{this.Demo3}}></button>
    </>
    )
}