import { useState } from "react";
import Reducer from "../component/Reducer";
import { useNavigate } from "react-router-dom";
export default function Signup() {
  const [formData, setFormData] = useState({
    name: "",
    password: "",
  });
  const navigate = useNavigate();
  function deposit() {
    navigate("/dashboard", { state: { formData } });
  }
  return (
    <div>
      <h1>This is a Signup page</h1>
      <form>
        <input
          type="text"
          placeholder="Name"
          onChange={(e) => setFormData({ ...formData, name: e.target.value })}
        />
        <input
          type="password"
          placeholder="Password"
          onChange={(e) =>
            setFormData({ ...formData, password: e.target.value })
          }
        />
        <button type="submit" onClick={deposit}>
          Sign Up
        </button>
      </form>
    </div>
  );
}
