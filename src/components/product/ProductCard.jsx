import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import HeartButton from '../layout/UI/HeartButton';
import { Icon } from '../common/Utilities';
import { Link } from 'react-router-dom';
import { favActions } from '../../store/wishlist';

const ProductCard = ({product, isShopPage = false}) => {

  const disPatch = useDispatch();
  const favouriteItems = useSelector((state) => state.favourite.favouriteItems);

  const isItemFavourite = (arr, id) => {
    // if (items.length > 0) return arr[items].some((item) => item.productId === id);
    //else return false;
  };

  const itemIsFavourite = isItemFavourite(favouriteItems, product.id);

  let cssClass;
  if (itemIsFavourite) cssClass = 'heart_selected';
  else cssClass = 'heart_nonselected';

  const toggleFavouriteItem = () => {
    if (itemIsFavourite) {
      disPatch(favActions.removeFavouriteItem(product.id));
    } else {
      let wishlistObj = {  
          user: "admin",         
          productId:product.id,   
      }
      disPatch(favActions.addFavouriteItem(wishlistObj));
    }
  };


  const imageSizeStyle = isShopPage ? {
    width: '295px',
    height: '210px',
  }: {
      width: '275px',
      height: '200px',
  };

    return (
        <>       
        <div className='product-card' >
         <div className='product-inner'>
          <div className='pro-image-outer'>
            <div className="pro-image">
              <a className='image'><img src={product.images} style={imageSizeStyle}/></a>
              <span className='flags'><HeartButton onHeartClick={toggleFavouriteItem} cssClass={cssClass} /> </span>
                  
            </div>               
          </div>
          <div className='product-info'>
            <a href="/">
              <h6 className='pro-stitle'>{product.category}</h6>
            </a>
            <h5 className='pro-title'>
              <Link to={`/ProductDetails/${product.id}`}>{product.name}</Link>
            </h5>
            <div className='pro-rate-price'>
              <span className='pro-rating'>
                <span className='pro-rating'>             
                  <Icon name="star" className='fill' style={{fontSize:'22px'}} />
                  <Icon name="star" className='fill' style={{fontSize:'22px'}} />
                  <Icon name="star" className='fill' style={{fontSize:'22px'}} />
                  <Icon name="star" className='fill' style={{fontSize:'22px'}} />
                  <Icon name="star" className='fill' style={{fontSize:'22px'}} />
                </span>
                <span className='qty'>1kg</span>
              </span>
              <span className='pro-price'>
                <div className='price-span'>
                  <span className='new-price'>${product.discountPrice}</span>
                  <span className='old-price'>${product.price}</span>
                </div>
                <div className='add-cart'>
                    <a className="btn-1 add-cart" href="/">
                     Add
                   </a>
                </div>
                
              </span>
            </div>
          </div>
        </div>
      </div>
      </>
    );
}

export default ProductCard;