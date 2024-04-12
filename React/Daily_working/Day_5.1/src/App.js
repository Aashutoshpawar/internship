import React from "react";

function App(){
  return(
    <>
      hello welcome to the app component
    </>
  )
}
const Sum = (a,b)=>{
  return a + b;
}

const obj={

  Sum:Sum,
  


}



export {Sum} //named export
export default App; //default exportp