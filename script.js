document.querySelector('#login-btn').addEventListener('click', () => {
  const usr = getValue('input-user')
  const pass = getValue('input-pass')

  if (usr == 'admin' && pass == 'admin123') {
    window.location.assign('./home.html')
  } else {
    alert('login failed')
    return
  }
})

const getValue = (id) => {
  const result = document.querySelector(`#${id}`)
  return result.value
}

function showOnly(id) {
  const selected = document.querySelector(`#${id}`)
  const all = document.querySelector('#all')
  const open = document.querySelector('#open')
  const closed = document.querySelector('#closed')

  const arr = [all, open, closed]

  arr.forEach(elem => elem.classList.add('hidden'))
  selected.classList.remove('hidden')
}


