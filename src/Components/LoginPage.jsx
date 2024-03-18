import { useState } from 'react'
import './LoginPage.css'

function Loginsignup(){

    const[action, setAction] = useState('Sign Up')

    return(
        <div className="container">
            <div className="header">
                <div className="text">{action}</div>
                <div className="underline"></div>
            </div>
            <div className="inputs">

                {action === "Login" ? <div></div>: <div className="input">
                    <input type="text" placeholder="Name" />
                </div> }

                

                <div className="input">
                    <input type="email" placeholder="Email" />
                </div>

                <div className="input">
                    <input type="password" placeholder="Password" />
                </div>
            </div>
            {action === "Sign Up" ? <div></div> : <div className="forgot-password">Forgot password ?<span> <a href="C:\Users\Admin\SignUpPage\microapp\src\Components\Clickhere.js.js">Click here</a></span></div>}
            
            <div className="submit-container">
                <div className={action === 'Sign Up' ? 'submit' : 'submit grey' } onClick={()=>setAction("Sign Up")}>Sign Up</div>
                <div className={action === 'Login' ? 'submit' : 'submit grey'  } onClick={()=>setAction("Login")}>Login</div>
            </div>
        </div>
    )

}

export default Loginsignup