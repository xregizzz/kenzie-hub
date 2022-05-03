import { Container, Content } from "./styles";
import Button from "../../components/Button";
import { useForm } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";

function Signup() {
  const schema = yup.object().shape({
    name: yup
      .string()
      .required("Nome obrigatorio")
      .matches(/^[aA-zZ\s]+$/, "Apenas letras são aceitas neste campo"),
    email: yup.string().email("Email invalido").required("Email obrigatorio"),
    bio: yup.string().required("Biografia obrigatoria"),
    contact: yup.string().required("Contato obrigatorio"),
    password: yup
      .string()
      .min(6, "Minimo 5 digitos")
      .required("Senha obrigatoria"),
    passwordConfirm: yup
      .string()
      .required("Confirmacao de senha obrigatoria")
      .oneOf([yup.ref("password"), null], "Senhas sao diferentes"),
    course_module: yup.string().required("Campo obrigatorio"),
  });

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({ resolver: yupResolver(schema) });

  function onSubmitFunction(data) {
    console.log(data);
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
            <label>Nome</label>
            <input
              name="name"
              type="text"
              placeholder="Digite aqui seu nome"
              {...register("name")}
            />
            {errors.name?.message}
          </div>
          <div>
            <label>Email</label>
            <input
              name="email"
              type="text"
              placeholder="Digite aqui seu email"
              {...register("email")}
            />
            {errors.email?.message}
          </div>

          <div>
            <label>Bio</label>
            <input
              name="bio"
              type="text"
              placeholder="Diga um pouco sobre voce"
              {...register("bio")}
            />
            {errors.bio?.message}
          </div>

          <div>
            <label>Contato</label>
            <input
              name="contact"
              type="text"
              placeholder="Telefone ou rede social"
              {...register("contact")}
            />
            {errors.contact?.message}
          </div>
          <div>
            <label>Senha</label>
            <input
              name="password"
              type="password"
              placeholder="Digite aqui sua senha"
              {...register("password")}
            />
            {errors.password?.message}
          </div>

          <div>
            <label>Confirmar Senha</label>
            <input
              name="passwordConfirm"
              type="password"
              placeholder="Digite novamente sua senha"
              {...register("passwordConfirm")}
            />
            {errors.passwordConfirm?.message}
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
