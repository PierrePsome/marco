
let cross = document.getElementsByClassName('cross')[0];
let contactlink = document.getElementsByClassName('contactlink')[0];
let contact = document.getElementsByClassName('contact')[0];

contactlink.addEventListener('click', function() {
    contact.style.transform = 'translate(0%)'
})

cross.addEventListener('click', function() {
    contact.style.transform = 'translate(100%)'
})