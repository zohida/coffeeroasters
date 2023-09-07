var elHeader = document.querySelector('.site-header');
var elBtn = document.querySelector('.site-header__btn');

elBtn.addEventListener('.click', () => {
    elHeader.classList.toggle('.open');
});