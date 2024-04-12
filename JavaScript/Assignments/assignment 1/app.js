const add = ()=>{
   
    var no1 = Number(document.getElementById("no1").value);
    var no2 = Number(document.getElementById("no2").value);
    console.log(no1);
    console.log(no2);
    var sum = no1+no2;
    document.getElementById('Answer').value = sum;
    document.getElementById('operation').value="Additon";
}
const sub = ()=>{

    var no1 = Number(document.getElementById("no1").value);
    var no2 = Number(document.getElementById("no2").value);
    console.log(no1);
    console.log(no2);
    var sum = no1-no2;
    document.getElementById('Answer').value = sum;
    document.getElementById('operation').value="Subtraction";
    
}
const mul = ()=>{

    var no1 = Number(document.getElementById("no1").value);
    var no2 = Number(document.getElementById("no2").value);
    console.log(no1);
    console.log(no2);
    var sum = no1*no2;
    document.getElementById('Answer').value = sum;
    document.getElementById('operation').value="Multiplication";
    
}
const div = ()=>{
    
    var no1 = Number(document.getElementById("no1").value);
    var no2 = Number(document.getElementById("no2").value);
    console.log(no1);
    console.log(no2);
    var sum = no1/no2;
    document.getElementById('Answer').value = sum;
    document.getElementById('operation').value="Division";
}
const mod = ()=>{
    
    var no1 = Number(document.getElementById("no1").value);
    var no2 = Number(document.getElementById("no2").value);
    console.log(no1);
    console.log(no2);
    var sum = no1%no2;
    document.getElementById('Answer').value = sum;
    document.getElementById('operation').value="MOD";
}
function reset(){
    document.getElementById("Answer").value="";
    document.getElementById("operation").value="";
    document.getElementById("no1").value="";
    document.getElementById("no2").value="";
}