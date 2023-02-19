let comp_img = document.querySelector(".comp_img")
let wrap_text =document.querySelector('.wrap_text')
let btn1 = document.querySelector('#button1');
let btn = document.querySelector('#button');


btn1.addEventListener('click', function (event) {
    event.preventDefault();
    wrap_text.style.display = 'block'
    comp_img.style.display = 'none'
    
})

btn.addEventListener('click', function (event) {
    event.preventDefault();
    comp_img.style.display = 'block'
    wrap_text.style.display = 'none'
    
})