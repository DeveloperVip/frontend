import React, { useState, useEffect } from 'react';
import './Carousel.css';
import { useNavigate } from 'react-router-dom';

const images = [
  {
    label: 'San Francisco – Oakland Bay Bridge, United States',
    imgPath:
      'https://images.unsplash.com/photo-1537944434965-cf4679d1a598?auto=format&fit=crop&w=400&h=250&q=60',
  },
  {
    label: 'Bird',
    imgPath:
      'https://images.unsplash.com/photo-1538032746644-0212e812a9e7?auto=format&fit=crop&w=400&h=250&q=60',
  },
  {
    label: 'Bali, Indonesia',
    imgPath:
      'https://images.unsplash.com/photo-1537996194471-e657df975ab4?auto=format&fit=crop&w=400&h=250',
  },
  {
    label: 'Goč, Serbia',
    imgPath:
      'https://images.unsplash.com/photo-1512341689857-198e7e2f3ca8?auto=format&fit=crop&w=400&h=250&q=60',
  },
];

const Carousel = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [hovered, setHovered] = useState(false);
  const navigate = useNavigate()
  useEffect(() => {
    const intervalId = setInterval(() => {
      if (!hovered) {
        setActiveIndex((prevIndex) => (prevIndex === images.length - 1 ? 0 : prevIndex + 1));
      }
    }, 3000);

    return () => clearInterval(intervalId);
  }, [hovered]);

  const handlePrev = () => {
    setActiveIndex((prevIndex) => (prevIndex === 0 ? images.length - 1 : prevIndex - 1));
  };

  const handleNext = () => {
    setActiveIndex((prevIndex) => (prevIndex === images.length - 1 ? 0 : prevIndex + 1));
  };

  return (
    <div className="carousel-container" onMouseEnter={() => setHovered(true)} onMouseLeave={() => setHovered(false)}>
      <p><strong>website thương mại điện tử</strong></p>
      <div className="carousel-slide" style={{ transform: `translate3d(-${activeIndex * 1282}px,0px,0px)` }}>
        {images.map((image, index) => (
          <div key={index} className="carousel-image">
            <img src={image.imgPath} alt={image.label} />
            <p style={{display:"none"}}>{image.label}</p>
            
          </div>
        ))}
      </div>
      <button onClick={()=>navigate("/product")} className='link'><strong>Xem sản phẩm</strong></button>
      <button className="carousel-btn prev" onClick={handlePrev}>&#10094;</button>
      <button className="carousel-btn next" onClick={handleNext}>&#10095;</button>
    </div>
  );
};

export default Carousel;
