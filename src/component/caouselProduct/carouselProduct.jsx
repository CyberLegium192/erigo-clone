import React, {useState, useEffect} from 'react'
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import './carousel.css'
import { Link } from 'react-router-dom';

const Carousel = () => {
  const [dataProduct, setDataProduct] = useState([]);
  useEffect(() => {
    dataFecth();
  }, []);
  
  
  const dataFecth = () => {
    fetch('https://646bae327d3c1cae4ce42607.mockapi.io/hotproduct')
      .then(resp => {
        return resp.json()
      })
      .then(data => {
        setDataProduct(data)
        console.log(data)
      })
      .catch(error => {
        console.log('Error:', error);
      });
  }
  const settings = {
    dots: true,
    infinite: true,
    speed: 900,
    slidesToShow: 3, // Number of visible slides at a time
    slidesToScroll: 1, // Number of slides to scroll
    responsive: [
      {
        breakpoint: 768, // Adjust the settings for smaller screens
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };

  return (
    <>
    <div className='hero-product-header'>
      <h4>HOT PRODUCT</h4>
      <Link to='/login' >see more</Link>
    </div>
    <div className='carousel-product'>
      <Slider {...settings}>
        <div className='container-carousel'>
          <div className='card-box'>
            <div className='image-card'>
              <img src="https://cdn.shopify.com/s/files/1/0607/2841/0296/files/ErigoJoggerPantsNoaLightGrey1.jpg?v=1683089376"/>
            </div>
            <div className='content-product'>
              <p>Erigo Jogger Pants Noa Light Grey</p>
              <span className='diskon line'>Rp 450.000</span>
              <span className='diskon'>Rp 149.000</span>
            </div>
            <div className='diskon-logo'>
              <span>-67%</span>
            </div>
          </div>
          <div className='card-box'>
            <div className='image-card'>
              <img src="https://cdn.shopify.com/s/files/1/0607/2841/0296/products/CHINO-PANTS-PAUL-LIGHT-GREY_1-1-819x1024.jpg?v=1660126654"/>
            </div>
            <div className='content-product'>
              <p>Erigo Chino Pants Paul Light Grey</p>
              <span className='diskon line'>Rp 500.000</span>
              <span className='diskon'>Rp 149.000</span>
            </div>
            <div className='diskon-logo'>
              <span>-67%</span>
            </div>
          </div>
        </div>
        <div className='container-carousel'>
          <div className='card-box'>
            <div className='image-card'>
              <img src="https://cdn.shopify.com/s/files/1/0607/2841/0296/products/CHINO-PANTS-PAUL-LIGHT-GREY_1-1-819x1024.jpg?v=1660126654"/>
            </div>
            <div className='content-product'>
              <p>Erigo Chino Pants Paul Light Grey</p>
              <span className='diskon line'>Rp 450.000</span>
              <span className='diskon'>Rp 149.000</span>
            </div>
            <div className='diskon-logo'>
              <span>-70%</span>
            </div>
          </div>
          <div className='card-box'>
            <div className='image-card'>
              <img src="https://cdn.shopify.com/s/files/1/0607/2841/0296/products/CHINO-PANTS-ZENO-LIGHT-BROWN-1.jpg?v=1680575644"/>
            </div>
            <div className='content-product'>
              <p>Erigo Chino Pants Zeno Light Brown</p>
              <span className='diskon line'>Rp 500.000</span>
              <span className='diskon'>Rp 149.000</span>
            </div>
            <div className='diskon-logo'>
              <span>-67%</span>
            </div>
          </div>
        </div>
        <div className='container-carousel'>
          <div className='card-box'>
            <div className='image-card'>
              <img src="https://cdn.shopify.com/s/files/1/0607/2841/0296/products/6407567f32495a34b1cee8049c716da1.jpg?v=1673339458"/>
            </div>
            <div className='content-product'>
              <p>Erigo T-Shirt Oversize Antelope Black</p>
              <span className='diskon line'>Rp 300.000</span>
              <span className='diskon'>Rp 90.000</span>
            </div>
            <div className='diskon-logo'>
              <span>-70%</span>
            </div>
          </div>
          <div className='card-box'>
            <div className='image-card'>
              <img src="https://cdn.shopify.com/s/files/1/0607/2841/0296/files/ErigoJoggerPantsJessieBlack1.jpg?v=1683089318"/>
            </div>
            <div className='content-product'>
              <p>Erigo Jogger Pants Jessie Black</p>
              <span className='diskon line'>Rp 500.000</span>
              <span className='diskon'>Rp 149.000</span>
            </div>
            <div className='diskon-logo'>
              <span>-67%</span>
            </div>
          </div>
        </div>
        <div className='container-carousel'>
          <div className='card-box'>
            <div className='image-card'>
              <img src="https://cdn.shopify.com/s/files/1/0607/2841/0296/files/ErigoJoggerPantsJessieBlack1.jpg?v=1683089318"/>
            </div>
            <div className='content-product'>
              <p>Erigo Chino Pants Alexa Navy</p>
              <span className='diskon line'>Rp 300.000</span>
              <span className='diskon'>Rp 90.000</span>
            </div>
            <div className='diskon-logo'>
              <span>-70%</span>
            </div>
          </div>
          <div className='card-box'>
            <div className='image-card'>
              <img src="https://cdn.shopify.com/s/files/1/0607/2841/0296/products/Erigo-Short-Shirt-Jazlyn-Black-1_61108485-7e8b-44fa-8092-0f0d91d59436.jpg?v=1674013993"/>
            </div>
            <div className='content-product'>
              <p>Erigo Short Shirt Jazlyn Black</p>
              <span className='diskon line'>Rp 500.000</span>
              <span className='diskon'>Rp 149.000</span>
            </div>
            <div className='diskon-logo'>
              <span>-67%</span>
            </div>
          </div>
        </div>
        
      </Slider>
      </div>
    </>
  );
};

export default Carousel;
