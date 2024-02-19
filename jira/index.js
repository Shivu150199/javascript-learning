const cardContainer = document.querySelector('#todo_container')
const container = document.querySelectorAll('.container')
// alert('how are you')
const createIssueBtn = document.querySelector('.create-btn')
const textArea = document.querySelector('.issue-input')
//
let draggingInfo={
  draggingId:null,
  draggingELement:null

}

function onClickCreateIssue() {
  createIssueBtn.classList.add('hide')
  textArea.classList.remove('hide')
  textArea.focus()
}
//
function addNewIssue(cardTitle) {
  // console.log(cardTitle)
  const card = document.createElement('div')
  card.innerText = cardTitle
  card.className = 'card'
  card.draggable = true;
card.setAttribute('data-container',cardContainer.id)
card.addEventListener('dragstart',(e)=>{
console.log(e.target)
draggingInfo.draggingId=e.target.getAttribute('data-container')
draggingInfo.draggingELement=e.target
})
// card.addEventListener('dragstart',onDragStart)


  cardContainer.appendChild(card)
  textArea.value = ''
  createIssueBtn.classList.remove('hide')
  textArea.classList.add('hide')
}

container.forEach((item)=>{
item.addEventListener('dragover',(e)=>{
  e.preventDefault();
})
item.addEventListener('drop',(e)=>{
  let card=draggingInfo.draggingELement
  let dropZone=e.currentTarget;
   card.setAttribute('data-container',dropZone.id)
   dropZone.appendChild(card)
})
})

//
textArea.addEventListener('keyup', (event) => {
  if (event.keyCode == 13) {
    // console.log('hello')
    const value = textArea.value

    console.log(value)
    if (value === '') {
      alert('write something')
    } else {
      addNewIssue(value)
    }
  }
})
//
createIssueBtn.addEventListener('click', onClickCreateIssue)
