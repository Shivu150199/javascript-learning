console.log('hello')
const container=document.getElementsByClassName('container')
console.log(container)


////!SECTION
const draggingInfo={
    sourceContainerId:null,

    draggingElement:null, 
}


function ondragover(e){
    e.preventDefault();

}
function onDragStart(event){
   draggingInfo.sourceContainerId=event.target.getAttribute('data-container')
} 

function dropOn(){
    console.log('drop')
}
for(let i=0;i<container.length;i++){
    container[i].addEventListener('dragover',ondragover)
    container[i].addEventListener('drop',dropOn)
}