import './Login.css';
// import navimg from './navbar image.jpg';
import Footer from '../Footer/Footer.jsx';
import ANavbar from "../Navbar/ANavbar.jsx";

export default function Login (){
    return (
        <div className="outerdiv">
            < ANavbar />
               {/* <img src={navimg} /> */}
            <div className="log">
                <h1>Welcome Back</h1>
                
                <p>please login to access personalized pesticides information, crop specification, and more.</p>
                <br />
            <form action="">
                <div className="email">
                    <label htmlFor="email">Email</label><br />
                    <input type="emial" placeholder="Enter Your Email"/>
                </div>
                <br />
                <div className="password">
                    <label htmlFor="password">Password</label><br />
                    <input type="password" placeholder="Enter Password"/>
                </div>
                &nbsp;<a href="">Forgot Password?</a>
                <br /><br />
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