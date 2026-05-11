import { Link, useLocation } from "react-router-dom";
export default function Dashboard() {
  const location = useLocation();
  const { userName } = location.state || {};
  return (
    <div>
      <h1> This is a Dashboard</h1>
      <p>Welcome, {userName}!</p>
      <Link to="/">Go to Homepage</Link>
    </div>
  );
}
