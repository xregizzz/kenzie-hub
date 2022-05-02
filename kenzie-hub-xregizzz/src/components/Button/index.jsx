import { Container } from "./styles";

function Button({ children, greySchema = false, ...rest }) {
  return (
    <Container greySchema={greySchema} type="button" {...rest}>
      {children}
    </Container>
  );
}

export default Button;
