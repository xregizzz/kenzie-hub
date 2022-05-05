import { Container } from "./styles";
import { useHistory } from "react-router-dom";

function Header({ setAuthenticated }) {
  const history = useHistory();

  function exit() {
    localStorage.clear();
    setAuthenticated(false);
    history.push("/");
  }

  return (
    <Container>
      <h1>Kenzie Hub</h1>
      <button onClick={exit}>Sair</button>
    </Container>
  );
}

export default Header;
