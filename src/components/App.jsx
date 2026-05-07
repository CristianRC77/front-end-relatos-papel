import React from "react";
import {BrowserRouter, Routes, Route} from "react-router-dom";
import {GlobalProvider} from "../context/global/GlobalProvider.jsx";
import Menu from "./Menu/Menu.jsx";
import MainContent from "./MainContent/MainContent.jsx";
import Footer from "./Footer/Footer.jsx";
import Home from "./Home/Home.jsx";
import Search from "./Search/Search.jsx";
import Cart from "./Cart/Cart.jsx";
import Books from "./Books/Books.jsx";
import Stores from "./Stores/Stores.jsx";
import Contact from "./Contact/Contact.jsx";
import BookDetail from "./BookDetail/BookDetail.jsx";
import Login from "./Login/Login.jsx";
import Profile from "./Profile/Profile.jsx";
import PrivateRoute from "./PrivateRoute/PrivateRoute.jsx";
import {AuthProvider} from "../context/auth/AuthProvider.jsx";
import SuccessPopup from "./SuccessPopup/SuccessPopup.jsx";
import LoginMessage from "./LoginMessage/LoginMessage.jsx";

export default function App() {
    return (
        <GlobalProvider>
            <AuthProvider>
                <BrowserRouter>
                    <div className="app-layout">
                        <Search/>
                        <Cart/>
                        <SuccessPopup/>
                        <LoginMessage/>
                        <Menu/>
                        <Routes>
                            <Route path="/login" element={<Login/>}/>
                            <Route path="/" element={<MainContent/>}>
                                <Route index element={<Home/>}/>
                                <Route path="books" element={<Books/>}/>
                                <Route path="books/:bookId" element={<BookDetail/>}/>
                                <Route path="stores" element={<Stores/>}/>
                                <Route path="contact" element={<Contact/>}/>
                                <Route path="profile" element={
                                    <PrivateRoute>
                                        <Profile/>
                                    </PrivateRoute>
                                }/>
                            </Route>
                        </Routes>
                        <Footer/>
                    </div>
                </BrowserRouter>
            </AuthProvider>
        </GlobalProvider>
    );
}