import './CategorySwiper.css';
import '@splidejs/react-splide/css';
import { Splide, SplideSlide } from '@splidejs/react-splide';
import { Icon } from './Header';

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

const slides = [
  {
    icon: 'nutrition',
    text: 'Fruits',
    totalCount: '312',
    bgcolor: '#feeae3',
  },
  {
    icon: 'grocery',
    text: 'Vegetables',
    totalCount: '65',
    bgcolor: '#fef8d8',
  },
  {
    icon: 'lunch_dining',
    text: 'Snacks',
    totalCount: '548',
    bgcolor: '#feeae4',
  },
  {
    icon: 'cake',
    text: 'Bakery',
    totalCount: '48',
    bgcolor: '#f0fedc',
  },
  {
    icon: 'coffee',
    text: 'Drinks',
    totalCount: '59',
    bgcolor: '#feeae3',
  },
  {
    icon: 'fastfood',
    text: 'Fast Food',
    totalCount: '845',
    bgcolor: '#def7ea',
  },
  {
    icon: 'local_cafe',
    text: 'Dairy & Milk',
    totalCount: '652',
    bgcolor: '#f0fedc',
  },
];

const CategorySwiper = () => {
  console.log(window.innerWidth);
  return (
    <>
      <div className="wrapper">
        <div className="splide">
          <Splide options={options} aria-label="My Favorite Images">
            {slides.map((slide) => (
              <SplideSlide>
                <div className="slide">
                  <div className="card" style={{backgroundColor:slide.bgcolor}}>
                    <Icon name={slide.icon} className="cat-icon" />
                    <div className='card-item'>
                      <span className='card-item-title'>{slide.text}</span>
                      <span className='card-item-count'>{slide.totalCount} Items</span>
                    </div>
                  
                  </div>
                </div>
              </SplideSlide>
            ))}
          </Splide>
        </div>
      </div>
    </>
  );
};

export default CategorySwiper;
