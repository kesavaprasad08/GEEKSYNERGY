import { useState } from "react";
import { Route } from "react-router-dom";
import { Routes } from "react-router-dom";

import "./App.css";
// import Login from "./pages/Login";
import SignUp from "./pages/SignUp";
import Login from "./pages/Login";
import Home from "./pages/Home";

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [showInfo,setShowInfo]=useState(false);

  const ShowInfoHandler=()=>{
    setShowInfo(true)
  }
const hideInfoHandler=()=>{
  setShowInfo(false);
}

  const loginHandler = () => {
    setIsLoggedIn(true);
  };
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<SignUp onSignUp={loginHandler} />}></Route>
        <Route
          path="/login"
          element={<Login onLogin={loginHandler} />}
        ></Route>
        {isLoggedIn && <Route path="/home" element={<Home />}></Route>}
      </Routes>
    </div>
  );
}

export default App;
