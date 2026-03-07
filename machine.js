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
    card.innerHTML = `
    <div class="bg-white w-64 h-64 p-4 space-y-3 border-t-3 rounded-2xl border-t-[#00A86E]">
      <div class="flex justify-between">
        <img src="./assets/Open-Status.png" alt="">
        <div class="w-20 h-6 rounded-2xl bg-[#FEECEC] text-[#EF4444] text-center">${elm.priority}</div>
      </div>
      <div>
        <h4 class="font-semibold text-[14px] text-[#1F2937]">${elm.title}</h4>
        <p class="text-[12px] text-[#64748B]">${elm.description}</p>
        <div class="flex gap-2">
          <button class="max-w-28 bg-[#FEECEC] text-[#EF4444] flex justify-center items-center rounded-xl p-1.5 text-[12px] font-medium">
            <img src="./assets/icon2.png" alt="">
            BUG
          </button>
          <button class="max-w-28 bg-[#FFF8DB] text-[#FDE68A] flex justify-center items-center rounded-xl p-1.5 text-[12px] font-medium">
            <img src="./assets/icon1.png" alt="">
            HELP WANTED
          </button>
        </div>
        <hr class="border-[#E4E4E7] w-full border my-3">
        <div class="flex flex-col gap-2">
          <p class="text-[13px] text-[#64748B]">${elm.author}</p>
          <p class="text-[13px] text-[#64748B]">${elm.createdAt.slice(0,10)}</p>
        </div>
      </div>
    </div>
    `
    all.appendChild(card)
  })
}
allIssues()