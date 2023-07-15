import React, { useState } from "react";

function SignUpForm() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [cnfPassword, setCnfPassword] = useState("");
  const [err,setErr] = useState(false);
  const [responseText,setResponseText]=useState("");
  

  const handleBtnClick = () => {
    setErr(false);
    setResponseText("");
    if(name==="" || email==="" ||password==="" ||cnfPassword==="" ){
      setErr(true);
      setResponseText("Error : Please make sure to fill all fields");
    }else if(name.trim().split(" ").length!=1){
      setErr(true);
      setResponseText("Error : Please enter FullName");
    }else if(!email.includes("@")){
      setErr(true);
      setResponseText("Error : Please enter a valid email consisting '@'");
    }else if(password!==cnfPassword){
      setErr(true);
      setResponseText("Error : Please make sure your password and confirmPassword matches");
    }else{
      setErr(false);
      setResponseText("Successfully Created!");
    }
    console.log(name,email,password,cnfPassword);
  };

  return (
    <div className="inner-container">
      <h2>Create Account</h2>
      <div className="socialLink">
        <div className="link">
          <img src="./images/google.png" alt="logo" />
          <span>Sign up with Google</span>
        </div>
        <div className="link">
          <img src="./images/facebook.png" alt="logo" />
          <span>Sign up with Facebook</span>
        </div>
      </div>
      <p className="separator">-OR-</p>
      <div className="inp">
        <input type="text" onChange={(e)=>setName(e.target.value)} placeholder="Full Name" />
        <input type="email"onChange={(e)=>setEmail(e.target.value)} placeholder="Email Address" />
        <input type="password" onChange={(e)=>setPassword(e.target.value)} placeholder="Password" />
        <input type="password" onChange={(e)=>setCnfPassword(e.target.value)}placeholder="Confirm Password" />
        <button className="btn" onClick={handleBtnClick}>Create Account</button>
      </div>
      <div className="display">
        <span className={err ? "error":"success"}>{responseText}</span>
      </div>
    </div>
  );
}

export default SignUpForm;
