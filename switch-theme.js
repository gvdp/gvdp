const themes = ['default', 'theme-doenker', 'theme-matrix']

window.onload = function () {
  const theme = localStorage.getItem('theme')
  console.log('theme', theme)
  if (theme) {
    // const body = document.querySelector('body')
    // body.setAttribute('data-theme', theme)
    // body.classList.add(theme)
    setTheme(theme)
  }

  document.getElementById('theme-toggle').addEventListener('click', function () {
    const body = document.querySelector('body')
    const currentTheme = body.getAttribute('data-theme')

    const newTheme = themes[(themes.indexOf(currentTheme) + 1) % themes.length]
    setTheme(newTheme)
    // body.setAttribute('data-theme', newTheme)
    // body.classList.add(newTheme)
    // body.classList.remove(currentTheme)

    // Save the theme preference in localStorage
    // localStorage.setItem('theme', newTheme)
  })
}

const setTheme = (theme) => {
  const body = document.querySelector('body')
  const currentTheme = body.getAttribute('data-theme')

  console.log('removing', currentTheme, 'adding', theme)
  body.classList.remove(currentTheme)
  body.setAttribute('data-theme', theme)
  body.classList.add(theme)

  // Save the theme preference in localStorage
  localStorage.setItem('theme', theme)
}
