import { Container, Content } from "./styles";
import Button from "../../components/Button";
import { useHistory, Redirect } from "react-router-dom";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { useForm } from "react-hook-form";
import api from "../../services/api";
import { toast } from "react-toastify";

function Login({ authenticated, setAuthenticated }) {
  const schema = yup.object().shape({
    email: yup
      .string()
      .email(" - Email invalido")
      .required(" - Campo obrigatório"),
    password: yup
      .string()
      .min(6, " - Minimo 5 digitos")
      .required(" - Campo obrigatório"),
  });

  const history = useHistory();

  const handleNavigation = (path) => {
    return history.push(path);
  };

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({ resolver: yupResolver(schema) });

  function onSubmitFunction(data) {
    console.log(data);
    api
      .post("/sessions", data)
      .then((response) => {
        const { token, user } = response.data;
        localStorage.setItem("@KenzieHub:token", JSON.stringify(token));
        localStorage.setItem("@KenzieHub:user", JSON.stringify(user));


        setAuthenticated(true);

        return history.push("/dashboard");
      })
      .catch((err) => toast.error("Email ou senha invalidos"));
  }

  if (authenticated) {
    return <Redirect to="/dashboard" />;
  }

  return (
    <Container>
      <h1>Kenzie Hub</h1>

      <Content>
        <form onSubmit={handleSubmit(onSubmitFunction)}>
          <h2>Login</h2>
          <div>
            <label>
              Email <span>{errors.email?.message}</span>{" "}
            </label>
            <input
              type="text"
              placeholder="Digite seu email"
              {...register("email")}
            />
          </div>
          <div>
            <label>
              Senha <span> {errors.password?.message}</span>{" "}
            </label>
            <input
              type="password"
              placeholder="Sigite sua Senha"
              {...register("password")}
            />
          </div>
          <Button type="submit">Entrar</Button>
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
