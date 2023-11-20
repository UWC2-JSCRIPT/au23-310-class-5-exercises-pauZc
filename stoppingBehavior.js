// Do not change
document.getElementById('cat').addEventListener('click', () => {
  alert('meow!');
});

// When clicked, "More info" link should alert "Here's some info"
// instead of going to a new webpage
const moreInfo = document.getElementById('more-info')
moreInfo.removeAttribute('href')
moreInfo.addEventListener('click', ()=> {
  alert(`Here's more info`)
})

// When the bark button is clicked, should alert "Bow wow!"
// Should *not* alert "meow"
const button = document.getElementById('dog')
button.addEventListener('click', (e)=>{
  alert ('Bow wow!')
  e.stopPropagation()
})
