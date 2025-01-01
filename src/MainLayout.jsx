import Header from "./Components/Header";
import Footer from "./Components/Footer";
import { Outlet } from "react-router-dom";
import LoginSignupModal from "./Components/LoginSignupModal";
function MainLayout() {
  return (
    <>
      <Header />
          <Outlet />
          <LoginSignupModal />
      <Footer />
    </>
  );
}

export default MainLayout;
