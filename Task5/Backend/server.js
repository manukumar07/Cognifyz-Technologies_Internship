const express = require("express");
const bodyParser = require("body-parser");

const PORT = 5000; //define a port

const app = express();
app.use(bodyParser.json());

// CRUD Operation performed on API
// GET all users
app.get("/api/users", async (req, res) => {
  const users = await fetchUsers();
  res.json(users);
});

// GET single user by ID
app.get("/api/users/:id", async (req, res) => {
  const userId = req.params.id;
  const users = await fetchUsers();
  const user = users.find((user) => user.id.toString() === userId);
  if (!user) {
    res.status(404).json({ message: "User not found" });
  } else {
    res.json(user);
  }
});

// POST a new user
app.post("/api/users", async (req, res) => {
  try {
    const newUser = req.body;
    const response = await axios.post(
      "https://jsonplaceholder.typicode.com/users",
      newUser
    );
    res.status(201).json(response.data);
  } catch (error) {
    console.error("Error adding user:", error.message);
    res.status(500).json({ message: "Error adding user" });
  }
});

// PUT update an existing user
app.put("/api/users/:id", async (req, res) => {
  try {
    const userId = req.params.id;
    const updatedUser = req.body;
    const response = await axios.put(
      `https://jsonplaceholder.typicode.com/users/${userId}`,
      updatedUser
    );
    res.json(response.data);
  } catch (error) {
    console.error("Error updating user:", error.message);
    res.status(500).json({ message: "Error updating user" });
  }
});

// DELETE an existing user
app.delete("/api/users/:id", async (req, res) => {
  try {
    const userId = req.params.id;
    await axios.delete(`https://jsonplaceholder.typicode.com/users/${userId}`);
    res.status(204).send();
  } catch (error) {
    console.error("Error deleting user:", error.message);
    res.status(500).json({ message: "Error deleting user" });
  }
});
//
// listen port
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
