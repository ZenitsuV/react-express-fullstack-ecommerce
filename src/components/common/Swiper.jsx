import './Swiper.css';
import '@splidejs/react-splide/css';
import { Splide, SplideSlide } from '@splidejs/react-splide';
import products from '/public/products'

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


const arr = Array.from({length:products.length}).map((_,index) => index);

const Swiper = ({component, children}) => {
  console.log(window.innerWidth);
  return (
    <>
      <div className="wrapper">
        <div className="splide">
          <Splide options={options} aria-label="Slide Items">
            {arr.map((product) => (
              <SplideSlide>
                <div className="slide">
                  {component}
                </div>
              </SplideSlide>
            ))}
          </Splide>
        </div>
      </div>
    </>
  );
};

export default Swiper;
