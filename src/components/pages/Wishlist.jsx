import React from 'react';
import {Link} from 'react-router-dom';
import { useSelector } from 'react-redux';
import "./Wishlist.css";
import Header from '../layout/section/Header';
import NavigationPath from '../layout/UI/NavigationPath';
import Footer from '../layout/section/Footer';
import { Icon } from "../common/Utilities";

const Wishlist = () => {
    const favouriteItems = useSelector((state) => state.wishlist.favouriteItems);

    return (
        <>
         <Header/>
         <NavigationPath/>
         <section className='wishlist-section'>
            <div className='container' style={{flexDirection:"column"}}>
                <div className='section-title'>
                    <h2 className='title'>Product <span>Wishlist</span></h2>
                    <p>Your product wish is our first priority.</p>
                </div>
                <div className='row'>
                    <div className='content-wrapper'>
                        <div className='dashboard-card'>
                            <div className='card-header'>
                                <h5>Wishlist</h5>
                                <div className='header-btn'>
                                    <Link to="/Shop">
                                        <button className='btn-2'>Shop Now</button>
                                    </Link>
                                </div>
                            </div>
                             <div className='card-body'>
                                <div className='card-table'>
                                <table className="table table">
                                    <thead>
                                        <tr>
                                        <th scope="col">ID</th>
                                        <th scope="col">Image</th>
                                        <th scope="col">Name</th>
                                        <th scope="col">Date</th>
                                        <th scope="col">Price</th>
                                        <th scope="col">Status</th>
                                        <th scope="col">Actions</th>
                                        </tr>
                                    </thead>
                                    <tbody className="wish-empt">
                                        <tr className="pro-gl-content">
                                            <td scope="row"><span>1</span></td>
                                            <td>
                                                <img
                                                className="prod-img"
                                                alt="product image"
                                                src="https://grabit-react-next.maraviyainfotech.com/assets/img/product-images/48_1.jpg"
                                                />
                                            </td>
                                            <td><span>Women's wallet Hand Purse</span></td>
                                            <td><span>02/04/2025</span></td>
                                            <td><span>$50</span></td>
                                            <td><span className="avl">Available</span></td>
                                            <td>
                                                <span className="tbl-btn">
                                                    <button className="btn-2" title="Add To Cart" style={{padding: "0px 10px 0px 10px", height: "45px"}} >
                                                        <Icon name="add_shopping_cart" style={{padding: "0px", background: "transparent", color: "#ffffff", fontSize: "25px"}} />
                                                    </button>

                                                    <button
                                                        className="btn-1" title="Remove From List" style={{padding: "0px 10px 0px 10px", height: "45px"}} >
                                                        <Icon name="delete" style={{padding: "0px", background: "transparent", color: "#ffffff", fontSize: "25px"}} />
                                                </button>
                                                </span>
                                            </td>
                                        </tr>                             
                                    </tbody>
                                </table>

                                </div>
                             </div>
                        </div>
                    </div>
                </div>
            </div>
         </section>
         <Footer/>
        </>
    )
}

export default Wishlist;