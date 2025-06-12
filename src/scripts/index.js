const body = document.querySelector('body')
const firstLoginButton = document.querySelector('.firstLoginButton')
const loginModal = document.querySelector('.loginModal')
const buttonReturn = document.querySelector('.returnHome')

firstLoginButton.addEventListener('click', () => {
    loginModal.classList.remove('hidden')
});

buttonReturn.addEventListener('click', ()=> {
    loginModal.classList.add('hidden')
})






