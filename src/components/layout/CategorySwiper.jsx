import './CategorySwiper.css';
import '@splidejs/react-splide/css';
import { Splide, SplideSlide } from '@splidejs/react-splide';
import { Icon } from '../common/Utilities';
import categories from '/public/category';

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

  console.log("Screen Width " + window.innerWidth);

  return (
    <>
     <section className='category-section'>
      <div className="container">
          <div className="splide">
            <Splide options={options} aria-label="My Favorite Images">
              {categories.map((category) => (
                <SplideSlide key={category.id}>
                  <div className="category-slide">
                    <div className="card" style={{backgroundColor:category.bgcolor}}>
                      <Icon name={category.icon} className="cat-icon" />
                      <div className='card-item'>
                        <span className='card-item-title'>{category.text}</span>
                        <span className='card-item-count'>{category.totalCount} Items</span>
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
