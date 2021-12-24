import React from "react";
import { Routes, Route } from "react-router-dom";
import ScrollToTop from "./util/ScrollToTop";
import Home from "./pages/Home/Home";
import TermsOfService from "./pages/TermsOfService/TermsOfService";
import PrivacyPolicy from "./pages/PrivacyPolicy/PrivacyPolicy";
import Header from "./components/layout/Header";
import Footer from "./components/layout/Footer";

function App() {
  return (
    <>
      <Header></Header>
      <ScrollToTop>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/terms-of-service" element={<TermsOfService />} />
          <Route path="/privacy-policy" element={<PrivacyPolicy />} />
        </Routes>
      </ScrollToTop>
      <Footer></Footer>
    </>
  );
}

export default App;
