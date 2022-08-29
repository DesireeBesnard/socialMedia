import { useState } from "react"
import "./style.css"


function SignUp() {
    return (
        <div className="a-right">
            <form className="info-form auth-form" action="">

                <h3>Sign up</h3>

                <div>
                    <input className="info-input" type="text" placeholder="First name" name="Firstname" />
                    <input className="info-input" type="text" placeholder="Last name" name="Lastname" />
                </div>
                <div>
                    <input className="info-input" type="text" name="username" placeholder="Username" />
                </div>
                <div>
                    <input className="info-input" type="password" name="password" placeholder="Password" />
                    <input className="info-input" type="password" name="confirm" placeholder="Confirm password" />
                </div>

                <div>
                    <span className="account">Already have an account. Login!</span>
                </div>

                <button className="button info-button" type="submit">Signup</button>
            </form>
        </div>
    )
}

const Auth = () => {
    const [isSignUp, setIsSignUp] = useState(false)
    return (
        <div className="auth">
            {/*Left Side */}
            <div className="a-left">
                <img src="img/logo.png" alt="" />
                <div className="webname">
                    <h1>Social Media</h1>
                    <h6>Explore the ides throughout the world</h6>
                </div>
            </div>

            {/*<SignUp />*/}

            {/*Right Side */}
            <div className="a-right">
            <form className="info-form auth-form" action="">

                <h3>{isSignUp ? "Sign up" : "Login"}</h3>

                {isSignUp && (
                    <div>
                        <input className="info-input" type="text" placeholder="First name" name="Firstname" />
                        <input className="info-input" type="text" placeholder="Last name" name="Lastname" />
                    </div>

                )}

                <div>
                    <input className="info-input" type="text" name="username" placeholder="Username" />
                </div>
                <div>
                    <input className="info-input" type="password" name="password" placeholder="Password" />
                    {isSignUp && (
                        <input className="info-input" type="password" name="confirm" placeholder="Confirm password" />
                    )}

                </div>

                <div>
                    <span className="account" onClick={() => setIsSignUp(prev => !prev)}>{isSignUp ? "Already have an account. Login!" : "Don't have an account. Sign Up"}</span>
                </div>

                <button className="button info-button" type="submit">{ isSignUp ? "Signup" : "Log In"}</button>
            </form>
        </div>
        </div>
    )
}


export default Auth