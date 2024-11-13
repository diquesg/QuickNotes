import Navbar from "../components/Navbar";

export default function RegisterScreen(){
    return(
        <div>
            <Navbar/>
            <div className="login-card-wrapper">
                <div className="login-card">
                    <div className="login-title">
                        <h1>QuickNotes</h1>
                        <h3>Registre-se para criar notas</h3>
                        <p>Já tem uma conta? <a href="/login">Faça login.</a></p>
                        <img src="src\assets\logo.png"/>
                    </div>
                    <form id="registro" method="POST">
                        <label for="email">E-mail:</label>
                        <input type="text" id="email" name="email" required/><br></br>
                        <label for="senha">Senha:</label>
                        <input type="text" id="senha" name="senha" required/><br></br>
                        <label for="senha">Confirmar Senha:</label>
                        <input type="text" id="senha" name="senha" required/><br></br>
                        <button className="button" type="submit" href="" id="button-form"><span>Registrar</span></button>
                    </form>
                </div>
            </div>
        </div>
    )
}