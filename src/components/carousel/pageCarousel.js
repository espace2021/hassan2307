import React,{useEffect} from 'react'
import { useDispatch } from "react-redux";
import {getArticles} from "../../features/articleSlice";


import RLCarousel from './carousel'


const PageCarousel = () => {

  const dispatch = useDispatch();
  
   useEffect(() => {
      dispatch(getArticles());
        },[])

 return (
    <div>
  <RLCarousel />

 </div>
  )
}

export default PageCarousel



