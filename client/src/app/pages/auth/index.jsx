import { useState, useRef, useEffect } from "react"
import { useSelector, useDispatch } from 'react-redux'
import { signUp, logIn } from "../../../features/auth/authSlice.js"
import { faCheck, faTimes, faInfoCircle } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import "./style.css"


const Auth = () => {

    const MAIL_REGEX = new RegExp('[a-z0-9]+@[a-z]+\\.[a-z]{2,3}')
    const firstNameRef = useRef()
    const errRef = useRef()
    const dispatch = useDispatch()

    const [isSignUp, setIsSignUp] = useState(false)

    const [firstName, setFirstName] = useState('')
    const [validFN, setValidFN] = useState(false)
    const [fnFocus, setFnFocus] = useState(false)

    const [lastName, setLastName] = useState('')
    const [validLN, setValidLN] = useState(false)
    const [lnFocus, setLnFocus] = useState(false)

    const [userName, setUserName] = useState('')
    const [validUN, setValidUN] = useState(false)
    const [unFocus, setUnFocus] = useState(false)

    const [pwd, setPwd] = useState('')
    const [validPwd, setValidPwd]= useState(false)    
    const [pwdFocus, setPwdFocus] = useState(false)

    const [matchPwd, setMatchPwd] = useState('')
    const [validMatch, setValidMatch] = useState(false)
    const [matchFocus, setMatchFocus] = useState(false)

    const [errMessage, setErrorMessage] = useState('')
    const [success, setSuccess] = useState(false)


    //set focus on firstName field onload
    useEffect(() => {
        firstNameRef.current.focus()
    }, [])

    useEffect(() => {
        const validEmail = MAIL_REGEX.test(userName)
        console.log(validEmail, userName)
    }, [MAIL_REGEX, userName])

    useEffect(() => {
        const match = pwd === matchPwd
        setValidMatch(match)
    }, [matchPwd, pwd])

    useEffect(() => {
        setErrorMessage('')
    }, [firstName, lastName, userName, pwd, matchPwd])

    const handleChange = (e) => {
        //setData({...data, [e.target.name]: e.target.value})
    }

    /*const handleSubmit =(e) => {
        e.preventDefault()
    
        if(isSignUp) {

            if(!validEmail.test(data.userName)) {
                setValidUserName(false)
            } else {
                setValidUserName(true)
            }
            if (data.password !== data.confirm) {
                setConfirmPassword(false)
            } else {
                dispatch(signUp(data))
            }
        } else {
            if((data.userName.length !== 0) && (data.password.length !== 0)) {
                dispatch(logIn)
            } else {
                setIncompleteForm(true)
            }
        }
    }

    const resetForm = () => {
        setValidUserName(true)
        setConfirmPassword(true)
        setData({firstName:"", lastName:"", userName:"", password:"", confirm:""})
    }*/

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
            <form className="info-form auth-form" action="">

                <h3>{isSignUp ? "Sign up" : "Login"}</h3>

                <p ref={errRef} className={errMessage? "errmsg" : "offscreen"} aria-live="assertive"></p>

                {isSignUp && (
                    <div>
                        <label 
                            htmlFor="firstname" 
                            id="firstname" 
                            ref={firstNameRef} 
                            autoComplete="off" 
                            onChange={e => setFirstName(e.target.value)}
                            required
                            aria-invalid={validFN? "false":"true"}
                            onFocus={() => setFnFocus(true)}
                            onBlur={() => setFnFocus(false)}
                    >Firstname</label>
                        <input className="info-input" type="text" placeholder="First name" name="firstName" onChange={handleChange} />
                        <input className="info-input" type="text" placeholder="Last name" name="lastName" onChange={handleChange} />
                    </div>

                )}

                <div>
                    <label 
                        htmlFor="username" 
                        id="username" 
                        autoComplete="off" 
                        onChange={e => setUserName(e.target.value)}
                        required
                        aria-invalid={validUN? "false":"true"}
                        aria-describedby="note"
                        onFocus={() => setUnFocus(true)} 
                        onBlur={() => setUnFocus(false)}
                    />
                    <p id="note" className={pwdFocus && pwd &&!validPwd ? "instructions" : "offscreen"}>
                        <FontAwesomeIcon icon={faInfoCircle} />
                        Must contain "@" <br />
                        an extension as ".com", or ".fr"...
                    </p>
                    <input className="info-input" type="text" name="userName" placeholder="Username" onChange={handleChange} />
                </div>
                <div>
                    <input className="info-input" type="password" name="password" placeholder="Password" onChange={handleChange} />
                    {isSignUp && (
                            <input className="info-input" type="password" name="confirm" placeholder="Confirm password" onChange={handleChange} />
                    )}

                </div>

                {/*isSignUp && (
                    validUserName? "" : 
                        <>
                            <div>
                                <span>
                                    * Username invalid format
                                </span>
                            </div>                        
                        </>
                )*/}
                {/*isSignUp && (
    
                    confirmPassword? "" :
                        <>
                            <div>
                                <span>
                                    * Confirm password is not same
                                </span>
                            </div>
                        </>
                )}
                {incompleteForm && (
                    <span>* Incomplete form</span>
                )*/}




                <div>
                    <span className="account">
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