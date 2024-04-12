const save = ()=>{
    var name = document.getElementById('name').value;
    console.log(name);
    var num = document.getElementById('number').value;
    console.log(num);
    document.getElementById('name2').value=name;
    document.getElementById('number2').value=num;
    
}

const reset =()=>{
    document.getElementById('name').value="";
    document.getElementById('number').value="";
    document.getElementById('name2').value="";
    document.getElementById('number2').value="";
}