import "./App.css";
import UserForm from "./components/UserForm";
import axios from "axios";

function App() {
  const getUserHandler = async () => {
    axios
      .get("http://localhost:4000/user/getUsers")
      .then((res) => console.log(res.data))
      .catch((err) => console.log(err));
  };
  return (
    <>
      <UserForm />

      <button onClick={getUserHandler}>Get Users</button>
    </>
  );
}

export default App;
