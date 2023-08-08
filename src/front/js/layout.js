import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import ScrollToTop from "./component/scrollToTop";
import { BackendURL } from "./component/backendURL";


import { Home } from "./pages/home.js";
import Login from "./pages/login.js";
import injectContext from "./store/appContext";
import CreateUser from "./pages/createUser.js";
import CreateActivity from "./pages/createActivity";
import CreateTrip from "./pages/createTrip";
import SingleTrip from "./pages/singleTrip.js";
import { SingleProduct } from "./pages/singleproduct.js";
import {ReviewForm} from  "./pages/reviewForm.js";
import {Products} from "./pages/products.js";
import {Privacy_policy} from "./pages/privacy_policy.js";
import { TermsServices } from "./pages/termsServices.js";
import SingleActivity from "./pages/singleActivity.jsx";
import ReviewActivity from "./pages/reviewActivity";
import ReviewTrip from "./pages/reviewTrip";
import { Navbar } from "./component/navbar.js";
import { Footer } from "./component/footer";
import Activities from "./pages/activities";
import Trips from "./pages/trips.js";
import UserPage from "./pages/userPage";
import ModifyReview from "./pages/modifyReview";

//create your first component
const Layout = () => {
    //the basename is used when your project is published in a subdirectory and not in the root of the domain
    // you can set the basename on the .env file located at the root of this project, E.g: BASENAME=/react-hello-webapp/
    const basename = process.env.BASENAME || "";

    if(!process.env.BACKEND_URL || process.env.BACKEND_URL == "") return <BackendURL/ >;

    return (
        <div>
            <BrowserRouter basename={basename}>
                <ScrollToTop>
                    <Navbar />                    
                    <Routes>
                        <Route element={<Home />} path="/" />
                        <Route element={<Login />} path="/login" />
                        <Route element={<CreateUser />} path="/create-user"/>  
                        {/*<Route element={<ModifyUser/>} path="/modify-user/:id" />*/}
                        <Route element={<Trips/>} path="/trips"/>                 
                        <Route element={<SingleTrip />} path="/trip/:id" />
                        <Route element={<CreateTrip />} path="/create-trip" />
                        <Route element={<ReviewTrip/>} path="/review-trip/:id" />
                        <Route element={<SingleProduct />} path="/product/:id" />
                        <Route element={<Products/>} path="/products"/>
                        <Route element={<ReviewForm/>} path="/create-review"/>
                        {/*<Route element={<CreateProduct />} path="/create-product" />
                        <Route element={<ReviewProduct/>} path="/review-product/:id" />*/}
                        <Route element={<SingleActivity />} path="/activity/:id" />                        
                        <Route element={<Activities />} path="/activities" />
                        <Route element={<CreateActivity />} path="/create-activity" />
                        <Route element={<ReviewActivity/>} path="/review-activity/:id" />
                        <Route element={<Privacy_policy />} path="/privacy-policy" />
                        <Route element={<TermsServices/>} path="/termsServices" />
                        <Route element={<h1>Not found!</h1>} />
                        <Route element={<UserPage />} path="user-page" />
                        <Route element={<ModifyReview />} path="modify-review" />
                    </Routes>
                    <Footer />
                </ScrollToTop>
            </BrowserRouter>
        </div>
    );
};

export default injectContext(Layout);
