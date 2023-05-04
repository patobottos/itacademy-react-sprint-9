import { BrowserRouter, Routes, Route } from "react-router-dom";
import AppContainer from "../Components/MainContainer/AppMainContainer.styled";
import Header from "../Components/Header/Header";
import Home from "../pages/Home/Home";
import Footer from "../Components/Footer/Footer";
import NimHistory from "../pages/NimHistory/NimHistory";
import ExternalLinks from "../pages/ExternalLinks/ExternalLinks";

const Router = () => {
  return (
    <BrowserRouter>
      <AppContainer>
        <Header/>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/history/" element={<NimHistory />} />
          <Route path="/external-links/" element={<ExternalLinks />} />
          <Route path="*" element={<div>Error 404</div>}/>
        </Routes>
        <Footer/>
      </AppContainer>
    </BrowserRouter>
  );
};

export default Router;
