import React, { useEffect} from 'react';
import { useDispatch,useSelector } from 'react-redux';
import { getCategories } from '../../features/categorieSlice';
import Activity from "./Activity";

const Home = () => {

    const dispatch = useDispatch();
    
    const { categories } = useSelector((state) => state.storecategories);

    useEffect(() => {
        dispatch(getCategories())
        window.scrollTo(0, 0);
      }, []);
    

  return (
    <div>
       {categories.map((el, index) =>
       
            <Activity el={el} key={index} />
               
      )}
    </div>
  )
}

export default Home
