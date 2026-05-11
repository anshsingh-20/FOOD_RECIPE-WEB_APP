import Search from "./component/Search";
import Foodlist from "./component/Foodlist";
import { useState } from "react";
import Nav from "./component/Nav";
import Container from "./component/Container";
import "./App.css";
import Fooddetails from "./component/Fooddetails";
import Innercontainer from "./component/Innercontainer";
function App() {
  const [fooditem, setfooditem] = useState([]);
  const [foodId, setfoodId] = useState("");
  // import { useState } from "react";
  // import Reducer from "./component/Reducer";
  // import { BrowserRouter, Routes, Route } from "react-router-dom";
  // import Dashboard from "./Pages/Dashboard";
  // import Homepage from "./Pages/Homepage";
  // import Exception from "./Pages/Exception";
  // import useDisplaymessage from "./Hooks/useDisplaymessage";
  // import displayValue from "./Hooks/displayValue";
  // import Signup from "./Pages/signup";
  // function App() {
  // const [message, setMessage] = useState("");
  // const [displaymessage] = useDisplaymessage();
  // const info = displaymessage();
  // const [displaytheValue] = displayValue();
  // const display = displaytheValue();
  return (
    <div>
      {/* display value is : {display}  */}
      {/* <input type="text" onChange={(e) => setMessage(e.target.value)}  */}
      {/* //  <p>message is : {info}</p>  */}
      <Nav />
      <Search fooditem={fooditem} setfooditem={setfooditem} />
      <Container>
        <Innercontainer>
          <Foodlist setfoodId={setfoodId} fooditem={fooditem} />
        </Innercontainer>
        <Innercontainer>
          <Fooddetails foodId={foodId} />
        </Innercontainer>
      </Container>
      {/* <BrowserRouter>
        //{" "}
        <Routes>
          // <Route path="/" element={<Homepage />} />
          // <Route path="/dashboard" element={<Dashboard />} />
          // <Route path="/signup" element={<Signup />} />
          // <Route path="*" element={<Exception />} />
          //{" "}
        </Routes>
        //{" "}
      </BrowserRouter> */}
    </div>
  );
}

export default App;
