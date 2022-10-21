import logo from './logo.svg';
import './App.css';
import profile from "./nits_hacks_images/download(1).png";
import email from "./nits_hacks_images/email.jpg";
import pass from "./nits_hacks_images/download.png"
function App() {
  return (
    <div className = "main">
      <div className = "sub-main">
        <div>
          <div className="imgs">
            <div className= "container-image">
              <img src={profile} alt="profile" className="profile"/>

            </div>

          </div>
          <div>
            <h1>Login Page</h1>
            <div>
              <img src={email} alt="email" className="email"/>
              <input type= "text" placeholder="user name" className="name"/>
            </div>
            <div className="second-input">
              <img src={pass} alt="pass" className="email"/>
              <input type= "text" placeholder="user name" className="name"/>
            </div>
           <div className="login-button">
           <button>Login</button>
           </div>
            <p className="link">
            <a href="#">Forgot password?</a>or<a href="#">Sign Up</a>
            </p>
          </div>
        </div>

      </div>

    </div>
  );
}

export default App;
