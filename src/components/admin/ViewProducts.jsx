import React, { useState, useEffect } from 'react';
import {Link} from 'react-router-dom';
import "./ViewProducts.css";
import Header from '../layout/section/Header';
import NavigationPath from '../layout/UI/NavigationPath';
import Footer from '../layout/section/Footer';
import {Icon} from '../common/Utilities';



const ViewProducts = () => {
 const [products, setProducts] = useState([]);
 const[selectSort, setSelectSort] = useState(""); 

  useEffect(() => {
    const fetchProducts = async () => {
        try {
            let response = await fetch('products.json');
            let data = await response.json();
            setProducts(data);
         } catch(error) {
           console.log(error);
         }
    }
    fetchProducts();
     
  },[])

  const handleSortDropdown = (e) => {
    setSelectSort(e.target.value);
  }

 let content = [];

  {products.map((product, index) => {
    let editData = {
        isEdit: true,
        id:`${product.id}`,
    }
    content.push(  
        <tr className="pro-gl-content" key={index}>
            <td><span>{index + 1}</span></td>
            <td>
            <img
                className="prod-img"
                alt="product image"
                src={product.images}
            />
            </td>
            <td><span>{product.name}</span></td>
            <td><span>{product.category}</span></td>
            <td><span>{product.brand}</span></td>
            <td><span>{product.discountPrice}</span></td>
            <td><span>{product.price}</span></td>
            <td><span>{product.discountPercentage}</span></td>
            <td><span>{product.stock}</span></td>
            <td><span>{product.active}</span></td>
            <td><span>{product.tags}</span></td>
            <td>
                <span className="tbl-btn">
                    <button className="btn-2" title="Edit" style={{padding: "0px 10px 0px 10px", height: "45px"}} >
                        <Link to='/EditProduct' state={editData}><Icon name="edit" style={{padding: "0px", background: "transparent", color: "#ffffff", fontSize: "25px"}} /></Link> 
                    </button>

                    <button
                        className="btn-1" title="Delete" style={{padding: "0px 10px 0px 10px", height: "45px"}} >
                        <Icon name="delete" style={{padding: "0px", background: "transparent", color: "#ffffff", fontSize: "25px"}} />
                </button>
                </span>
            </td>
        </tr> 
        );

  })}  


    return (
        <>
         <Header/>
         <NavigationPath/>
         <section className='wishlist-section pd-tb-40'>
            <div className='container' style={{flexDirection:"column"}}>             
                <div className='row'>                 
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
                             <Link to="/NewProduct">Add</Link>
                            </button>
                            <h5>All Products</h5>
                                  <div style={{display:"flex", gap:"15px"}}>
                                      <div className='select-inner' style={{border: "1px solid #eee",height:"35px"}}>
                                            <input 
                                                type="text" 
                                                name="filter-search" 
                                                id="filter_search"  
                                                className='form-control'
                                                style={{lineHeight:0, padding:"5px",height:"35px"}} 
                                                placeholder='Search...'
                                            />              
                                        </div>

                                       <div className='select-inner' style={{border: "1px solid #eee",height:"35px"}}>
                                            <select name="sort-select" id="sort-select" onChange={handleSortDropdown}>
                                                    <option value="" disabled="" >Category</option>
                                                    <option value="1">Fruits</option>
                                                    <option value="2">Vegetables</option>                                          
                                            </select>
                                            <Icon name="keyboard_arrow_down" />
                                        </div>

                                        <div className='select-inner' style={{border: "1px solid #eee",height:"35px"}}>
                                            <select name="sort-select" id="sort-select" onChange={handleSortDropdown}>
                                                    <option value="" disabled="" >Brand</option>
                                                    <option value="1">Fruits</option>
                                                    <option value="2">Vegetables</option>                                          
                                            </select>
                                            <Icon name="keyboard_arrow_down" />
                                        </div>      
                                  </div>
                                  
                        </div>
                        <div className="card-body">
                            <div className="card-table">
                            <table className="table table">
                                <thead>
                                <tr>
                                    <th scope="col">S.No</th>
                                    <th scope="col">Image</th>
                                    <th scope="col">Name</th>
                                    <th scope="col">Category</th>
                                    <th scope="col">Brand</th>
                                    <th scope="col">Price</th>
                                    <th scope="col">MRP</th>
                                    <th scope="col">Discount %</th>
                                    <th scope="col">Stock</th>
                                    <th scope="col">Active</th>
                                    <th scope="col">Tags</th>
                                    <th scope="col">Actions</th>   
                                </tr>
                                </thead>
                                <tbody className="wish-empt" style={{textAlign: "center"}}>
                                  {content}
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

export default ViewProducts;