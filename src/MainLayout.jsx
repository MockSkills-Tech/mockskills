import Header from "./Components/Header";
import Footer from "./Components/Footer";
import { Outlet } from "react-router-dom";
import LoginSignupModal from "./Components/LoginSignupModal";
function MainLayout() {
  return (
    <div>
      <Header />
          <Outlet />
          <LoginSignupModal />
      <Footer />
    </div>
  );
}

export default MainLayout;
