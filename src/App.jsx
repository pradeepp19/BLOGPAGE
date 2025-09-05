import Navbar from "./components/Navbar"
import Landinpage from "./components/Landingpage";
import { Route, Routes } from "react-router-dom";
import Signup from "./pages/Signup";
import Login from "./pages/Login";

function App() {
  return (
    <div>
      <Navbar />
      <Landinpage />
      <Routes>
        <Route path ="/signup" element={<Signup />} />
        <Route path="/login" element = {<Login />} />
      </Routes>
    </div>
  );
}
export default App
