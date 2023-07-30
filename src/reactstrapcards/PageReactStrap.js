import React,{useEffect} from 'react'
import { useDispatch} from "react-redux";
import {getArticles} from "../features/articleSlice";

import CardsArtStrap from './CardsArtStrap';

export default function PageReactStrap() {

         const dispatch = useDispatch();
        
         useEffect(() => {
            dispatch(getArticles());
              },[])
              


  return (
    <CardsArtStrap />
     
  );
}
