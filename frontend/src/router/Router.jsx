import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Home } from "../pages/Home/home";
import { Navbar } from "../layout/Navbar/navbar";
import { Footer } from "../layout/Footer/footer";
import { ContactUs } from "../pages/ContactUs/contactUs";
import { useState } from "react";
import { Services } from "../pages/Services/services";
import "react-toastify/dist/ReactToastify.css";
import { ToastContainer } from "react-toastify";

export const Router = () => {
  const [formData, setFormData] = useState({ name: "", email: "" });

  return (
    <>
      <ToastContainer position="top-right" theme="colored" autoClose={2000} />
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route
            path="/"
            element={<Home formData={formData} setFormData={setFormData} />}
          />
          <Route
            path="/contact_us"
            element={<ContactUs formData={formData} />}
          />
          <Route path="/services" element={<Services />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </>
  );
};
