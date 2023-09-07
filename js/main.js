var elHeader = document.querySelector('.site-header');
var elBtn = document.querySelector('.menu');

elBtn.addEventListener('.click',() => {
    elHeader.classList.toggle('open');
});