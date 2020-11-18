import React from "react";
import BookCard from "../BookCard"
import Carousel from "../Carousel"
// import WelcomingImage from "../WelcomingImage"
let booksArr = [];

const NUM_OF_CAROUSELS = 5;

const carouselsTitles = [
    "Best Sellers of " + new Date().getFullYear(),
    "Best Sellers of " + new Date().getFullYear(),
    "Best Sellers of " + new Date().getFullYear(),
    "Best Sellers of " + new Date().getFullYear(),
    "Best Sellers of " + new Date().getFullYear(),
];


const MainPage = () => (
    <div>
        <Carousel title={"Best Sellers of " + new Date().getFullYear()} books={[]} />
    </div>

);
//fetch("http://localhost:3001/books").
 //   then(res => res.json()).
 //   then((text) => console.log(text))

export default MainPage;