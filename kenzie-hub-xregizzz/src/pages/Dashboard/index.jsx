import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { useForm } from "react-hook-form";
import { Redirect } from "react-router-dom";
import { useState } from "react";
import { useEffect } from "react";
import api from "../../services/api";
import Button from "../../components/Button";
import Card from "../../components/Card";
import Header from "../../components/Header";
import {
  Container,
  UlContainer,
  InputContainer,
  Navbar,
  HeaderModal,
} from "./styles";
import { toast } from "react-toastify";
import Modal from "react-modal/lib/components/Modal";

function Dashboard({ authenticated, setAuthenticated }) {
  const [technologies, setTechnologies] = useState([]);
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const [modalIsOpen2, setModalIsOpen2] = useState(false);
  const userId = useState(JSON.parse(localStorage.getItem("@KenzieHub:user")));
  const token = JSON.parse(localStorage.getItem("@KenzieHub:token"));
  const user = JSON.parse(localStorage.getItem("@KenzieHub:user"));

  function handleOpenModal() {
    setModalIsOpen(true);
  }

  function handleCloseModal() {
    setModalIsOpen(false);
  }

  function handleOpenModal2() {
    setModalIsOpen2(true);
  }

  function handleCloseModal2() {
    setModalIsOpen2(false);
  }

  function loadTechs() {
    api
      .get(`/users/${userId[0].id}`)
      .then((resp) => api.get(`/users/${resp.data.id}`))
      .then((resp) => setTechnologies(resp.data.techs));
  }

  useEffect(() => {
    loadTechs();
  }, []);

  const schema = yup.object().shape({
    title: yup.string().required(" - Campo obrigatório"),
    status: yup.string().required(" - Campo obrigatório"),
  });

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({ resolver: yupResolver(schema) });

  function onSubmit(tech) {
    api
      .post(
        "/users/techs",
        {
          title: tech.title,
          status: tech.status,
        },
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      )
      .then((resp) => loadTechs())
      .catch((err) => toast.error("Tecnologia ja cadastrada"));
  }

  if (!authenticated) {
    return <Redirect to="/" />;
  }

  const customStyles = {
    content: {
      top: "50%",
      left: "50%",
      right: "auto",
      bottom: "auto",
      marginRight: "-50%",
      transform: "translate(-50%, -50%)",
      background: "none",
      border: "none",
      padding: 0,
    },
  };

  return (
    <>
      <Header setAuthenticated={setAuthenticated} />
      <Container>
        <h1>Ola, {user.name}</h1>
        <h2> {user.course_module}</h2>
      </Container>
      <Navbar>
        <h1>Tecnologias</h1>
        <button onClick={handleOpenModal}>+</button>
      </Navbar>

      <Modal
        isOpen={modalIsOpen}
        onRequestClose={handleCloseModal}
        style={customStyles}
      >
        <InputContainer onSubmit={handleSubmit(onSubmit)}>
          <HeaderModal>
            <h2>Cadastrar Tecnologia</h2>
            <p onClick={handleCloseModal}>X</p>
          </HeaderModal>

          <div>
            <label>
              None <span>{errors.name?.message}</span>
            </label>
            <input
              type="text"
              placeholder="Nome da tecnologia"
              {...register("title")}
            />
          </div>
          <div>
            <label>
              Selecionar Status <span>{errors.status?.message}</span>
            </label>
            <select name="status" {...register("status")}>
              <option value="Iniciante">Iniciante</option>
              <option value="Intermediário">Intermediário</option>
              <option value="Avançado">Avançado</option>
            </select>
          </div>
          <Button type="submit">Cadastrar Tecnologia</Button>
        </InputContainer>
      </Modal>

      <Modal
        isOpen2={modalIsOpen2}
        onRequestClose={handleCloseModal2}
        style={customStyles}
      >
        <div>Ola</div>
        <Button type="submit">Excluir</Button>
      </Modal>

      <UlContainer>
        {technologies.map((tech) => (
          <Card
            onClick={handleOpenModal2}
            id={tech.id}
            key={tech.id}
            name={tech.title}
            status={tech.status}
          />
        ))}
      </UlContainer>
    </>
  );
}

export default Dashboard;
