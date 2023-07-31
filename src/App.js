
import ProductsAppAdmin from './admin/components/articles/ProductsAppAdmin';
import './App.css';
import Listarticles from './components/articles/Listarticles';
import NavScroll from './components/NavScroll';
import { ToastContainer } from 'react-toastify';
import { BrowserRouter as Router,Routes,Route } from 'react-router-dom';

import AjoutC from './components/upoadCloudinary/ajoutC';
import PageCarousel from './components/carousel/pageCarousel'
//import PageProSideBar from './admin/components/PageProSideBar'
import PageReactStrap from './reactstrapcards/PageReactStrap'

import Home from './components/pageHome/Home'
import CarouselSCategories from './components/pageHome/carouselSCategories'

function App() {
  return (
    <div className="App">
      <ToastContainer/>
      <Router>
        
      <NavScroll/>
      
      <Routes>
     {/* <Route path='/pageProSideBar' element={<PageProSideBar/>}/> */} 
        <Route path='/articlescard' element={<Listarticles/>}/>
        <Route path='/articlesadmin' element={<ProductsAppAdmin/>}/>
        <Route path='/ajoutC' element={<AjoutC/>}/>
        <Route path='/pageCarousel' element={<PageCarousel/>}/>
        <Route path='/pageReactStrap' element={<PageReactStrap/>}/>
        <Route path='/' element={<Home/>}/>
        <Route path='/selectedCateg/:id' element={<CarouselSCategories/>}/>
      </Routes>
     
      </Router>
      </div>
  );
}

export default App;
