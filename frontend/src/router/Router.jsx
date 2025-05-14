import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Home } from '../pages/Home/home';
import { Navbar } from '../layout/navbar/navbar';
import { Footer } from '../layout/Footer/footer';
import { ContactUs } from '../pages/ContactUs/contactUs';

export const Router = () => {
    return (
    <BrowserRouter>
        <Navbar/>
        <Routes>
            <Route path='/' element={<Home/>} />
            <Route path='/contact_us' element={<ContactUs/>} />
        </Routes>
        <Footer/>
    </BrowserRouter>
)
}