const loginBtn = document.querySelector('#login-btn');

if (loginBtn) {
  loginBtn.addEventListener('click', () => {
    const usr = getValue('input-user');
    const pass = getValue('input-pass');

    if (usr === 'admin' && pass === 'admin123') {
      window.location.assign('./home.html');
    } else {
      alert('login failed');
    }
  });
}

const getValue = (id) => {
  const result = document.querySelector(`#${id}`)
  return result.value
}
function removeActive() {
  document.querySelectorAll('.sec-btn')
    .forEach(btn => btn.classList.remove('active'))
}

function showOnly(id) {
  const selected = document.querySelector(`#${id}`)
  const all = document.querySelector('#all')
  const open = document.querySelector('#open')
  const closed = document.querySelector('#closed')

  const arr = [all, open, closed]

  arr.forEach(elem => elem.classList.add('hidden'))
  selected.classList.remove('hidden')

  // active switch
  removeActive()
  document.querySelector(`#btn-${id}`).classList.add('active')
}

const searchBtn = document.querySelector('#search-btn')

if (searchBtn) {
  searchBtn.addEventListener('click', () => {

    removeActive()

    const input = document.querySelector('#input-btn')
    const searchValue = input.value.trim().toLowerCase()

    if (searchValue === '') {
      displayIssues(shobIssues, 'all')
      showOnly('all')
      return
    }

    const filtered = shobIssues.filter(issue =>
      issue.title &&
      issue.title.toLowerCase().includes(searchValue)
    )

    displayIssues(filtered, 'all')

    document.querySelector('#all').classList.remove('hidden')
    document.querySelector('#open').classList.add('hidden')
    document.querySelector('#closed').classList.add('hidden')
  })
}
document.querySelectorAll('.sec-btn').forEach(btn => {
  btn.addEventListener('click', function () {

    const type = this.id.replace('btn-', '')

    showOnly(type)

    if (type === 'all') {
      displayIssues(shobIssues, 'all')
    } else if (type === 'open') {
      displayIssues(openIssues, 'open')
    } else if (type === 'closed') {
      displayIssues(closedIssues, 'closed')
    }
  })
})
console.log('connet');

