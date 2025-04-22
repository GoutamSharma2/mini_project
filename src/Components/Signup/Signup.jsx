import './Signup.css';
// import navimg from './navbar image.jpg';
import Footer from '../Footer/Footer.jsx';
import ANavbar from "../Navbar/ANavbar.jsx";

export default function Signup (){
    return (
        <div className="outerdiv">
            < ANavbar />
               {/* <img src={navimg} /> */}
            <div className="log">
                <h1>Welcome Back</h1>
                
                <p>please Signup to access personalized pesticides information, crop specification, and more.</p>
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
            
            </form>
        </div>

        <Footer />
        </div>
        
       
    );
};