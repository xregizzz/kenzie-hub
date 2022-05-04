import { Redirect } from "react-router-dom";

function Dashboard({ authenticated }) {
  if (!authenticated) {
    return <Redirect to="/" />;
  }
  const user = localStorage.getItem("@KenzieHub:user");
  console.log(user);

  return <div>Ola {user.name}</div>;
}

export default Dashboard;
