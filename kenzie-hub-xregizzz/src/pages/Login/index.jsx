import { Container, Content } from "./styles";
import Button from "../../components/Button";
import { useHistory } from "react-router-dom";

function Login() {
  const history = useHistory();

  const handleNavigation = (path) => {
    return history.push(path);
  };

  return (
    <Container>
      <h1>Kenzie Hub</h1>

      <Content>
        <form action="">
          <h2>Login</h2>
          <div>
            <label>Email</label>
            <input type="text" placeholder="Digite seu email" />
          </div>
          <div>
            <label>Senha</label>
            <input type="password" placeholder="Sigite sua Senha" />
          </div>
          <Button>Entrar</Button>
          <span>Ainda nao possui conta?</span>
          <Button greySchema onClick={() => handleNavigation("/signup")}>
            Cadastre-se
          </Button>
        </form>
      </Content>
    </Container>
  );
}

export default Login;
