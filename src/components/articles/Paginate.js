import React,{useEffect} from 'react'
import { useDispatch,useSelector } from "react-redux";
import {getTot} from "../../features/articleSlice";

const Paginate = ({ itemsPerPage,  paginate }) => {

  const dispatch=useDispatch()
  
   useEffect(() => {
      dispatch(getTot())
       }, [])

   const {tot} = useSelector((state)=>state.storearticles);

   const pageNumbers = [];
 
   for (let i = 1; i <= Math.ceil( tot/ itemsPerPage); i++) {
      pageNumbers.push(i);
   }
 
   return (
      <span>
         <span>
            {pageNumbers.map((number) => (
               <span
                  key={number}
                  onClick={() => paginate(number)}
                  >
                <span style={{cursor:'pointer'}}>  {number} </span>
               </span>
            ))}
         </span>
      </span>
   );
};
 
export default Paginate;