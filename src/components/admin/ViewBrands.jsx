import React, { useState, useEffect } from 'react';
import {Link} from 'react-router-dom';
import "./ViewProducts.css";
import Header from '../layout/section/Header';
import NavigationPath from '../layout/UI/NavigationPath';
import Footer from '../layout/section/Footer';
import {Icon} from '../common/Utilities';



const ViewBrands = () => {
 const [brands, setBrands] = useState([]);
 const[selectSort, setSelectSort] = useState(""); 

  useEffect(() => {
    const fetchBrands = async () => {
        try {
            let response = await fetch('brands.json');
            let data = await response.json();
            setBrands(data);
         } catch(error) {
           console.log(error);
         }
    }
    fetchBrands();
  },[])


  const handleSortDropdown = (e) => {
    setSelectSort(e.target.value);
  }

 let content = [];
  
    if(brands.length > 0) {
        brands.map((brand,index) => {
             
            let editData = {
                    isEdit: true,
                    id:`${brand.id}`,
                }

            content.push(  
                <tr className="pro-gl-content" key={brand.id}>
                    <td><span>{index + 1}</span></td>         
                    <td><span>{brand.logo}</span></td>
                    <td><span>{brand.name}</span></td>
                    <td><span>{brand.discription}</span></td>
                    <td><span>{brand.website}</span></td>
                    <td><span>{brand.isActive}</span></td>
                    <td>
                        <span className="tbl-btn">
                            <button className="btn-2" title="Edit" style={{padding: "0px 10px 0px 10px", height: "45px"}} >
                                <Link to='/EditBrand' state={editData}><Icon name="edit" style={{padding: "0px", background: "transparent", color: "#ffffff", fontSize: "25px"}} /></Link> 
                            </button>
        
                            <button
                                className="btn-1" title="Delete" style={{padding: "0px 10px 0px 10px", height: "45px"}} >
                                <Icon name="delete" style={{padding: "0px", background: "transparent", color: "#ffffff", fontSize: "25px"}} />
                        </button>
                        </span>
                    </td>
                </tr> 
                );
        })
    }  else {
       content.push(<tr>
           <td>No data available</td>
       </tr>)
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
                             <Link to="/NewBrand">Add</Link>
                            </button>
                            <h5>All Categories</h5>
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
                                  </div>
                                  
                        </div>
                        <div className="card-body">
                            <div className="card-table">
                            <table className="table table">
                                <thead>
                                <tr>
                                    <th scope="col">S.No</th>
                                    <th scope="col">Logo</th>
                                    <th scope="col">Name</th>
                                    <th scope="col">Description</th>
                                    <th scope="col">Website</th>
                                    <th scope="col">Active</th>
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

export default ViewBrands;