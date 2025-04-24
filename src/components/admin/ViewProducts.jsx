import React, { useState, useEffect } from 'react';
import {Link} from 'react-router-dom';
import "./ViewProducts.css";
import Header from '../layout/section/Header';
import NavigationPath from '../layout/UI/NavigationPath';
import Footer from '../layout/section/Footer';
import {Icon} from '../common/Utilities';



const ViewProducts = () => {
 const [products, setProducts] = useState([]);
 const [categories, setCategories] = useState([]);
 const [brands, setBrands] = useState([]);
 const [searchTerm, setSearchTerm] = useState("");
 const [categoryFilter, setCategoryFilter] = useState("All");
 const [brandFilter, setBrandFilter] = useState("All");
 const [selectSort, setSelectSort] = useState(""); 
 const [loading, setLoading] = useState(false);

  useEffect(() => {
    const fetchProducts = async () => {
        //setLoading(true);
        try {
            let response = await fetch('products.json');
            let data = await response.json();
            setProducts(data);
         } catch(error) {
           console.log(error);
         }
    }

    const fetchCategories = async () => {
        //setLoading(true);
        try {
            let response = await fetch('category.json');
            let data = await response.json();
            setCategories(data);
         } catch(error) {
           console.log(error);
         }
    }

     const fetchBrands = async () => {
        //setLoading(true);
        try {
            let response = await fetch('brands.json');
            let data = await response.json();
            setBrands(data);
         } catch(error) {
           console.log(error);
         }
    }
 
    fetchProducts();
    fetchBrands();
    fetchCategories();
     
  },[])

  

  const handleSortDropdown = (e) => {
    setSelectSort(e.target.value);
  }

  const handleCategoryChange = (e) => {
    setCategoryFilter(e.target.value);
  };

  const handleBrandChange = (e) => {
    setBrandFilter(e.target.value);
  };

  const matchesCategory = (product, categoryFilter) => {
    return (
        categoryFilter === 'All' ||
        product.category.toLowerCase() === categoryFilter.toLowerCase()
    );
  };

  const matchesBrand = (product, categoryFilter) => {
    return (
        brandFilter === 'All' ||
        product.brand.toLowerCase() === brandFilter.toLowerCase()
    );
  };

  const matchesSearchTerm = (product, searchTerm) => {
    return product.name.toLowerCase().includes(searchTerm.toLocaleLowerCase());
  };


  const filteredProducts = products.filter(
    (product) =>
      matchesCategory(product, categoryFilter) &&
      matchesBrand(product, brandFilter) &&
      matchesSearchTerm(product, searchTerm) 

  );

  let content = [];
    if(filteredProducts.length > 0) {
     {filteredProducts.map((product, index) => {
        let editData = {
            isEdit: true,
            id:`${product.id}`,
        }
        let category = categories.filter((category) => category.id === product.category)[0];
        let brand = brands.filter((brand) => brand.id === product.brand)[0];

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
                <td><span>{category.name}</span></td>
                <td><span>{brand.name}</span></td>
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
    }

    if(loading) {
    content.push(<div>Loading...</div>);
    }


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
                                                value={searchTerm}
                                                onChange={(e) => setSearchTerm(e.target.value)}
                                            />              
                                        </div>

                                       <div className='select-inner' style={{border: "1px solid #eee",height:"35px"}}>
                                            <select name="sort-select" id="sort-select" onChange={handleCategoryChange}>
                                                    <option value="" disabled="" >Category</option>
                                                    <option value="All">All</option>
                                                    {categories.map((category) =>(
                                                    <option value={category.id} key={category.id}>{category.name}</option>     
                                                    ))}                                 
                                            </select>
                                            <Icon name="keyboard_arrow_down" />
                                        </div>

                                        <div className='select-inner' style={{border: "1px solid #eee",height:"35px"}}>
                                            <select name="sort-select" id="sort-select" onChange={handleBrandChange}>
                                                    <option value="" disabled="" >Brand</option>
                                                     <option value="All">All</option>
                                                    {brands.map((brand) =>(
                                                    <option value={brand.id} key={brand.id}>{brand.name}</option>     
                                                    ))}                                          
                                            </select>
                                            <Icon name="keyboard_arrow_down" />
                                        </div>      
                                  </div>
                                  
                        </div>
                        <div className="card-body">
                            <div className="card-table">
                                {filteredProducts.length > 0 ? 
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
                                </table> : 
                                 <div style={{display:"flex", justifyContent:"center", color:"red"}}>No products available</div>
                                }

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