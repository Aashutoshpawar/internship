import React, { useEffect, useState } from 'react'

const App = () => {
  //useState -
  //Holds the component state data and return a stateful value
  //mutable i.e. we can update whenever we want on any action or event 
  //syntax
    //const[initalState,updateState] = useState('initialdata');
    //const[name,setName] = useState([]);
    //const[name,setName] = useState({});
    //const[name,setName] = useState([{}]);
    //const[name,setName] = useState(0);
    const Update=()=>{
      setName('Aashutosh');
    }
    const [name,UpdateName] = useState('jayesh');
    
    
    const incCount=()=>{
      let count;
    setCount(count+1);
    }
  const [number,setCount] = useState(0);

    //useEffecct -
    //Called after render Method
    //it will do something after render
    //perform side effect to the 

    useEffect(()=>{
      alert('hello user');
    })


    //userRef-
    //Use to fetch mutable object
    //eg. to fetch form input field values
    //it avoid re-rendering cause
    //it access through current property
     //syntax
        //const data = useRef(initial data);









  return (
    <div>
    <h1>Hello welcome to basic hooks in react</h1>
    <h2>Hello your name is {name}</h2>
    <button onClick={Update}Update State></button>
    <>
    <h1>
    <h1>your count is = {count}</h1>
    <button onClick={incCount}></button>
    </h1>
    </>
    </div>
    
  );
}
export default App;
