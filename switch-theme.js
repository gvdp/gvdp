const themes = ['default', 'theme-doenker']

window.onload = function () {
  const theme = localStorage.getItem('theme')
  if(theme) {
    const body = document.querySelector('body')
    body.setAttribute('data-theme', theme)
    body.classList.add(theme)
  }

  document.getElementById('theme-toggle').addEventListener('click', function (el) {
    const body = document.querySelector('body')
    const currentTheme = body.getAttribute('data-theme')

    const newTheme = themes[(themes.indexOf(currentTheme) + 1) % themes.length]
    body.setAttribute('data-theme', newTheme)
    body.classList.add(newTheme)
    body.classList.remove(currentTheme)

    // Save the theme preference in localStorage
    localStorage.setItem('theme', newTheme)
  })
}
