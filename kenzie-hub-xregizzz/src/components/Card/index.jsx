import { Container } from "./styles";

function Card({ name, status, id }) {
  return (
    <Container id={id}>
      <h1>{name}</h1>
      <p>{status}</p>
    </Container>
  );
}

export default Card;
