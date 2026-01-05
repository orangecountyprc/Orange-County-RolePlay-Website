// ===============================
// Department Data
// ===============================

const departments = {
  fhp: {
    title: "Florida Highway Patrol",
    desc: "Enforcing traffic laws, responding to crashes, and ensuring highway safety across the state of Florida.",
    stats: ["Statewide Jurisdiction", "5 Specialized Units", "Daily Patrols"],
    link: "https://discord.gg/PpQAqN7pdd"
  },
  opd: {
    title: "Orlando Police Department",
    desc: "Protecting the City of Orlando with professionalism, integrity, and service.",
    stats: ["City Jurisdiction", "4 Patrol Districts", "Active Investigations"],
    link: "https://discord.gg/mhSGmn8rSx"
  },
  ocso: {
    title: "Orange County Sheriff's Office",
    desc: "Serving and protecting Orange County with dedication and professionalism.",
    stats: ["Countywide Jurisdiction", "Specialized Units", "Community Policing"],
    link: "https://discord.gg/pjjUh2Hsh8"
  },
  ocfr: {
    title: "Orange County Fire Rescue",
    desc: "Providing fire suppression, EMS response, and rescue operations across Orange County.",
    stats: ["Advanced Life Support", "Fire Suppression", "Rescue Operations"],
    link: "https://discord.gg/76HYBhV2fc"
  },
  fdot: {
    title: "Florida Department of Transportation",
    desc: "Maintaining Florida’s roadways, assisting motorists, and supporting statewide infrastructure.",
    stats: ["Roadway Assistance", "Traffic Management", "Statewide Coverage"],
    link: "https://discord.gg/6vYQTd3sFR"
  }
};

// ===============================
// DOM Elements
// ===============================

const deptTitle = document.getElementById("deptTitle");
const deptDesc = document.getElementById("deptDesc");
const deptStats = document.getElementById("deptStats");
const deptApplyBtn = document.getElementById("deptApplyBtn");
const pills = document.querySelectorAll(".pill");

// ===============================
// Update Department Display
// ===============================

function updateDepartment(deptKey) {
  const dept = departments[deptKey];

  // Update title + description
  deptTitle.textContent = dept.title;
  deptDesc.textContent = dept.desc;

  // Update stats
  deptStats.innerHTML = "";
  dept.stats.forEach(stat => {
    const span = document.createElement("span");
    span.textContent = stat;
    deptStats.appendChild(span);
  });

  // Update Join Now button link
  deptApplyBtn.href = dept.link;

  // Update active pill
  pills.forEach(p => p.classList.remove("active"));
  document.querySelector(`[data-dept="${deptKey}"]`).classList.add("active");
}

// ===============================
// Event Listeners
// ===============================

pills.forEach(button => {
  button.addEventListener("click", () => {
    const dept = button.getAttribute("data-dept");
    updateDepartment(dept);
  });
});

// ===============================
// Default Load (FHP)
// ===============================

updateDepartment("fhp");