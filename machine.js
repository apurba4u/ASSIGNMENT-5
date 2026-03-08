function allIssues() {
  const url = 'https://phi-lab-server.vercel.app/api/v1/lab/issues'
  fetch(url)
  .then(js => js.json())
  .then(data => displayIssues(data.data))
}
let shobIssues = []
let openIssues = []
let closedIssues = []
// {
//     "id": 49,
//     "title": "Add Google Analytics integration",
//     "description": "Integrate Google Analytics to track user behavior and improve product decisions.",
//     "status": "open",
//     "labels": [
//         "enhancement"
//     ],
//     "priority": "medium",
//     "author": "analytics_anna",
//     "assignee": "john_doe",
//     "createdAt": "2024-01-26T10:45:00Z",
//     "updatedAt": "2024-01-26T10:45:00Z"
// }
function displayIssues(issues) {
  const all = document.querySelector('#all')
  all.innerHTML = ''

  issues.forEach((elm) => {

    const card = document.createElement('div')
    card.className = "bg-white w-64 h-64 p-4 space-y-3 rounded-2xl border-t-4"

    if (elm.status === 'open') {
      card.classList.add('border-t-[#00A86E]')
    } else {
      card.classList.add('border-t-[#A856F7]')
    }

    card.innerHTML = `
      <div>
        <div class="flex justify-between">
          <img src="./assets/Open-Status.png" alt="">
          <div class="w-20 h-6 rounded-2xl text-center priority">
            ${elm.priority.toUpperCase()}
          </div>
        </div>

        <div>
          <h4 class="font-semibold text-[14px] text-[#1F2937]">
            ${elm.title}
          </h4>

          <p class="text-[12px] text-[#64748B]">
            ${elm.description}
          </p>

          <div class="flex gap-2 labels py-2"></div>

          <hr class="border-[#E4E4E7] w-full border my-3">

          <div class="flex flex-col gap-2">
            <p class="text-[13px] text-[#64748B]">${elm.author}</p>
            <p class="text-[13px] text-[#64748B]">
              ${elm.createdAt.slice(0,10)}
            </p>
          </div>
        </div>
      </div>
    `

    // Priority styling
    const priority = card.querySelector('.priority')

    if (elm.priority === 'high') {
      priority.classList.add('bg-red-100', 'text-red-500')
    } 
    else if (elm.priority === 'medium') {
      priority.classList.add('bg-yellow-100', 'text-yellow-500')
    } 
    else if (elm.priority === 'low') {
      priority.classList.add('bg-gray-100', 'text-gray-500')
    }

    // 🔥 Labels handling
    const labels = card.querySelector('.labels')

    elm.labels.forEach((label) => {

      const button = document.createElement('button')

      button.className =
        "max-w-28 flex justify-center items-center rounded-xl p-1.5 text-[12px] font-medium"

      if (label === 'bug') {
        button.classList.add('bg-red-100', 'text-red-500')
        button.innerHTML = `
          <img src="./assets/icon2.png" alt="">
          ${label.toUpperCase()}
        `
      }

      else if (label === 'help wanted') {
        button.classList.add('bg-yellow-100', 'text-yellow-500')
        button.innerHTML = `
          <img src="./assets/icon1.png" alt="">
          ${label.toUpperCase()}
        `
      }

      else if (label === 'enhancement') {
        button.classList.add('bg-green-100', 'text-green-600')
        button.innerHTML = `
          <img src="./assets/icon3.png" alt="">
          ${label.toUpperCase()}
        `
      } else {
        button.classList.add('bg-gray-100', 'text-gray-500')
        button.innerHTML = `
          <i class="ri-thumb-up-line text-gray-500"></i>
          ${label.toUpperCase()}
        `
      }

      labels.appendChild(button)
    })

    all.appendChild(card)
  })
}

allIssues()
// good first issue
// documentation
// bug
// good first issue