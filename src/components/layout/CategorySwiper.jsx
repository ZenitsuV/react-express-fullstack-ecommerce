import './CategorySwiper.css';
import '@splidejs/react-splide/css';
import { Splide, SplideSlide } from '@splidejs/react-splide';
import { Icon } from '../common/Utilities';
import products from '/public/products'

 const widthObj = {
     414 : '1',
     768 : '6',
     1024 : '8',
     1440 : '10',
     1922 : '10',
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


const CategorySwiper = () => {
  console.log(window.innerWidth);
  return (
    <>
     <section className='category-section'>
      <div className="container">
          <div className="splide">
            <Splide options={options} aria-label="My Favorite Images">
              {products.map((product) => (
                <SplideSlide key={product.id}>
                  <div className="category-slide">
                    <div className="card" style={{backgroundColor:product.bgcolor}}>
                      <Icon name={product.icon} className="cat-icon" />
                      <div className='card-item'>
                        <span className='card-item-title'>{product.text}</span>
                        <span className='card-item-count'>{product.totalCount} Items</span>
                      </div>
                    
                    </div>
                  </div>
                </SplideSlide>
              ))}
            </Splide>
          </div>
        </div>
     </section> 
    </>
  );
};

export default CategorySwiper;
