import React from 'react';
import './Banner.css';

const Banner = ({bannerType}) => {
    return (
        <>
        <section className='pd-tb-40'>
            <div className='container' >
                <div className='banner-wrapper'>
                {bannerType == "Large" &&   
                <div className='banner' style={{backgroundImage:`url('https://grabit-react-next.maraviyainfotech.com/assets/img/banner/1.jpg')`}}>              
                    <div className='banner-detail'>
                        <div className='banner-info'>
                            <h2>Fresh Fruits <br/>Healthy Products</h2>
                            <h3>30% offer sale <span>Hurry up!!!</span></h3>
                            <a className='btn-2' href="/">Shop now</a>
                        </div>
                    </div>
                </div>}
              
                {bannerType == 'Small' && 
                <>
                   <div className='banner' style={{backgroundImage:`url('https://grabit-react-next.maraviyainfotech.com/assets/img/banner/2.jpg')`}}>              
                    <div className='banner-detail'>
                        <div className='banner-info'>
                            <h2 style={{fontSize:'30px',margin:'0'}}>Tasty Snack & Fastfood</h2>
                            <h3 style={{fontSize:'16px',margin:'0'}}>The flavor of something special</h3>
                            <a className='btn-2' href="/">Shop now</a>
                        </div>
                    </div>
                 </div>
                    <div className='banner' style={{backgroundImage:`url('https://grabit-react-next.maraviyainfotech.com/assets/img/banner/3.jpg')`}}>              
                    <div className='banner-detail'>
                        <div className='banner-info'>
                            <h2 style={{fontSize:'30px',margin:'0'}}>Fresh Fruits & veggies</h2>
                            <h3 style={{fontSize:'16px',margin:'0'}}>A healthy meal for every one</h3>
                            <a className='btn-2' href="/">Shop now</a>
                        </div>
                    </div>
                 </div>
                </>                    
                 }
            
                </div>
                
            </div>         
        </section>      
        </>
    )
}

export default Banner;
