import React from "react";
import { BrowserRouter, Route, Switch, Link, NavLink } from "react-router-dom";
import Header from "../components/Header";
import Footer from "../components/Footer";
import MainPage from "../components/Pages/MainPage";
import BookPage from "../components/Pages/BookPage";
import GenrePage from "../components/Pages/GenrePage";
import SignInPage from "../components/Pages/SignInPage";

const Router = () => (
    <BrowserRouter>
        <Header />
        <Switch>
            <Route path="/" component={MainPage} exact />
            <Route path="/book/:id" component={BookPage} />
            <Route path="/genre/:id" component={GenrePage} />
            <Route path="/signin" component={SignInPage} />
        </Switch>
        <Footer />
    </BrowserRouter>
);
export default Router;

