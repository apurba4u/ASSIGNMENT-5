document.querySelector('#login-btn').addEventListener('click', () => {
  const usr = getValue('input-user')
  const pass = getValue('input-pass')
  console.log(`${usr} ${pass}`);

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

