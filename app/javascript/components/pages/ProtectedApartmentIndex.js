import React from "react"
import { Card, CardBody, CardTitle, CardText, ListGroup, ListGroupItem } from "reactstrap"


const ProtectedApartmentIndex = ({ apartments, current_user }) => {
    const currentUserApartments = apartments?.filter((apartment) => {
        return apartment.user_id === current_user.id
    })
    
  return (
    <main>
      <h1 className="index-header">My Listings</h1>
      <div className="index-card">
      {currentUserApartments?.map((apartment, index) => {
        return (
          <Card  style={{width: '18rem'}} key={index}>
            <img className="index-image" alt="Image" src={apartment.image}/>
            <CardBody>
              <CardTitle tag="h5">
                {apartment.price}
              </CardTitle>
              <CardText>
                {apartment.street}, {apartment.city}, {apartment.state}
              </CardText>
            </CardBody>
            <ListGroup flush>
              <ListGroupItem>
                Bedrooms: {apartment.bedrooms}
              </ListGroupItem>
              <ListGroupItem>
                Bathrooms: {apartment.bathrooms}
              </ListGroupItem>
              <ListGroupItem>
                Contact: {apartment.manager}
                <br></br>
                Email: {apartment.email}
              </ListGroupItem>
            </ListGroup>
          </Card>
        )
      })}
      </div>
    </main>
  )
}

export default ProtectedApartmentIndex