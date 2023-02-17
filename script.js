let elements = myForm.elements;
let button = document.querySelector('#button');
let button1 = document.querySelector('#button1');
let titleName = document.querySelector('#titleName');
let compliment = document.querySelector('.compliment');
let complimentText = document.querySelector('.compliment__text');
let gift = document.querySelector('.podarok');

button.addEventListener('click', function (event) {
    event.preventDefault();
    titleName.textContent = elements.userName.value
    compliment.style.display = "block"
    gift.style.display = "none"

})

button1.addEventListener('click', function (event) {
    event.preventDefault();
    compliment.style.display = "none"
    gift.style.display = "block"
    gift.addEventListener('click', function (event) {
        event.preventDefault();
        gift.style.color = "red"
    })
})