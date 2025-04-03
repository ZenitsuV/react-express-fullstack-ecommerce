import React from 'react';
import {Link} from 'react-router-dom';
import "./OrderDetails.css";
import Header from '../layout/section/Header';
import NavigationPath from '../layout/UI/NavigationPath';
import Footer from '../layout/section/Footer';
import {Icon} from '../common/Utilities';

const OrderDetaiks = () => {
    return (
        <>
         <Header/>
         <NavigationPath/>
         <section className='wishlist-section pd-tb-40'>
            <div className='container' style={{flexDirection:"column"}}>             
                <div className='row'>
                     <div className='box-wrapper'>
                        <div className='bill-box'>
                            <div className='single-list'>
                            <ul>
                                <li>
                                    <strong className="check-subtitle">Name :</strong>
                                    <span style={{color: "rgb(119, 119, 119)"}}> John Smith </span>
                                </li>
                                <li>
                                    <strong className="check-subtitle">Address :</strong>
                                    <span style={{color: "rgb(119, 119, 119)"}}> My Street, Big town BG23 4YZ</span>
                                </li>
                                <li>
                                    <strong className="check-subtitle">PostalCode :</strong>
                                    <span style={{color: "rgb(119, 119, 119)"}}> 395004</span>
                                </li>
                                <li>
                                    <strong className="check-subtitle">Country :</strong>
                                    <span style={{color: "rgb(119, 119, 119)"}}> Armenia</span>
                                </li>
                                <li>
                                    <strong className="check-subtitle">State :</strong>
                                    <span style={{color: "rgb(119, 119, 119)"}}> Syunik Province</span>
                                </li>
                                <li>
                                    <strong className="check-subtitle">City :</strong>
                                    <span style={{color: "rgb(119, 119, 119)"}}> Shaghat</span>
                                </li>
                                </ul>

                            </div>
                        </div>
                     </div>
                     <div className='content-wrapper'>
                    <div className="dashboard-card">
                        <div className="card-header">
                            <button
                            className=""
                            type="submit"
                            style={{
                                display: "flex",
                                alignItems: "center",
                                backgroundColor: "rgb(92, 175, 144)",
                                lineHeight: "10px",
                                padding: "10px",
                                borderRadius: "4px",
                                color: "whitesmoke"}}
                            >
                             <Link to="/Orders"><Icon name="arrow_left_alt" style={{backgroundColor:"transparent"}}/></Link>
                            </button>
                            <h5>Order Items</h5>
                            <span className="register-wrap" style={{float: "inline-end"}}></span>
                        </div>
                        <div className="card-body">
                            <div className="card-table">
                            <table className="table table">
                                <thead>
                                <tr>
                                    <th scope="col">ID</th>
                                    <th scope="col">Image</th>
                                    <th scope="col">Name</th>
                                    <th scope="col">Date</th>
                                    <th scope="col">Price</th>
                                </tr>
                                </thead>
                                <tbody className="wish-empt" style={{textAlign: "center"}}>
                                <tr className="pro-gl-content">
                                    <td scope="row"><span>1</span></td>
                                    <td>
                                    <img
                                        className="prod-img"
                                        alt="product image"
                                        src="https://grabit-react-next.maraviyainfotech.com/assets/img/product-images/17_1.jpg"
                                    />
                                    </td>
                                    <td><span>Fresh Organic Ginger Pack</span></td>
                                    <td><span>03/04/2025</span></td>
                                    <td><span>$2</span></td>
                                </tr>
                                <tr className="pro-gl-content">
                                    <td scope="row"><span>2</span></td>
                                    <td>
                                    <img
                                        className="prod-img"
                                        alt="product image"
                                        src="https://grabit-react-next.maraviyainfotech.com/assets/img/product-images/4_1.jpg"
                                    />
                                    </td>
                                    <td><span>Natural Hub Cherry Karonda</span></td>
                                    <td><span>03/04/2025</span></td>
                                    <td><span>$49</span></td>
                                </tr>
                                <tr className="pro-gl-content">
                                    <td scope="row"><span>3</span></td>
                                    <td>
                                    <img
                                        className="prod-img"
                                        alt="product image"
                                        src="https://grabit-react-next.maraviyainfotech.com/assets/img/product-images/25_1.jpg"
                                    />
                                    </td>
                                    <td><span>Fresh Mango juice pack</span></td>
                                    <td><span>03/04/2025</span></td>
                                    <td><span>$20</span></td>
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

export default OrderDetaiks;