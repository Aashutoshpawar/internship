import React from "react";

class App2 extends React.Component{
    //pure methods 
    //return jsx
    //not directly interact with browser
    //dosent modify the component state 


    //automatically invoked 
    constructor(){
        super();
        console.log('hello constructor');

        //state object
        this.state=(
            {
                name:'aashutosh',
                skill:'ReactJS',
            }
        )
    }

    render(){
        return(
            <>
            <h1>Welcome To The Class Component</h1>
            <h1>{console.log(this.state.name)}</h1>
            </>
        )
    }
}

export default App2;