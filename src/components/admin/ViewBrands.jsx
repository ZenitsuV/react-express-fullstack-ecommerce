import React, { useState, useEffect } from 'react';
import {Link} from 'react-router-dom';
import "./ViewProducts.css";
import Header from '../layout/section/Header';
import NavigationPath from '../layout/UI/NavigationPath';
import Footer from '../layout/section/Footer';
import {Icon} from '../common/Utilities';
import useFetch from '../../hooks/useFetch';


const ViewBrands = () => {
 const getBrands = useFetch('brands.json');
 const [brands, setBrands] = useState([]);
 const [searchTerm, setSearchTerm] = useState("");


  useEffect(() => {
    setBrands(getBrands.data);
  },[getBrands.data])



  const matchesSearchTerm = (brand, searchTerm) => {
    return brand.name.toLowerCase().includes(searchTerm.toLocaleLowerCase());
  };
 


  const filteredBrands = brands?.filter(
    (brand) =>
      matchesSearchTerm(brand, searchTerm) 
  );

  

 let content = [];
  
    if(filteredBrands?.length > 0) {
        filteredBrands.map((brand,index) => {
             
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
           <td colSpan={7} style={{color:"red"}}>No data available</td>
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
                                                style={{lineHeight:0, padding:"5px",height:"35px",fontFamily: "inherit",fontSize: "15px"}} 
                                                placeholder='Search...'
                                                value={searchTerm}
                                                onChange={(e) => setSearchTerm(e.target.value)}
                                            />              
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