import React, { useEffect,useState} from 'react';
import { useDispatch,useSelector } from 'react-redux';
import { getScategories } from '../../features/scategorieSlice';

import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

import {  useParams } from 'react-router-dom';

import CarouselProduits from './carouselProduits'

const responsive = {
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 6,
    slidesToSlide: 3 // optional, default to 1.
  },
  tablet: {
    breakpoint: { max: 1024, min: 464 },
    items: 3,
    slidesToSlide: 2 // optional, default to 1.
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 2,
    slidesToSlide: 1 // optional, default to 1.
  }
};

export default function RLCarouselCateg() {

const [scatID, setScatID] = useState();

  let { id } = useParams();

  const { scategories } = useSelector((state) => state.storescategories);

  
  const dispatch = useDispatch();
    
  useEffect(() => {
      dispatch(getScategories())

    }, []);

   return (
    <>
    <Carousel
    //partialVisbile
    itemClass="image-item"
    responsive={responsive}
   // showDots={true}
  >
  { scategories
  .filter((scategories) => (id ? scategories.categorieID === id : true)) 
  .map((element) =>  (
        <div key={element._id} onClick={()=>{setScatID(element._id)}} style={{cursor:'pointer'}}>
        <img
          draggable={false}
          style={{ width: "200px", height: "150px" }}
          src={element.imagescategorie}
        />
        <div>{element.nomscategorie}</div>
       </div>
      )
    )}
  </Carousel>

 {scatID ? <CarouselProduits selectedSCategory={scatID}/> : null} 
  </>
  );
}