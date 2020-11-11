
  function start(e){ 
    e.dataTransfer.setData("text",e.target.id)

 }


 function dragOn(e){
   //  console.log("dragover")
     e.preventDefault()
   //   console.log(e.target.id)
 }

function dropAtend(e){
   console.log("drop end")
}
function drophere(e){
  let draggedId=e.dataTransfer.getData("text");
  let draggedElement=document.getElementById(draggedId)
  let parentdraggedElement=draggedElement.parentNode
  let ondraggedElement=e.target;
  let parentondraggedElement=e.target.parentNode
  console.log(parentdraggedElement)
 //  console.log(draggedElement)
  // console.log(ondraggedElement)
  
   parentondraggedElement.replaceChild(draggedElement,ondraggedElement);
   parentdraggedElement.appendChild(ondraggedElement);
  

}