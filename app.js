const trainingPrograms = [
  {
    name: "Web Development Training",
    description: "Learn web development from scratch with hands-on projects and mentor support.",
    eligibility: "Open to all college students.",
  },
  {
    name: "Digital Marketing Training",
    description: "Get certified in digital marketing with practical training and industry insights.",
    eligibility: "Open to all college students.",
  },
  {
    name: "Data Science Training",
    description: "Master data science with Python, SQL, and machine learning algorithms.",
    eligibility: "Open to college students in computer science, IT, or related fields.",
  },
];

function showDetails(training) {
  const banner = document.querySelector(".banner");
  const details = document.querySelector(".training-details");
  document.getElementById("training-name").textContent = training.name;
  document.getElementById("details-name").textContent = training.name;
  document.getElementById("details-description").textContent = training.description;
  document.getElementById("details-eligibility").textContent = `Eligibility: ${training.eligibility}`;
  banner.style.display = "none";
  details.style.display = "block";
}

function filterPrograms() {
  const eligibilityFilter = document.getElementById("eligibility-filter").value;
  const filteredPrograms = trainingPrograms.filter(program => program.eligibility.includes(eligibilityFilter));
  const programList = document.getElementById("program-list");
  programList.innerHTML = "";
  filteredPrograms.forEach(program => {
    const listItem = document.createElement("li");
    const link = document.createElement("a");
    link.href = "#";
    link.textContent = program.name;
    link.addEventListener("click", () => showDetails(program));
    listItem.appendChild(link);
    programList.appendChild(listItem);
  });
}

function initializePage() {
  filterPrograms();
  const training = trainingPrograms[Math.floor(Math.random() * trainingPrograms.length)];
  showDetails(training);
}

initializePage();
