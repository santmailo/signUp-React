import "./App.css";
import SignUpForm from "./Components/SignUpForm.js";

function App() {
  return (
    <div className="container">
      <div className="left">
        <div className="text">
          <p>Find 3D Objects, Mockups</p>
          <p>and Ilustration here</p>
        </div>
        <img src="./images/Abstraction.png" alt="logo" />
      </div>
      <SignUpForm />
    </div>
  );
}

export default App;
