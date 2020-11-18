import React from "react";
import '../styles/bootstrap.min.css';
import '../styles/styles.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons';

const BookCard = (props) => (
    <div>
        <div className="card mb-2">
            <div className="book-card">
                <div className="pt-3">
                    <img className="card-img-top" src={props.img} alt="Book card image" />
                </div>
                <div className="card-body text-center p-2">
                    <h4 className="card-title font-weight-bold m-1">{props.title}</h4>
                    <p className="card-text">{props.author}</p>
                </div>
                <div className="card-footer border-top-0 white-background px-4">
                    <div>
                        <div className="font-weight-bold d-inline-block pl-sm-3 card-price">{props.price + "$"}</div>
                        <a href="#" className="card-cart fa-pull-right"><FontAwesomeIcon icon={faShoppingCart} /></a>
                    </div>
                </div>
            </div>
        </div>
    </div>

);

export default BookCard;