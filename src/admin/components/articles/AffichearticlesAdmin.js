import React,{useState} from 'react'
import ReactLoading from 'react-loading';
import {useSelector} from "react-redux"
import Button from 'react-bootstrap/Button';
import {  toast } from 'react-toastify';
import EditArticle from './EditArticle';
import {delArticle} from "../../../features/articleSlice"
import {useDispatch} from "react-redux";
const AffichearticlesAdmin = () => {
const dispatch=useDispatch()
  const [showModal, setShowModal] = useState(false);

    const {articles,isLoading,error} = useSelector((state)=>state.storearticles);
    const [selectedItem, setSelectedItem] = useState(null);
   const handleClose= () => {
      setShowModal(false);
      setSelectedItem(null);
    }

    const handleDelete=(id,ref)=>{
      if(window.confirm("supprimer Article O/N"))  {
         dispatch(delArticle(id));
         toast(`Article ${ref} Supprimé`, {
          position: "top-right",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          })
       }   
  }

    if (isLoading) return  <center><ReactLoading type='spokes' color="red" height={'8%'} width={'8%'}  /></center>
    if (error) return <p>Impossible d'afficher la liste des articles...</p>
   
    const handleEdit = (item) => {
      setSelectedItem(item);
      setShowModal(true);
    };
      
    return (
        <>
        
        <div style={{overflowX: "auto"}}>
            
    <div className="table_responsive">
    <table>
      <thead>
        <tr>
          <th>Image</th>
          <th>Référence</th>
          <th>Désignation</th>
          <th>Quantité</th>
          <th>Prix</th>
          <th>Action</th>
        </tr>
      </thead>

      <tbody>
      {articles.map((art,ind)=> 
        <tr key={ind}>
          
          <td><img src={art.imageart} alt=""/></td>
          <td>{art.reference}</td>
          <td>{art.designation}</td>
          <td>{art.qtestock}</td>
          <td>{art.prix}</td>
          <td>
            <span className="action_btn">
            <Button
                    
                    onClick={() => handleEdit(art)}
                    size="md"
                    className="text-warning btn-link edit"                   
                  >
                   <i class="fa-solid fa-pen-to-square"></i>
                  </Button>
            <Button
                    
                    onClick={(e) => {
                      
                      handleDelete(art._id,art.reference);
                      }}
                    
                   
                    size="md"
                    className="text-danger btn-link delete"
                  >
                  <i className="fa fa-trash" />
                  </Button>
              
            </span>
          </td>
        </tr>
)}
             

      </tbody>
    </table>

  </div>
  

</div>
{showModal && (
        <EditArticle
          show={showModal}
          handleClose={handleClose}
          art={selectedItem}
        />
      )}
</>
  )
}

export default AffichearticlesAdmin
