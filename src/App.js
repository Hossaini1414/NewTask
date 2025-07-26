
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import Home from "./components/Home";
import About from "./components/About";
import Contact from "./components/Contact";
import Users from "./components/Users";
import UserDetail from "./components/UserDetail";
import Posts from "./components/Posts";
import Thanks from "./components/Thanks";



function App() {
  return (
    <BrowserRouter>
      <div className=" min-h-screen bg-gray-100 text-gray-800">
        <nav className=" justify-center bg-white  shadow-md py-4 px-8 flex gap-12 text-blue-700 font-semibold">
          <Link to="/home" className="hover:underline">Home</Link>
          <Link to="/about" className="hover:underline">About</Link>
          <Link to="/contact" className="hover:underline">Contact</Link>
          <Link to="/users" className="hover:underline">Users</Link>
          <Link to="/posts" className="hover:underline">Posts</Link>
        </nav>

        <div className="p-8">
          <Routes>
            <Route path="/home" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/users" element={<Users />} />
            <Route path="/users/:userId" element={<UserDetail />} />
            <Route path="/posts" element={<Posts />} />
            <Route path="/thanks" element={<Thanks />} />
          </Routes>
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;