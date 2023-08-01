import React, { useState, useEffect, useRef } from "react";
import Dashboard from "./Dashboard";
import "./Login.css";

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showCreateAccountForm, setShowCreateAccountForm] = useState(false);
  const [loggedIn, setLoggedIn] = useState(false);
  const [name, setName] = useState("");
  const [dob, setDob] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [age, setAge] = useState("");
  const [gender, setGender] = useState("");
  const [profession, setProfession] = useState("");

  const createAccountFormRef = useRef(null);   //we declare a createAccountFormRef variable using the useRef hook and initialize it with null.
  useEffect(() => {
    const handleOutsideClick = (e) => {    //here e generate an Event Object
      if (
        createAccountFormRef.current && //reference to a specific DOM element (in this case, a div element) that is created and managed by the useRef hook.
        !createAccountFormRef.current.contains(e.target) // This is used to determine whether a click event occurred outside the create account form
      ) {
        setShowCreateAccountForm(false);
      }
    };
    document.addEventListener("click", handleOutsideClick);

    return () => {
      document.removeEventListener("click", handleOutsideClick);
    };
  }, []);

  const handleLogin = (e) => {
    e.preventDefault();
    // Perform user verification logic 
    if (name === "admin" && email === "jhantusamui97@gmail.com" && password === "admin") {
      setLoggedIn(true);
      alert("Login Successful....");
    } else {
      alert("Invalid credentials");
    }
    // Reset form fields
    setName("");
    setEmail("");
    setPassword("");
  };
  

  const handleCreateAccount = () => {
    setTimeout(() => {
      setShowCreateAccountForm(true);
    }, 0);
  };

  const handleCreateAccountSubmit = async (e) => {
    e.preventDefault();

    try {
      // Send an HTTP POST request to create a new user
      const response = await fetch("http://localhost:7000/createUser", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          name,
          dob,
          email,
          phoneNumber,
          age,
          gender,
          profession,
          password,
        }),
      });

      if (response.ok) {
        console.log("User created successfully");
        // Reset form fields
        setName("");
        setDob("");
        setEmail("");
        setPhoneNumber("");
        setAge("");
        setGender("");
        setProfession("");
        setPassword("");
        setShowCreateAccountForm(false);
      } else {
        console.error("Failed to create user");
      }
    } catch (error) {
      console.error("Error creating user:", error);
    }
  };
  if (loggedIn===true) {
    return <Dashboard />; 
  }


  return (
    <div className="login-container">
      {showCreateAccountForm ? (
        <div ref={createAccountFormRef}>
          <form className="login-form" onSubmit={handleCreateAccountSubmit}>
            <div className="form-group">
              <input
                type="text"
                className="form-control"
                placeholder="Name"
                value={name}
                onChange={(e) => setName(e.target.value)}
              />
            </div>
            <div className="form-group">
              <input
                type="date"
                className="form-control"
                placeholder="Date of Birth"
                value={dob}
                onChange={(e) => setDob(e.target.value)}
              />
            </div>
            <div className="form-group">
              <input
                type="text"
                className="form-control"
                placeholder="Phone Number"
                value={phoneNumber}
                onChange={(e) => setPhoneNumber(e.target.value)}
              />
            </div>
            <div className="form-group">
              <input
                type="number"
                className="form-control"
                placeholder="Age"
                value={age}
                onChange={(e) => setAge(e.target.value)}
              />
            </div>
            <div className="form-group">
              <select
                className="form-control-gen"
                value={gender}
                onChange={(e) => setGender(e.target.value)}
              >
                <option value="">Select Gender</option>
                <option value="male">Male</option>
                <option value="female">Female</option>
                <option value="other">Other</option>
              </select>
            </div>
            <div className="form-group">
              <input
                type="text"
                className="form-control"
                placeholder="Profession"
                value={profession}
                onChange={(e) => setProfession(e.target.value)}
              />
            </div>
            <div className="form-group">
              <input
                type="password"
                className="form-control"
                placeholder="Password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
            </div>
            <div className="form-group">
              <input
                type="email"
                className="form-control"
                placeholder="Email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>
            <button type="submit" className="btn btn-primary">
              Create Account
            </button>
          </form>
        </div>
      ) : (
        <form className="login-form" onSubmit={handleLogin}>
          <div className="form-group">
            <input
              type="text"
              className="form-control"
              placeholder="Enter Your Name"
              value={name}
              onChange={(e) => setName(e.target.value)}  //an event listener for the onChange event of an input field.
            />
          </div>
          <div className="form-group">
            <input
              type="email"
              className="form-control"
              placeholder="Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)} //an event listener for the onChange event of an input field. 
            />
          </div>
          <div className="form-group">
            <input
              type="password"
              className="form-control"
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}  //an event listener for the onChange event of an input field.  
            />
          </div>
          <button type="submit" className="btn btn-primary">
            Admin Login
          </button>
          <button
            type="button"
            className="btn btn-secondary"
            onClick={handleCreateAccount}
          >
            Create Account
          </button>
        </form>
      )}
    </div>
  );
}