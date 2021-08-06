import './register.css'

export default function Register() {
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
                    <input placeholder="Nombre de Usuario" className="loginInput" />
                    <input placeholder="Email" className="loginInput" />
                    <input placeholder="Password" className="loginInput" />
                    <input placeholder="Repite tu Password" className="loginInput" />
                    <button className="loginButton">Registrate</button>
                    <button className="loginRegisterButton">Entrar a tu Cuenta Aqui</button>
                </div>
            </div>
          </div>  
        </div>
    )
}