import Navbar from "./components/NavBar";
import Footer from "./components/Footer";
import { Outlet } from "react-router-dom";
function RootLayout() {
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <main className="flex-grow">
        <Outlet />
      </main>
      <Footer />
    </div>
  );
}

export default RootLayout;
