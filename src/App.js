import { useState } from "react";
import { Route } from "react-router-dom";
import { Routes } from "react-router-dom";

import "./App.css";
import SignUp from "./pages/SignUp";
import Login from "./pages/Login";
import Home from "./pages/Home";
import CompanyInfo from "./components/CompanyInfo";

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [showInfo, setShowInfo] = useState(false);

  const ShowInfoHandler = () => {
    setShowInfo(true);
  };
  const hideInfoHandler = () => {
    setShowInfo(false);
  };

  const loginHandler = () => {
    setIsLoggedIn(true);
  };
  return (
    <div className="App">
      {showInfo && <CompanyInfo onClose={hideInfoHandler} />}
      <Routes>
        <Route
          path="/"
          element={<SignUp onSignUp={loginHandler} onOpen={ShowInfoHandler} />}
        ></Route>
        <Route
          path="/login"
          element={<Login onLogin={loginHandler} onOpen={ShowInfoHandler} />}
        ></Route>
        {isLoggedIn && (
          <Route
            path="/home"
            element={<Home onOpen={ShowInfoHandler} />}
          ></Route>
        )}
      </Routes>
    </div>
  );
}

export default App;
