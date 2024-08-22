// Sample data for demonstration
const students = [
  { id: 1, name: "John Doe" },
  { id: 2, name: "Jane Smith" },
];

// Function to fetch student data from the database
function fetchStudentsFromDatabase() {
  // Simulate fetching data from the database
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(students);
    }, 1000);
  });
}

// Function to display students' attendance
async function displayAttendance() {
  const studentsData = await fetchStudentsFromDatabase();

  const attendanceContainer = document.getElementById("attendanceContainer");
  attendanceContainer.innerHTML = "";

  studentsData.forEach((student) => {
    const studentDiv = document.createElement("div");
    studentDiv.classList.add("student");
    studentDiv.innerHTML = `
            <span>${student.name}</span>
            <label>
                <input type="checkbox" data-student-id="${student.id}">
                Present
            </label>
        `;
    attendanceContainer.appendChild(studentDiv);
  });
}

// Function to handle checkbox changes
function handleCheckboxChange(event) {
  const studentId = event.target.getAttribute("data-student-id");
  const isChecked = event.target.checked;

  // Simulate updating attendance in the database
  // Here, you'd typically send a request to the server to update the database
  console.log(
    `Student ID ${studentId} marked ${isChecked ? "present" : "absent"}`
  );
}

// Initialize the app
function init() {
  displayAttendance();

  const checkboxes = document.querySelectorAll("input[type='checkbox']");
  checkboxes.forEach((checkbox) => {
    checkbox.addEventListener("change", handleCheckboxChange);
  });
}

init();
