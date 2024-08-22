// ...

// Function to handle checkbox changes
async function handleCheckboxChange(event) {
  const studentId = event.target.getAttribute("data-student-id");
  const isChecked = event.target.checked;

  // Update attendance in the database through the server
  try {
    await fetch("/updateAttendance", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        studentId: studentId,
        present: isChecked,
      }),
    });

    console.log(
      `Student ID ${studentId} marked ${isChecked ? "present" : "absent"}`
    );
  } catch (error) {
    console.error("Error updating attendance:", error);
  }
}

// ...
