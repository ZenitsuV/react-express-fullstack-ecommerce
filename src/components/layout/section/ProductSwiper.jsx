import { useId } from 'react';
import './ProductSwiper.css';
import '@splidejs/react-splide/css';
import { Splide, SplideSlide } from '@splidejs/react-splide';
import ProductCard from '../../product/ProductCard';
//import products from '/public/products'

 const widthObj = {
     414 : '1',
     768 : '4',
     1024 : '5',
     1440 : '7',
     1922 : '8',
 }

const perPageByWidth = widthObj[window.innerWidth];

const options = {
  arrows: false,
  pagination: false,
  type: 'loop',
  drag: 'free',
  snap: true,
  perPage: perPageByWidth,
};


const ProductSwiper = ({products, isShopPage}) => {
  const id = useId();
  //const arr = Array.from({length:products.length}).map((_,index) => index);

  return (
    <>
      <div className="wrapper" >
        <div className="splide">
          <Splide options={options} aria-label="Slide Items">
            {products.map((product) => (
              <SplideSlide key={product.id}>
                <div className="slide" >
                 <ProductCard product={product} isShopPage={isShopPage}/>
                </div>
              </SplideSlide>
            ))}
          </Splide>
        </div>
      </div>
    </>
  );
};

export default ProductSwiper;
