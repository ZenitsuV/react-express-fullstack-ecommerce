import React, { useState, useEffect } from 'react';
import {Link} from 'react-router-dom';
import "./ViewProducts.css";
import Header from '../layout/section/Header';
import NavigationPath from '../layout/UI/NavigationPath';
import Footer from '../layout/section/Footer';
import {Icon} from '../common/Utilities';
import useFetch from '../../hooks/useFetch';


const ViewCategories = () => {
 const getCategories = useFetch('category.json');
 const [categories, setCategories] = useState([]);
 const [categoryFilter, setCategoryFilter] = useState("All");

  useEffect(() => {
    setCategories(getCategories.data);
  },[getCategories.data])


  const handleCategoryChange = (e) => {
    setCategoryFilter(e.target.value);
  };

  const matchesCategory = (category, categoryFilter) => {
    return (
        categoryFilter === 'All' ||
        category.name.toLowerCase() === categoryFilter.toLowerCase()
    );
  };

 

  const filteredCategories = categories?.filter(
    (category) =>
      matchesCategory(category, categoryFilter)
  );


  let content = [];
  {filteredCategories?.map((category, index) => {
    let editData = {
        isEdit: true,
        id:`${category.id}`,
    }
    content.push(  
        <tr className="pro-gl-content" key={index}>
            <td><span>{index + 1}</span></td>
            <td>
              <Icon name={category.icon} style={{padding: "0px", fontSize: "40px", color:"#8118d5"}} />
            </td>
            <td><span>{category.name}</span></td>
            <td><span>{category.description}</span></td>
            <td><span>{category.subCategory.join(", ")}</span></td>
            <td><span>{category.totalCount}</span></td>
            <td><span>{category.isActive}</span></td>
            <td>
                <span className="tbl-btn">
                    <button className="btn-2" title="Edit" style={{padding: "0px 10px 0px 10px", height: "45px"}} >
                        <Link to='/EditCategory' state={editData}><Icon name="edit" style={{padding: "0px", background: "transparent", color: "#ffffff", fontSize: "25px"}} /></Link> 
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
                             <Link to="/NewCategory">Add</Link>
                            </button>
                            <h5>All Categories</h5>
                                  <div style={{display:"flex", gap:"15px"}}>
                                
                                       <div className='select-inner' style={{border: "1px solid #eee",height:"35px"}}>
                                            <select name="sort-select" id="sort-select" onChange={handleCategoryChange}>
                                                    <option value="" disabled="" >Category</option>
                                                    <option value="All">All</option>
                                                    {categories?.map((category) =>(
                                                     <option value={category.name} key={category.id}>{category.name}</option>     
                                                    ))}                                       
                                            </select>
                                            <Icon name="keyboard_arrow_down" />
                                        </div>    
                                  </div>
                                  
                        </div>
                        <div className="card-body">
                            <div className="card-table">
                            {filteredCategories?.length > 0 ? 
                            <table className="table table">
                                <thead>
                                <tr>
                                    <th scope="col">S.No</th>
                                    <th scope="col">Icon</th>
                                    <th scope="col">Name</th>
                                    <th scope="col">Description</th>
                                    <th scope="col">Sub Category</th>
                                    <th scope="col">Product Count</th>
                                    <th scope="col">Active</th>  
                                    <th scope="col">Actions</th>  
                                </tr>
                                </thead>
                                <tbody className="wish-empt" style={{textAlign: "center"}}>
                                  {content}
                                </tbody>
                            </table>
                               : 
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

export default ViewCategories;