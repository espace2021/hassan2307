
import ProductsAppAdmin from './admin/components/articles/ProductsAppAdmin';
import './App.css';
import Listarticles from './components/articles/Listarticles';
import NavScroll from './components/NavScroll';
import { ToastContainer } from 'react-toastify';
import { BrowserRouter as Router,Routes,Route } from 'react-router-dom';


function App() {
  return (
    <div className="App">
      <ToastContainer/>
      <Router>
        
      <NavScroll/>
      
      <Routes>
      
        <Route path='/articlescard' element={<Listarticles/>}/>
        <Route path='/articlesadmin' element={<ProductsAppAdmin/>}/>
          
      </Routes>
     
      </Router>
      </div>
  );
}

export default App;
