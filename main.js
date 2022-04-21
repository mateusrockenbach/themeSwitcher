// CHECANDO O TEMA SALVO ------------------------
window.onload = checkSavedTheme()

function checkSavedTheme() {
    const localStorageSavedTheme = localStorage.getItem('themeState')
    const themeIdentifier = document.getElementById('text')


    if (localStorageSavedTheme !== null && localStorageSavedTheme === 'dark') {
        // insere a classe 'dark' no body
        document.body.className = localStorageSavedTheme
        themeIdentifier.textContent = 'DARK THEME'
        // ajusta a posição do slider de acordo com o tema dark
        const swicherPosition = document.getElementById('theme-switch')
        swicherPosition.checked = true
    } else {
        // insere a classe 'light' no body
        document.body.className = localStorageSavedTheme
        themeIdentifier.textContent = 'LIGHT THEME'
        // ajusta a posição do slider de acordo com o tema dark
        const swicherPosition = document.getElementById('theme-switch')
        swicherPosition.checked = false        
    }
}


// IDENTIFICANDO, ALTERANDO E DEFININDO O TEMA ------------------------
const getBody = document.getElementById('main')
const themeSwitcher = document.getElementById('theme-switch')

function toggleState() {
    const state = getBody


    const input = document.getElementById('theme-switch').checked
    const themeIdentifier = document.getElementById('text')

    if (input) {
        themeIdentifier.textContent = 'DARK THEME'
        state.classList.remove('light')        
        state.classList.add('dark')        
        localStorage.setItem('themeState', 'dark')
    } else {
        themeIdentifier.textContent = 'LIGHT THEME'    
        state.classList.remove('dark')        
        state.classList.add('light')        
        localStorage.setItem('themeState', 'light')
    }
}

themeSwitcher.addEventListener('click', toggleState)