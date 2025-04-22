import './Login.css';
// import navimg from './navbar image.jpg';
import Footer from '../Footer/Footer.jsx';
import ANavbar from "../Navbar/ANavbar.jsx";
import { useState } from 'react';
import axios from 'axios';
import { useNavigate } from "react-router-dom";
export default function Login (){

   const [email, setEmail]=useState("")
   const [password,setPassword]=useState("");
   const [errorMessage, setErrorMessage] = useState("");
   const navigate = useNavigate();

   const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;

   async function handleLogin(e) {
  e.preventDefault();

    if (!emailRegex.test(email)) {
      setErrorMessage("Please enter a valid email.");
      return;
    }
  try {
    const response=await axios.post("http://localhost:3000/auth/signin",{
        email,
        password
    });
    const data=response.data;
    if(response.status===200){
        localStorage.setItem("token",data.token);
        navigate("/home");
    }else{
        setErrorMessage(data.message || "Login failed");
    }
  } catch (error) {
    console.error(err);
    setErrorMessage("Something went wrong");
  }
   }

    return (
        <div className="outerdiv">
            < ANavbar />
               {/* <img src={navimg} /> */}
            <div className="log">
                <h1>Welcome Back</h1>
                
                <p>please login to access personalized pesticides information, crop specification, and more.</p>
                <br />
            <form onSubmit={handleLogin}>
                <div className="email">
                    <label htmlFor="email">Email</label><br />
                    <input type="email" placeholder="Enter Your Email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                    />
                </div>
                <br />
                <div className="password">
                    <label htmlFor="password">Password</label><br />
                    <input type="password" placeholder="Enter Password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    required
                    />
                </div>
                &nbsp;<a href="">Forgot Password?</a>
                <br /><br />
                {errorMessage && <p style={{ color: 'red' }}>{errorMessage}</p>}
                <button>Submit</button>
                <br />
                <br />
                <p id='bottom_line'>New to PestiGuide ?? <a href=""><b>Sign Up</b></a> now</p>
                <br />
            </form>
        </div>

        <Footer />
        </div>
        
       
    );
};