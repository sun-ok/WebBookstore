import React from "react";
import MainImg from "../styles/images/main4.jpg"

const WelcomingImage = () => (
    <div class="w-100 position-relative">
        <img src={MainImg} alt="Books" class="img-fluid" />
        <div class="row position-absolute w-100 h-100 image-text">
            <div class="align-self-center mx-auto user-select-none">Welcome to our bookstore!</div>
        </div>
    </div>

);

export default WelcomingImage;
