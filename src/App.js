import "antd/dist/antd.css";
import React from "react";
import "./App.css";
import AuthContext from "./contexts/AuthContext";
import Routes from "./routes";
import "./styles/utils.scss";
function App() {
  return (
    <AuthContext>
      <div className="App">
        <Routes />
      </div>
    </AuthContext>
  );
}

export default App;
