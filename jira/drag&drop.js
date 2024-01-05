console.log('hello')
const container=document.getElementsByClassName('container')
console.log(container)


////!SECTION
function ondragover(e){
    e.preventDefault();

}
function onDragStart(){
    console.log(
        'draggin start'
    )
}

function dropOn(){
    console.log('drop')
}
for(let i=0;i<container.length;i++){
    container[i].addEventListener('dragover',ondragover)
    container[i].addEventListener('drop',dropOn)
}