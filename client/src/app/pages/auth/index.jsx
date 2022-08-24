import "./style.css"

function Login() {
    return (
        <div className="a-right">
            <form className="info-form auth-form">
                <h3>Login</h3>
                <div>
                    <input className="info-input" type="text" placeholder="username" name="username" />
                </div>
                <div>
                    <input className="info-input" type="password" name="password" placeholder="Password" />
                </div>
                <div>
                    <span>Don't have an account? Sign up!</span>
                    <button className="button info-button">Login</button>
                </div>
            </form>
        </div>
    )
}

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
    return (
        <div className="auth">
            <div className="a-left">
                <img src="img/logo.png" alt="" />
                <div className="webname">
                    <h1>Social Media</h1>
                    <h6>Explore the ides throughout the world</h6>
                </div>
            </div>

            <h1>Form</h1>

            {/*<SignUp />*/}
            <Login />
        </div>
    )
}


export default Auth