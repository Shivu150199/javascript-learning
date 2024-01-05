const cardContainer = document.querySelector('#todo_container')
// alert('how are you')
const createIssueBtn = document.querySelector('.create-btn')
const textArea = document.querySelector('.issue-input')
//
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
card.addEventListener('dragstart',onDragStart)


  cardContainer.appendChild(card)
  textArea.value = ''
  createIssueBtn.classList.remove('hide')
  textArea.classList.add('hide')
}
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
