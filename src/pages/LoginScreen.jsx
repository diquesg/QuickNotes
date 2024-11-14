import Navbar from "../components/Navbar";
import { Link } from "react-router-dom"

export default function LoginScreen(){
    return(
        <div>
            <Navbar/>
            <div className="login-card-wrapper">
                <div className="login-card">
                    <div className="login-title">
                        <h1>QuickNotes</h1>
                        <h3>Faça login para voltar às suas notas</h3>
                        <p>Não tem registro? <Link to="/registro">Crie uma conta.</Link></p>
                        <img src="src\assets\logo.png" id="login-logo"/>
                    </div>
                    <form id="login" method="POST">
                        <label for="email">E-mail:</label>
                        <input type="text" id="email-login" name="email" required/><br></br>
                        <label for="senha">Senha:</label>
                        <input type="text" id="senha-login" name="senha" required/><br></br>
                        <button className="button" type="submit" href="" id="button-form"><span>Login</span></button>
                    </form>
                </div>
            </div>
        </div>
    )
}