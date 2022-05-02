import { Container, Content } from "./styles";
import Button from "../../components/Button";

function Signup() {
  return (
    <Container>
      <div>
        <h1>Kenzie Hub</h1>
        <button >Voltar</button>
      </div>

      <Content>
        <form action="">
          <h2>Crie sua conta</h2>
          <span>Rapido e gratis, vamos nessa</span>
          <div>
            <label>Nome</label>
            <input type="text" placeholder="Digite aqui seu nome" />
          </div>
          <div>
            <label>Email</label>
            <input type="text" placeholder="Digite aqui seu email" />
          </div>
          <div>
            <label>Senha</label>
            <input type="password" placeholder="Digite aqui sua senha" />
          </div>
          <div>
            <label>Confirmar Senha</label>
            <input type="password" placeholder="Digite novamente sua senha" />
          </div>
          <div>
            <label>Selecionar Modulo</label>
            <select name="" id="">
              <option value="primeiro">Primeiro Modulo</option>
              <option value="primeiro">Segundo Modulo</option>
              <option value="primeiro">Terceiro Modulo</option>
              <option value="primeiro">Quarto Modulo</option>
              <option value="primeiro">Quinto Modulo</option>
            </select>
          </div>
          <Button>Cadastrar</Button>
        </form>
      </Content>
    </Container>
  );
}

export default Signup;
