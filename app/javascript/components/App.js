import React, { useState, useEffect } from "react"
import { BrowserRouter, Routes, Route } from "react-router-dom"
import Footer from "./components/Footer"
import Header from "./components/Header"
import ApartmentEdit from "./pages/ApartmentEdit"
import ApartmentIndex from "./pages/ApartmentIndex"
import ApartmentNew from "./pages/ApartmentNew"
import ApartmentShow from "./pages/ApartmentShow"
import Home from "./pages/Home"
import NotFound from "./pages/NotFound"
import mockApartments from "./mockApartments"
import ProtectedApartmentIndex from "./pages/ProtectedApartmentIndex"


const App = (props) => {
  const [apartments, setApartments] = useState([])
  
  useEffect(() => {
    readApartments()
  }, [])

  const readApartments = () => {
    fetch("/apartments")
      .then((response) => response.json())
      .then((payload) => {
        setApartments(payload)
      })
      .catch((error) => console.log(error))
  }

  const createApartment = (aptObj) => {
    fetch("/apartments", {
      body: JSON.stringify(aptObj),
      headers: {
        "Content-Type": "application/json"
      },
      method: "POST"
    })
      .then(response => response.json())
      .then(payload => readApartments())
      .catch(errors => console.log("createApartment errors:", errors))
  }

  return (
    <>
      <BrowserRouter>
        <Header {...props} />
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route path="/apartmentindex" element={<ApartmentIndex apartments={apartments}/>} />
          <Route path="/apartmentshow/:id" element={<ApartmentShow createApartment={createApartment} />}/>
          <Route path="/apartmentnew" element={<ApartmentNew createApartment={createApartment} currentUser={props.current_user}/>} />
          <Route path="/apartmentedit" element={<ApartmentEdit />} />
          <Route path="/mylistings" element={<ProtectedApartmentIndex apartments={apartments} current_user={props.current_user} />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </>
  )
}

export default App
