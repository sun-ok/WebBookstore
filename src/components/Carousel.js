import React from "react";
import '../styles/bootstrap.min.css';
import '../styles/styles.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShoppingCart, faArrowAltCircleLeft, faArrowAltCircleRight } from '@fortawesome/free-solid-svg-icons';
import BookCard from "./BookCard"
import InfiniteCarousel from 'react-leaf-carousel';

const Carousel = (props) => (
    <div className="carousel-container mx-auto py-2 my-5">
        <div className="position-relative">
            <div class="carousel-title position-absolute primary-text secondary-bg font-weight-bold d-flex align-items-center pl-3 pr-5">
                <i>Best Sellers of 2020</i>
            </div>
        </div>

        <InfiniteCarousel
            className="carousel-width"
            breakpoints={[
                {
                    breakpoint: 500,
                    settings: {
                        slidesToShow: 2,
                        slidesToScroll: 1,
                        showSides: false
                    },
                },
                {
                    breakpoint: 1240,
                    settings: {
                        slidesToShow: 2,
                    },
                },
            ]}
            showSides={false}
            sidesOpacity={.5}
            slidesToScroll={1}
            slidesToShow={5}
            scrollOnDevice={true}
            autoCycle={true}
            cycleInterval={3000}
            paging={true}
        >
            {props.books.map((book, index) => (
                <span className="cards-on-carousel  col-lg-2 mx-3 ">
                    <BookCard
                        img={book.img}
                        author={book.author}
                        title={book.title}
                        price={book.price}
                        className="cards-on-carousel book-card card "
                    />
                </span>
            ))}
        </InfiniteCarousel></div>

);

export default Carousel;