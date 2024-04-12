import React from 'react';
import  ReactDOM  from 'react-dom/client';
class App extends React.Component{
  conostructor(){
    super()
    this.state=({
      name:"aashu",
      skill:"MERN",
    })
    const Demo1 =()=> {
        alert("event called");
    }
  }
  render(){
    return(
    const Demo1();
    <>
    
      <h1>Welcome to the Class Component</h1>
      <h2>{this.state.name}And{this.state.skill}</h2>

      <button onClick={Demo1}>Click here</button>
      <button onClick={this.Demo2}></button>
      <button onClick={()=>{this.Demo3}}></button>
      <button onClick={()=>{alert('hello alert')}}></button>
    </>
    )
  }
}
export default App;