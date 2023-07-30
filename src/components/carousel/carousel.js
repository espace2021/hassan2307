import React,{useEffect,useState} from 'react'
import InfiniteCarousel from "react-leaf-carousel";
import {useSelector} from "react-redux"

export default function RLCarousel() {

    const {articles} = useSelector((state)=>state.storearticles);

  
function ImgComponent({ src, alt, classId }) {
   
  return (
    <div className={classId}>
      <img src={src} alt={alt} />
      <p>{alt}</p>
    </div>
  );
}

// carousel data iterator
const ImgDataIterator = articles.map((element) => (
  <ImgComponent src={element.imageart} alt={element.designation}  key={element._id} />
));

  return (
    <InfiniteCarousel
      breakpoints={[
        {
          breakpoint: 200,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1
          }
        },
        {
          breakpoint: 640,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 2
          }
        },
        {
          breakpoint: 768,
          settings: {
            slidesToShow: 3,
            slidesToScroll: 3
          }
        }
      ]}
      lazyLoad={false}
      dots={true}
      showSides={true}
      sidesOpacity={0.5}
      sideSize={0.1}
      slidesToScroll={4}
      slidesToShow={4}
      scrollOnDevice={true}
    >
      {ImgDataIterator }
    </InfiniteCarousel>
  );
}
