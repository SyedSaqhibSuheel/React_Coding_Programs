import { useState } from "react"

export default function App(){

  const[name, setName] = useState("");
  const[email, setEmail] = useState("");
  const[password, setPassword] = useState("");
  const[confirmPassword, setConfirmPassword] = useState("");

  const handleSubmit =(e)=>{

    e.preventDefault()


    if(name === "" || email === "" || password === "" || confirmPassword === ""){
      alert("All fields are required")
    }
    else if(!/\S+@\S+\.\S+/.test(email)){
      alert("Invalid Email")
    }
    else if(password.length<6){
      alert("Password must be of at least 6 character")
    }
    else if(confirmPassword !== password){
      alert("Password do not match")
    }
    else{
      alert("Registration Done")

      setName("")
      setEmail("")
      setPassword("")
      setConfirmPassword("")
    }
  }



  return(
    <div style={{textAlign:"center", marginTop:"200px"}}>
      <form onSubmit={handleSubmit}>

        <div style={{marginBottom:"10px"}}>
        <input
        type="text"
        placeholder="Enter your name"
        value={name}
        onChange={(e) => setName(e.target.value)}
        style={{padding:"10px", width:"200px"}}
        />
        </div>
        
        <div style={{marginBottom:"10px"}}>
        <input
        type="email"
        placeholder="Enter your Email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        style={{padding:"10px", width:"200px"}}
        />
        </div>

        <div style={{marginBottom:"10px"}}>
        <input
        type="password"
        placeholder="Enter your password"
        value={password}
        onChange={(e) => setPassword (e.target.value)}
        style={{padding:"10px", width:"200px"}}
        />
        </div>

        <div style={{marginBottom:"10px"}}>
        <input
        type="password"
        placeholder="Confirm Password"
        value={confirmPassword}
        onChange={(e) => setConfirmPassword (e.target.value)}
        style={{padding:"10px", width:"200px"}}
        />
        </div>
        
        <button type="submit" style={{padding:"10px", width:"200px", backgroundColor:"rgb(60, 179, 113)"}}>
          Register
          
        </button>
      </form>


    </div>
    
    
  )
}