import Navbar from "./Navbar.jsx";
import Footer from "./Footer.jsx";
import { Outlet } from "react-router-dom";


function App() {
  return (
    <div className="main h-full flex flex-col">
      {/* <Bg /> */}
      <Navbar />
      <div className="bg relative flex-1 z-[999]">
        <Outlet />
      </div>
      <Footer />
    </div>
  );
}

export default App;
