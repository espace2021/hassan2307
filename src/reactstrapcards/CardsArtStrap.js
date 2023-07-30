import React from 'react'
import { useSelector } from "react-redux";
import { Row,Col, Card, CardBody, CardImg, CardTitle, CardText, Button } from "reactstrap";

import "bootstrap/dist/css/bootstrap.min.css";

const CardsArtStrap = () => {

    const {articles,isLoading,error} = useSelector((state)=>state.storearticles);

  return (
    <Row className="justify-content-center text-center">
  
        {articles?.map((article) =>{
            return   <Col xs={2}>
            <Card key={article._id}>
              <CardImg
                        width="50px"
                        height="150px"
                    src={article.imageart}
                    alt={article.designation} />
                <CardBody>
                       <CardTitle tag="h5">{article.designation}</CardTitle>
                       <CardText>{article.marque}</CardText>
                        <Button>Add to Cart</Button>
                </CardBody>
              </Card>
              </Col>
        })}
      </Row>

  )
}

export default CardsArtStrap
