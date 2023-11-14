// Given the <body> element as variable body,
// access the <main> node and log to the console.
const body = document.querySelector('body');
const main = body.getElementsByTagName('main')
console.log(main[0].innerHTML)


// Given the <ul> element as variable ul,
// access <body>  and log to the console.
const ul = document.querySelector('ul');
for (let index = 0; index < ul.childElementCount; index++) {
    const li = ul.children[index];
    console.log(li.innerHTML)
}
// Given the <p> element as var p,
// access the 3rd <li>  and log to the console.
const p = document.querySelector('p');
const previousToP= p.previousElementSibling
console.log(previousToP.children[2].innerHTML)
