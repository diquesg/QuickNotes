import Navbar from "../components/Navbar";

export default function LoginScreen(){
    return(
        <div>
            <Navbar/>
            <div className="login-card-wrapper">
                <div className="login-card">
                    <h1>Crie sua conta para criar notas.</h1>
                    <form id="registro" method="POST">
                        <label for="email">E-mail:</label>
                        <input type="text" id="email" name="email" placeholder="Digite seu e-mail." required/><br></br>
                        <label for="senha">Senha:</label>
                        <input type="text" id="senha" name="senha" placeholder="Digite sua senha." required/><br></br>
                        <label for="senha">Confirmar Senha:</label>
                        <input type="text" id="senha" name="senha" placeholder="Confirme sua senha." required/><br></br>
                        <button className="button" type="submit" href=""><span>Registrar</span></button>
                    </form>
                </div>
            </div>
        </div>
    )
}