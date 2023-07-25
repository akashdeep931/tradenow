import { Route, Routes } from "react-router-dom";
import { Login } from "./components";

function App() {
  return (
    <div>
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/register" />
      </Routes>
    </div>
  );
}

export default App;
