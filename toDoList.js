// If an li element is clicked, toggle the class "done" on the <li>
const li = document.getElementsByTagName('li')[0]
const doneEvent = (e) => {
  e.currentTarget.className = 'done'
}
li.addEventListener('click', doneEvent)
// // If a delete link is clicked, delete the li element / remove from the DOM
const deleteLink = document.getElementsByClassName('delete')[0]
const deleteEvent = (e) => {
  e.currentTarget.parentElement.remove()
}
deleteLink.addEventListener('click',deleteEvent)

// // If an 'Add' link is clicked, adds the item as a new list item with
// // addListItem function has been started to help you get going!
// // Make sure to add an event listener(s) to your new <li> (if needed)
const addListItem = function() {
  const input = document.getElementsByTagName('input')[0];
  const text = input.value; // use this text to create a new <li>
  if(text === '' || text === null || text === undefined)
    return

  let list = document.getElementsByClassName('today-list')[0]

  let newLi = document.createElement('li')
  let newLiSpan = document.createElement('span')
  let newLiA = document.createElement('a')
  newLi.addEventListener('click', doneEvent)
  newLiA.addEventListener('click', deleteEvent)
  newLiSpan.innerText = text
  newLiA.innerText = 'Delete'
  newLiA.className = 'delete'
  newLi.appendChild(newLiSpan)
  newLi.appendChild(newLiA)

  list.appendChild(newLi)
  // Finish function here
};

const addItem = document.getElementsByClassName('add-item')[0]
addItem.addEventListener('click', addListItem)
