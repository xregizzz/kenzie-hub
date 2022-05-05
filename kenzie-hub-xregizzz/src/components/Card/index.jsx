import { Container } from "./styles";

function Card({ name, status }) {
  return (
    <Container>
      <h1>{name}</h1>
      <p>{status}</p>
    </Container>
  );
}

export default Card;
