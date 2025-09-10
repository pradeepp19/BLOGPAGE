import Navbar from "./components/Navbar"
import Footer from "./components/footer"
import Landinpage from "./components/Landingpage";
import { Route, Routes } from "react-router-dom";
import Signup from "./pages/Signup";
import Login from "./pages/Login";
import BlogPage from "./pages/Blogpage";
import CreateBlog from "./pages/CreateBlog";

function App() {
  return (
    <div className="flex flex-col min-h-screen bg-white dark:bg-gray-900">
      <Navbar />
      <main className="flex-grow">
      <Routes>
        <Route path ="/" element={<Landinpage />} />
        <Route path ="/signup" element={<Signup />} />
        <Route path="/login" element = {<Login />} />
        <Route path="/blogs" element = {<BlogPage />} />
        <Route path="/create" element={<CreateBlog />} />
      </Routes>
      </main>
      <Footer />
    </div>
  );
}
export default App
