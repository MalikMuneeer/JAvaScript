const express = require("express");
const app = express();
const path = require("path");
const bodyParser = require("body-parser");

const PORT = process.env.PORT || 3000;

app.use(bodyParser.json());

// Serve static files
app.use(express.static(path.join(__dirname, "public")));

// Sample route to update attendance (simulated)
app.post("/updateAttendance", (req, res) => {
  const { studentId, present } = req.body;

  // Simulate updating attendance in the database
  // Here, you'd typically update the JSON file or connect to a real database
  console.log(
    `Student ID ${studentId} marked ${present ? "present" : "absent"}`
  );

  res.sendStatus(200);
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
