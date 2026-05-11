import { use } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";
export default function Homepage() {
  const [userName, setUserName] = useState("");
  const navigate = useNavigate();
  function handleClick() {
    navigate("/dashboard", { state: { userName } });
  }
  return (
    <div>
      <h1>This is a Homepage</h1>
      {/* <Link to="/dashboard">Go to Dashboard</Link> */}
      <input
        type="text"
        value={userName}
        onChange={(e) => setUserName(e.target.value)}
      />
      <button onClick={handleClick}>Go to Profile Dashboard</button>
    </div>
  );
}
