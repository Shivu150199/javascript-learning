console.log('hello')
const container = document.getElementsByClassName('container')
console.log(container)

////!SECTION
const draggingInfo = {
  sourceContainerId: null,

  draggingElement: null,
}

function onDragStart(event) {
  draggingInfo.sourceContainerId = event.target.getAttribute('data-container')
  draggingInfo.draggingElement = event.target
}

function ondragover(e) {
  let droppingContainer = e.currentTarget
  if (droppingContainer.id === draggingInfo.sourceContainerId) {
    return
  }
  e.preventDefault()
}

function dropOn(event) {
  const card = draggingInfo.draggingElement;
  const currentDropZone = event.currentTarget
  card.setAttribute("data-container", currentDropZone.id)
  currentDropZone.appendChild(card)
  console.log('drop')
}
for (let i = 0; i < container.length; i++) {
  container[i].addEventListener('dragover', ondragover)
  container[i].addEventListener('drop', dropOn)
}
