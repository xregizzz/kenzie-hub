import { Container, Content } from "./styles";
import Button from "../../components/Button";
import { useForm } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import api from "../../services/api";
import { toast } from "react-toastify";
import { useHistory, Redirect } from "react-router-dom";

function Signup({ authenticated }) {
  const schema = yup.object().shape({
    name: yup
      .string()
      .required(" - Campo obrigatório")
      .matches(/^[aA-zZ\s]+$/, " - Apenas letras são aceitas neste campo"),
    email: yup
      .string()
      .email(" - Email invalido")
      .required(" - Campo obrigatório"),
    bio: yup.string().required(" - Campo obrigatório"),
    contact: yup.string().required(" - Campo obrigatório"),
    password: yup
      .string()
      .min(6, " - Minimo 5 digitos")
      .required(" - Campo obrigatório"),
    passwordConfirm: yup
      .string()
      .required(" - Campo obrigatório")
      .oneOf([yup.ref("password"), null], " - Senhas sao diferentes"),
    course_module: yup.string().required(" - Campo obrigatório"),
  });

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({ resolver: yupResolver(schema) });

  const history = useHistory();

  function onSubmitFunction({
    name,
    email,
    bio,
    contact,
    password,
    course_module,
  }) {
    const user = { name, email, bio, contact, password, course_module };
    api
      .post("/users", user)
      .then((response) => {
        toast.success("Conta criada com sucesso!");
        return history.push("/");
      })
      .catch((err) => toast.error("Ops! Algo deu errado"));
  }

  if (authenticated) {
    return <Redirect to="/dashboard" />;
  }

  return (
    <Container>
      <div>
        <h1>Kenzie Hub</h1>
        <button>Voltar</button>
      </div>

      <Content>
        <form onSubmit={handleSubmit(onSubmitFunction)}>
          <h2>Crie sua conta</h2>
          <span>Rapido e gratis, vamos nessa</span>
          <div>
            <label>
              Nome <span> {errors.name?.message}</span>
            </label>
            <input
              name="name"
              type="text"
              placeholder="Digite aqui seu nome"
              {...register("name")}
            />
          </div>
          <div>
            <label>
              Email <span>{errors.email?.message}</span>{" "}
            </label>
            <input
              name="email"
              type="text"
              placeholder="Digite aqui seu email"
              {...register("email")}
            />
          </div>
          <div>
            <label>
              Bio <span>{errors.bio?.message}</span>
            </label>
            <input
              name="bio"
              type="text"
              placeholder="Diga um pouco sobre voce"
              {...register("bio")}
            />
          </div>
          <div>
            <label>
              Contato <span> {errors.contact?.message} </span>
            </label>
            <input
              name="contact"
              type="text"
              placeholder="Telefone ou rede social"
              {...register("contact")}
            />
          </div>
          <div>
            <label>
              Senha <span> {errors.password?.message}</span>
            </label>
            <input
              name="password"
              type="password"
              placeholder="Digite aqui sua senha"
              {...register("password")}
            />
          </div>
          <div>
            <label>
              Confirmar Senha <span>{errors.passwordConfirm?.message}</span>
            </label>
            <input
              name="passwordConfirm"
              type="password"
              placeholder="Digite novamente sua senha"
              {...register("passwordConfirm")}
            />
          </div>
          <div>
            <label>Selecionar Modulo</label>
            <select name="course_module" {...register("course_module")}>
              <option value="Primeiro módulo (Introdução ao Frontend)">
                Primeiro módulo (Introdução ao Frontend)
              </option>
              <option value="Segundo módulo (Frontend Avançado)">
                Segundo módulo (Frontend Avançado)
              </option>
              <option value="Terceiro módulo (Introdução ao Backend)">
                Terceiro módulo (Introdução ao Backend)
              </option>
              <option value="Quarto módulo (Backend Avançado)">
                Quarto módulo (Backend Avançado)
              </option>
            </select>
          </div>
          <Button type="submit">Cadastrar</Button>
        </form>
      </Content>
    </Container>
  );
}

export default Signup;
