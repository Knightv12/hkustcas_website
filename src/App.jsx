import Navbar from "./Navbar.jsx";
import Footer from "./Footer.jsx";
import { Outlet } from "react-router-dom";
import Bg from "/src/Bg.jsx";

function App() {
  
  return (
    <div className="main">
      {/* <Bg /> */}
      <Navbar />
      <Outlet />
      <Footer />
    </div>
  );
}

export default App;
