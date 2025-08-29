import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Home } from '../pages/Home/home';
import { Navbar } from '../layout/Navbar/navbar';
import { Footer } from '../layout/Footer/footer';
import { ContactUs } from '../pages/ContactUs/contactUs';
import { useState } from 'react';

export const Router = () => {
      const [formData, setFormData] = useState({ name: '', email: '' });

    return (
    <BrowserRouter>
        <Navbar/>
        <Routes>
            <Route path='/' element={<Home formData={formData} setFormData={setFormData}/>} />
            <Route path='/contact_us' element={<ContactUs formData={formData}/>} />
        </Routes>
        <Footer/>
    </BrowserRouter>
)
}