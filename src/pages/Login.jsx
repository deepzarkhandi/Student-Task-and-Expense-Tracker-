import "./Login.css"
import { useState } from "react"
import axios from "axios"

export default function Login(){

const [email,setEmail] = useState("")
const [password,setPassword] = useState("")

const login = async(e)=>{
  e.preventDefault()

  await axios.post("http://localhost:5000/api/auth/login",{email,password})

  alert("Login success")
}

return(

<div className="login-container">

  <div className="login-card">

    <h1 className="login-title">
      Welcome Back
    </h1>

    <form onSubmit={login} className="login-form">

      <input
        type="email"
        placeholder="Email"
        className="login-input"
        onChange={(e)=>setEmail(e.target.value)}
      />

      <input
        type="password"
        placeholder="Password"
        className="login-input"
        onChange={(e)=>setPassword(e.target.value)}
      />

      <button className="login-btn">
        Login
      </button>

    </form>

  </div>

</div>

)

}