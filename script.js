let out = document.getElementById('screen')
let calc = (n) => {
    out.value += n;
}

let  Result = () =>{
    // for give error
    try{
        out.value = eval(out.value);
    }
  catch(err){
    alert("Enter the valid input");
  }
}
function clr (){
out.value = " ";
 }
 function del (){
     out.value = out.value.slice(0,-1);
 }