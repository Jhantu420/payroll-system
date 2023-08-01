const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");

const app = express();
const port = 7000;

app.use(express.json())
// Enable CORS
app.use(cors());

// Connect to MongoDB
mongoose.connect("mongodb://127.0.0.1:27017",{dbName:"Payrole"}).then((data)=>{
  console.log(`DataBase connected Sucessfully  with ${data.connection.host}`)
}).catch((error)=>{
  console.log(error)
})

// Create a schema for the user data
const userSchema = new mongoose.Schema({
  name: String,
  dob: Date,
  password: String,
  phoneNumber: String,
  age: Number,
  gender: String,
  profession: String,
});
const feedbackSchema = new mongoose.Schema({
  email: String,
  message: String,
});


// Create a model based on the schema

const bankusers = mongoose.model("bankusers", userSchema);
const Feedback = mongoose.model("Feedback", feedbackSchema);


// Handle POST request to create a new user
app.post("/createUser", async (req, res) => {
  try {
    // Retrieve the user data from the request body
    const { name, dob, email, phoneNumber, age, gender, profession, password,} = req.body;

    // Create a new user object
    const user = new bankusers({
      name,
      dob,
      email,
      phoneNumber,
      age,
      gender,
      profession,
      password,
    });

    // Save the user object to the database
    await user.save();

    res.status(200).json({ message: "User created successfully" });
  } catch (error) {
    console.error("Error creating user:", error);
    res.status(500).json({ error: "Failed to create user" });
  }
});

// Handle POST request to store feedback
app.post("/submitFeedback", async (req, res) => {
  try {
    // Retrieve the feedback data from the request body
    const { email, message } = req.body;

    // Create a new feedback object
    const feedback = new Feedback({
      email,
      message,
    });

    // Save the feedback object to the "feedback" collection in the database
    await feedback.save();

    res.status(200).json({ message: "Feedback submitted successfully" });
  } catch (error) {
    console.error("Error submitting feedback:", error);
    res.status(500).json({ error: "Failed to submit feedback" });
  }
});

// Start the server
app.listen(port, () => {
  console.log(`Server listening on port ${port}`);
});
// Handle GET request to fetch the total number of users
app.get("/getUsersCount", async (req, res) => {
  try {
   
    const users = await bankusers.countDocuments();


    const activeUsers = await bankusers.count({ IsActiveMember: 1 });


    const ZeroBalanceAccounts = await bankusers.count({ Balance: 0 });


    const CreditScore = await bankusers.count({ CreditScore:{$gt: 800}});


    res.status(200).json({users,activeUsers,ZeroBalanceAccounts,CreditScore});
    
  } catch (error) {
    console.error("Error fetching user count:", error);
    res.status(500).json({ error: "Failed to fetch user count" });
  }
});
