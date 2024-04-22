const wrapper = document.querySelector('.wrapper');
const loginLink = document.querySelector('.login-link');
const registerLink = document.querySelector('.register-link');
const  iconPopup = document.querySelector('.icon-head');
const  closeIcon = document.querySelector('.close-icon');

registerLink.addEventListener('click', () => {
    wrapper.classList.add('active');
});
loginLink.addEventListener('click', () => {
    wrapper.classList.remove('active');
});
iconPopup.addEventListener('click', () => {
    wrapper.classList.add('active-popup');
});
closeIcon.addEventListener('click', () => {
    wrapper.classList.remove('active-popup');
});