const loginBtn = document.querySelector("#login-btn");

if (loginBtn) {
  loginBtn.addEventListener("click", () => {
    const usr = getValue("input-user");
    const pass = getValue("input-pass");

    if (usr === "admin" && pass === "admin123") {
      window.location.assign("./home.html");
    } else {
      alert("login failed");
    }
  });
}

const getValue = (id) => {
  const result = document.querySelector(`#${id}`);
  return result.value;
};
function removeActive() {
  document
    .querySelectorAll(".sec-btn")
    .forEach((btn) => btn.classList.remove("active"));
}

function showOnly(id) {
  const selected = document.querySelector(`#${id}`);
  const all = document.querySelector("#all");
  const open = document.querySelector("#open");
  const closed = document.querySelector("#closed");

  const arr = [all, open, closed];

  arr.forEach((elem) => elem.classList.add("hidden"));
  selected.classList.remove("hidden");

  // active switch
  removeActive();
  document.querySelector(`#btn-${id}`).classList.add("active");
}

const searchBtn = document.querySelector("#search-btn");

if (searchBtn) {
  searchBtn.addEventListener("click", () => {
    removeActive();

    const input = document.querySelector("#input-btn");
    const searchValue = input.value.trim().toLowerCase();

    if (searchValue === "") {
      displayIssues(shobIssues, "all");
      showOnly("all");
      return;
    }

    const filtered = shobIssues.filter(
      (issue) => issue.title && issue.title.toLowerCase().includes(searchValue),
    );

    displayIssues(filtered, "all");

    document.querySelector("#all").classList.remove("hidden");
    document.querySelector("#open").classList.add("hidden");
    document.querySelector("#closed").classList.add("hidden");
  });
}
document.querySelectorAll(".sec-btn").forEach((btn) => {
  btn.addEventListener("click", function () {
    const type = this.id.replace("btn-", "");

    showOnly(type);

    if (type === "all") {
      displayIssues(shobIssues, "all");
      updateIssueCount(shobIssues.length)
    } else if (type === "open") {
      displayIssues(openIssues, "open");
      updateIssueCount(openIssues.length)
    } else if (type === "closed") {
      displayIssues(closedIssues, "closed");
      updateIssueCount(closedIssues.length)
    }
  });
});
async function loadDetails(id) {
  const url = `https://phi-lab-server.vercel.app/api/v1/lab/issue/${id}`;
  const res = await fetch(url);
  const details = await res.json();
  loadDetailsProperly(details.data);
}
// {
//     "id": 26,
//     "title": "Session timeout too aggressive",
//     "description": "Users are being logged out too frequently. Need to adjust session timeout settings.",
//     "status": "closed",
//     "labels": [
//         "bug"
//     ],
//     "priority": "medium",
//     "author": "session_steve",
//     "assignee": "security_sam",
//     "createdAt": "2024-01-09T11:00:00Z",
//     "updatedAt": "2024-01-22T14:30:00Z"
// }
const loadDetailsProperly = (details) => {
  const detailsBox = document.querySelector("#details-container");
  console.log(details);
  detailsBox.innerHTML = `
  <section class="p-8 space-y-3.5">
    <h1 class="font-bold text-[24px] text-[#1F2937]">${details.title}</h1>
    <div class="flex items-center gap-1.5">
      <div class="p-1.5 text-[12px] rounded-2xl ${details.status === "open" ? "bg-green-100 text-green-600" : "bg-red-100 text-red-600"}">${details.status}</div>
      <p class="text-[#64748B] text-[12px]">Opened by ${details.author}</p>
      <p class="text-[#64748B] text-[12px]">${details.createdAt.slice(0, 10)}</p>
    </div>
    <div id="final" class="flex items-center gap-1.5">
      
    </div>
    <div>
      <p class="text-[#64748B] text-[14px]">${details.description}</p>
    </div>
    <div class="bg-[#F8FAFC] p-4 flex justify-between">
      <div class="flex flex-col gap-0.5">
        <p class="text-[#64748B] text-[13px]">Assignee:</p>
        <h4 class="font-semibold text-[#1F2937]">${details.author}</h4>
      </div>
      <div class="flex flex-col gap-0.5">
        <p class="text-[#64748B] text-[13px]">Priority:</p>
        <div class="p-1.5 text-[12px] bg-[#EF4444] rounded-2xl text-center ${
          details.priority === "high"
            ? "bg-red-100 text-red-700"
            : details.priority === "medium"
              ? "bg-yellow-100 text-yellow-500"
              : "bg-gray-300 text-gray-700"
        }">${details.priority}</div>
      </div>
    </div>
  </section>
  `;
  const container = document.getElementById("final");

  container.innerHTML = "";

  details.labels.forEach((label) => {
    const button = document.createElement("button");

    button.className =
      "max-w-28 flex justify-center items-center rounded-xl p-1.5 text-[12px] font-medium";

    if (label === "bug") {
      button.classList.add("bg-red-100", "text-red-500");
      button.innerHTML = `
      <img src="./assets/icon2.png" alt="">
      ${label.toUpperCase()}
    `;
    } else if (label === "help wanted") {
      button.classList.add("bg-yellow-100", "text-yellow-500");
      button.innerHTML = `
      <img src="./assets/icon1.png" alt="">
      ${label.toUpperCase()}
    `;
    } else if (label === "enhancement") {
      button.classList.add("bg-green-100", "text-green-600");
      button.innerHTML = `
      <img src="./assets/icon3.png" alt="">
      ${label.toUpperCase()}
    `;
    } else {
      button.classList.add("bg-gray-100", "text-gray-500");
      button.innerHTML = `
      <i class="ri-thumb-up-line text-gray-500"></i>
      ${label.toUpperCase()}
    `;
    }

    container.appendChild(button);
  });
  document.querySelector("#details_modal").showModal();
};
