import { Route, Routes } from "react-router-dom";
import { Home, Login, Register } from "./components";

function App() {
  return (
    <div>
      <Routes>
        <Route path="/:user_id/home" element={<Home />} />
        <Route path="/" element={<Login />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
      </Routes>
    </div>
  );
}

export default App;
