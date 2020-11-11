//let element=document.querySelector("#some");

console.log("working")
window.addEventListener("scroll",()=>{ 
    console.log("working");
    if(window.scrollY + window.innerHeight+5 >=document.documentElement.scrollHeight){
        fun();
      }
});
let i=0;
 function fun (){
  let elem=document.getElementById('')
    for(let j=0;j<1000;j++){
   let addSome=document.createElement("div")
   console.log(addSome)
   console.log(elem)
   addSome.innerHTML="Time Stamp "+i++;
   elem.appendChild(addSome)
 }
 }
fun();
