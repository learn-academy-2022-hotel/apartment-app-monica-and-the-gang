import React from "react"
import { useState } from 'react'
import { Form, FormGroup, Label, Row, Col, Input, Button } from 'reactstrap'
import { useNavigate } from "react-router-dom"

const ApartmentNew = ({ createApartment, currentUser }) => {

  const [newApt, setNewApt] = useState({
    street: "",
    city: "",
    state: "",
    manager: "",
    email: "",
    price: "",
    bedrooms: "",
    bathrooms: "",
    pets: "",
    image: "",
    user_id: currentUser.id
  })
    
  const handleChange = (e) => {
    setNewApt({...newApt, [e.target.name]: e.target.value})
  }
  
  const navigate = useNavigate()
  const handleSubmit = () => {
    createApartment(newApt)
    navigate('/apartmentindex')
  }
  
  return (
      <Form>
        <h1>Create New Apartment Listing</h1>
        <Row>
          <Col md={6}>
            <FormGroup>
              <Label for="exampleEmail">
                Email
              </Label>
              <Input
                id="email"
                name="email"
                placeholder="enter contact email"
                type="email"
                onChange={handleChange}
                value={newApt.email}
              />
            </FormGroup>
          </Col>
          <Col md={6}>
            <FormGroup>
              <Label for="examplePassword">
                Price
              </Label>
              <Input
                id="price"
                name="price"
                placeholder="enter a price"
                type="text"
                onChange={handleChange}
                value={newApt.price}
              />
            </FormGroup>
          </Col>
        </Row>
        <FormGroup>
          <Label for="exampleAddress">
            Image
          </Label>
          <Input
            id="image"
            name="image"
            placeholder="image url here"
            onChange={handleChange}
            value={newApt.image}
          />
        </FormGroup>
        <FormGroup>
          <Label for="exampleAddress2">
            Manager
          </Label>
          <Input
            id="manager"
            name="manager"
            placeholder="manager name"
            onChange={handleChange}
            value={newApt.manager}
          />
        </FormGroup>
        <Row>
          <Col md={6}>
            <FormGroup>
              <Label for="exampleCity">
                Street
              </Label>
              <Input
                id="street"
                name="street"
                onChange={handleChange}
                value={newApt.street}
              />
            </FormGroup>
          </Col>
          <Col md={4}>
            <FormGroup>
 
              <Label for="exampleState">
                City
              </Label>
              <Input
                id="city"
                name="city"
                onChange={handleChange}
                value={newApt.city}
              />
            </FormGroup>
          </Col>
          <Col md={2}>
            <FormGroup>
              <Label for="exampleZip">
                State
              </Label>
              <Input
                id="state"
                name="state"
                onChange={handleChange}
                value={newApt.state}
              />
            </FormGroup>
          </Col>
        </Row>
        <Row>
          <Col md={4}>
            <FormGroup>
              <Label for="exampleCity">
                Bathrooms
              </Label>
              <Input
                id="bathrooms"
                name="bathrooms"
                onChange={handleChange}
                value={newApt.bathrooms}
              />
            </FormGroup>
          </Col>
          <Col md={4}>
            <FormGroup>
              <Label for="exampleState">
                Bedrooms
              </Label>
              <Input
                id="bedrooms"
                name="bedrooms"
                onChange={handleChange}
                value={newApt.bedrooms}
              />
            </FormGroup>
          </Col>
          <Col md={2}>
            <FormGroup>
              <Label for="exampleZip">
                Pets
              </Label>
              <Input
                id="pets"
                name="pets"
                onChange={handleChange}
                value={newApt.pets}
              />
            </FormGroup>
          </Col>
        </Row>
        <Button 
          onClick={handleSubmit} 
          name="submit"
        >
          Submit
        </Button>
      </Form>
  )
}

export default ApartmentNew