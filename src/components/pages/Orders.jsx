import React, {useState} from 'react';
import {Link} from 'react-router-dom';
import "./Orders.css";
import Header from '../layout/section/Header';
import NavigationPath from '../layout/UI/NavigationPath';
import Footer from '../layout/section/Footer';
import { Icon } from '../common/Utilities';

const Orders = () => {
    const[selectSort, setSelectSort] = useState(""); 

    const handleSortDropdown = (e) => {
        setSelectSort(e.target.value);
    }

    return (
        <>
         <Header/>
         <NavigationPath/>
         <section className='wishlist-section pd-tb-40'>
            <div className='container' style={{flexDirection:"column"}}>
                <div className='section-title'>
                    <h2 className='title'>Product <span>Order List</span></h2>
                    <p>Your product wish is our first priority.</p>
                </div>
                <div className='row'>
                    <div className='content-wrapper'>
                        <div className='dashboard-card'>
                            <div className='card-header'>
                                <h5 style={{flex:"1 0 0"}}>Orders</h5>
                                <div className='pro-top-sort' style={{border: "1px solid #eee", marginRight: "25px"}}>
                                    <div className='select-inner' style={{border: "0"}}>
                                        <select name="sort-select" id="sort-select" onChange={handleSortDropdown}>
                                                <option value="" disabled="" >Filter by</option>
                                                <option value="1">Pending</option>
                                                <option value="2">Completed</option>
                                                <option value="3">Cancelled</option>                                       
                                        </select>
                                        <Icon name="keyboard_arrow_down" />
                                    </div>
                                </div>
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
                                        <th scope="col">Order ID</th>
                                        <th scope="col">Shipping</th>
                                        <th scope="col">Quantity</th>
                                        <th scope="col">Date</th>
                                        <th scope="col">Price</th>
                                        <th scope="col">Status</th>
                                        <th scope="col">Action</th>
                                        </tr>
                                    </thead>
                                    <tbody className="wish-empt">
                                        <tr className="pro-gl-content">
                                            <td scope="row"><span>47394</span></td>
                                            <td>
                                            <span>free</span>
                                            </td>
                                            <td><span>3</span></td>
                                            <td><span>02/04/2025</span></td>
                                            <td><span>$50</span></td>
                                            <td><span className="avl">Pending</span></td>
                                            <td>
                                                <span className="avl">
                                                    <Link to="/OrderDetails"><button class="btn-2" style={{padding: "10px 15px"}}>View</button></Link>
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

export default Orders;