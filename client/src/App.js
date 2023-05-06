import "./App.css";
import UserForm from "./components/UserForm";
import { Route, Routes } from "react-router-dom";
import UserList from "./components/UserList";

function App() {
  return (
    <>
      <Routes>
        <Route path="/userlist" element={<UserList />} />
        <Route path="/" element={<UserForm />} />
      </Routes>
    </>
  );
}

export default App;
