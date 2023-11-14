// Create a new <a> element containing the text "Buy Now!" 
// with an id of "cta" after the last <p>
const a = document.createElement('a')
const aText = document.createTextNode('Buy Now!')
a.appendChild(aText)
const main = document.querySelector('main')
const p = document.querySelector('p')
main.insertBefore(a,p.nextSibling)

// Access (read) the data-color attribute of the <img>,
// log to the console
const img = document.querySelector('img')
console.log(`${img.dataset.color}`)

// Update the third <li> item ("Turbocharged"), 
// set the class name to "highlight"
const turboCharged = document.getElementByTagName('li')[2]
turboCharged.className = 'highlight'

// Remove (delete) the last paragraph
// (starts with "Available for purchase now…")
document.body.removeChild(p)