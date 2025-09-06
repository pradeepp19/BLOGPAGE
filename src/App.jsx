import Navbar from "./components/Navbar"
import Footer from "./components/footer"
import Landinpage from "./components/Landingpage";
import { Route, Routes } from "react-router-dom";
import Signup from "./pages/Signup";
import Login from "./pages/Login";

function App() {
  return (
    <div className="flex flex-col min-h-screen bg-white dark:bg-gray-900">
      <Navbar />
      <Routes>
         <Route path ="/" element={<Landinpage />} />
        <Route path ="/signup" element={<Signup />} />
        <Route path="/login" element = {<Login />} />
      </Routes>

      <Footer />
    </div>
  );
}
export default App
