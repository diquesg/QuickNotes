import Navbar from "../components/Navbar";

export default function LoginScreen(){
    return(
        <div>
            <Navbar/>
            <div className="login-card-wrapper">
                <div className="login-card">
                    <h1>Faça login para criar notas</h1>
                    <p>Não tem registro? <a href="">Crie uma conta.</a></p>
                    <form>
                        <label for="email">E-mail:</label>
                        <input type="text" id="email" name="email"/><br></br><br></br>
                        <label for="senha">Senha:</label>
                        <input type="text" id="senha" name="senha"/><br></br>
                        <button className="button" href="" id="button-form"><span>Log-in</span></button>
                    </form>
                </div>
            </div>
        </div>
    )
}