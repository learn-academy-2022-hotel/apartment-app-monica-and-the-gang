import React from "react"
import { useParams } from "react-router-dom"


const ApartmentShow = ({ apartments }) => {
  const { id } = useParams()
  
  let currentApartment = apartments?.find((apartments) => apartments.id === +id)

  return (
    <main alt="show page">
      {currentApartment && (
      <>
      <h3>Apartment Show</h3>
        <img 
          alt={`profile of an apartment listing ${currentApartment.image}`} 
          src={currentApartment.image}
        />
        <div>
          <h1>Apartment Information:</h1>
          <br></br>
          <h1>Price: $ {currentApartment.price}</h1> 
          <br></br>
          <h1>Address:</h1>
          <h2>{currentApartment.street},{currentApartment.city}, {currentApartment.state}</h2>
          <br></br>
          <h1>Apartment Features:</h1> 
          <br></br>
          <h2>Bedrooms: {currentApartment.bedrooms}</h2>
          <br></br>
          <h2>
          Bathrooms: {currentApartment.bathrooms}</h2>
          <br></br> 
          <h2>Pet: {currentApartment.pets}</h2>
          <br></br>
          <h1>Contact Information:</h1> 
          <br></br>
          <h1>Manager: {currentApartment.manager}</h1>
          <h1>email: {currentApartment.email}</h1>
          <br></br>
        </div>
      </>
      )}
    </main>
  )
}

export default ApartmentShow
