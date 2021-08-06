import './login.css'

export default function Login() {
    return (
        <div className='login'>
            <div className="loginWrapper">
            <div className="loginleft">
                <h3 className="loginlogo">Social Example React JS</h3>
                <span className="loginDesc">
                Conéctate con amigos y el mundo que te rodea...
                </span>
            </div>
            <div className="loginright">
                <div className="loginBox">
                    <input placeholder="email" className="loginInput" />
                    <input placeholder="password" className="loginInput" />
                    <button className="loginButton">Login</button>
                    <span className='loginForgot'>Olvidaste tu Contraseña?</span>
                    <button className="loginRegisterButton">Crea tu Cuenta Aqui</button>
                </div>
            </div>
          </div>  
        </div>
    )
}
