import { useState } from "react"
import "./style.css"


const Auth = () => {
    const [isSignUp, setIsSignUp] = useState(false)
    const [data, setData] = useState({
        firstName:"", lastName:"", userName:"", password:"", confirm:""
    })
    const [userNameFormat, setUserNameFormat] = useState(true)
    const [confirmPassword, setConfirmPassword] = useState(true)

    const validEmail = new RegExp('[a-z0-9]+@[a-z]+\\.[a-z]{2,3}')

    const handleChange = (e) => {
        setData({...data, [e.target.name]: e.target.value})
    }

    const handleSubmit =(e) => {
        e.preventDefault()
    
        if(isSignUp) {

            if(!validEmail.test(data.userName)) {
                setUserNameFormat(false)
            } else {
                setUserNameFormat(true)
            }
            if (data.password !== data.confirm) {
                setConfirmPassword(false)
            } else {
                setConfirmPassword(true)
            }
        }
    }

    const resetForm = () => {
        setUserNameFormat(true)
        setConfirmPassword(true)
        setData({firstName:"", lastName:"", userName:"", password:"", confirm:""})
    }

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

            {/*Right Side */}
            <div className="a-right">
            <form className="info-form auth-form" action="" onSubmit={handleSubmit}>

                <h3>{isSignUp ? "Sign up" : "Login"}</h3>

                {isSignUp && (
                    <div>
                        <input className="info-input" type="text" placeholder="First name" name="firstName" value={data.firstName} onChange={handleChange} />
                        <input className="info-input" type="text" placeholder="Last name" name="lastName" value={data.lastName} onChange={handleChange} />
                    </div>

                )}

                <div>
                    <input className="info-input" type="text" name="userName" placeholder="Username" value={data.userName} onChange={handleChange} />
                </div>
                <div>
                    <input className="info-input" type="password" name="password" placeholder="Password" value={data.password}  onChange={handleChange} />
                    {isSignUp && (
                        <input className="info-input" type="password" name="confirm" placeholder="Confirm password" value={data.confirm} onChange={handleChange} />
                    )}

                </div>

                {isSignUp && (
                    userNameFormat? "" : 
                        <>
                            <div>
                                <span>
                                    * Username invalid format
                                </span>
                            </div>                        
                        </>
                )}
                {isSignUp && (
    
                    confirmPassword? "" :
                        <>
                            <div>
                                <span>
                                    * Confirm password is not same
                                </span>
                            </div>
                        </>
                )}




                <div>
                    <span className="account" onClick={() => {setIsSignUp(prev => !prev); resetForm()}}>
                        {isSignUp ? "Already have an account. Login!" : "Don't have an account. Sign Up"}
                    </span>
                </div>

                <button className="button info-button" type="submit">{ isSignUp ? "Signup" : "Log In"}</button>
            </form>
        </div>
        </div>
    )
}


export default Auth