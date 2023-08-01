import React, { useEffect, useState } from "react";
import "./Dashboard.css";

const Dashboard = () => {
  const [userCount, setUserCount] = useState(0);

  const [activeAccounts, setActiveAccounts] = useState(0);

  const [ZeroBalanceAccounts, setZeroBalanceAccounts] = useState(0);

  const [CreditScore, setCreditScore] = useState(0);


  const getUsersCount = async () => {
    const response = await fetch("http://localhost:7000/getUsersCount");
    if (response.ok) {
      const { users, activeUsers, ZeroBalanceAccounts, CreditScore } =
        await response.json();
      console.log("Active Accounts:", "activeUsers", "CreditScore");
      setUserCount(users);
      setActiveAccounts(activeUsers);
      setZeroBalanceAccounts(ZeroBalanceAccounts);
      setCreditScore(CreditScore);
    } else {
      alert("Failed to fetch user count");
    }
  };

  useEffect(() => {
    getUsersCount();
  }, []);

  // const handleLogout = () => {
  //   // Perform logout actions, e.g., clearing session, tokens, etc.
  //   // Then navigate to the login page
  //   navigate("/Login");
  // };
  return (
    <div className="main">
      <p className="lead">Financial Chronicle 
      👇</p>
      <div className="main-box">
        <div className="upper">
          <div className="col-xl-6 py-2">
            <div className="card bg-success text-white h-100">
              <div className="card-body bg-success card-content">
                <div className="rotate">
                  <i className="fa fa-user fa-4x"></i>
                </div>
                <h6 className="text-uppercase">Total Accounts</h6>
                <h1 className="display-4">{userCount}</h1>
              </div>
            </div>
          </div>
          <div className="col-xl-6 py-2">
            <div className="card text-white bg-danger h-100">
              <div className="card-body bg-danger card-content">
                <div className="rotate">
                  <i className="fa-brands fa-creative-commons-by fa-4x "></i>
                  <i
                    className="fas fa-check fa-4x base-icon overlay-icon"
                    style={{ color: "green" }}
                  ></i>
                </div>
                <h6 className="text-uppercase">Active Accounts</h6>
                <h1 className="display-4">{activeAccounts}</h1>
              </div>
            </div>
          </div>
        </div>

        <div className="lower">
          <div className="col-xl-6 py-2">
            <div className="card text-white bg-info h-100">
              <div className="card-body bg-info card-content">
                <div className="rotate">
                  <i className="fa-brands fa-creative-commons-zero fa-4x"></i>
                </div>
                <h6 className="text-uppercase">Zero(0) Balance Accounts</h6>
                <h1 className="display-4">{ZeroBalanceAccounts}</h1>
              </div>
            </div>
          </div>
          <div className="col-xl-6 py-2">
            <div className="card text-white bg-warning h-100">
              <div className="card-body card-content">
                <div className="rotate">
                  <i className="fa-solid fa-thumbs-up fa-4x"></i>
                </div>
                <h6 className="text-uppercase">Good CreditScore</h6>
                <h1 className="display-4">{CreditScore}</h1>
              </div>
            </div>
          </div>
        </div>
      </div>
      <hr />
      {/* <button onClick={handleLogout}>Logout</button> */}
    </div>
  );
};

export default Dashboard;

