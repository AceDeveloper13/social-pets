const body = document.querySelector('body')
const loginModal = document.querySelector('.loginModal')
const registerModal = document.querySelector('.registerModal')
const firstLoginButton = document.querySelector('.firstLoginButton')
const registerButton = document.querySelectorAll('.registerButton')
const returnHome = document.querySelector('.returnHome')
const returnLogin = document.querySelector('.returnLogin')

firstLoginButton.addEventListener('click', () => {
    loginModal.classList.remove('hidden')
});

returnHome.addEventListener('click', ()=> {
    loginModal.classList.add('hidden')
})

registerButton.forEach((button) => {
    button.addEventListener('click', ()=> {
        registerModal.classList.remove('hidden')
    })
})

returnLogin.addEventListener('click', () => {
    registerModal.classList.add('hidden')
})






