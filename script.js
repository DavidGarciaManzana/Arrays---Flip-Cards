const card = Array.from(document.querySelectorAll('.card'));
card.forEach(function (item) {
    function clickRotate() {
        item.classList.toggle('rotated');
    }

    item.addEventListener('click', clickRotate)
})

const code1 = document.getElementById("code1")
const buttoncode1 = document.getElementById("buttoncode1")
let copyCodeOne = (e) => {
    e.preventDefault()
    e.stopPropagation();
    navigator.clipboard.writeText(code1.textContent);
    alert("You have copied the code successfully")
}
buttoncode1.addEventListener("click", copyCodeOne)

const code2 = document.getElementById("code2")
const buttoncode2 = document.getElementById("buttoncode2")
let copyCodeTwo = (e) => {
    e.preventDefault()
    e.stopPropagation();
    navigator.clipboard.writeText(code2.textContent);
    alert("You have copied the code successfully")
}
buttoncode2.addEventListener("click", copyCodeTwo)

const code3 = document.getElementById("code3")
const buttoncode3 = document.getElementById("buttoncode3")
let copyCodeThree = (e) => {
    e.preventDefault()
    e.stopPropagation();
    navigator.clipboard.writeText(code3.textContent);
    alert("You have copied the code successfully")
}
buttoncode3.addEventListener("click", copyCodeThree)

let link1 = document.getElementById("codewars-1")
let link2 = document.getElementById("codewars-2")
let link3 = document.getElementById("codewars-3")
let link4 = document.getElementById("codewars-4")
let viewCode1 = document.getElementById("code-1")
let viewCode2 = document.getElementById("code-2")
let viewCode3 = document.getElementById("code-3")

let stopPropagation = (e) => {
    e.stopPropagation();
}

link1.addEventListener("click", stopPropagation)
link2.addEventListener("click", stopPropagation)
link3.addEventListener("click", stopPropagation)
link4.addEventListener("click", stopPropagation)
viewCode1.addEventListener("click", stopPropagation)
viewCode2.addEventListener("click", stopPropagation)
viewCode3.addEventListener("click", stopPropagation)