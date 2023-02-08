import React from "react"
import { render, screen } from "@testing-library/react"
import ApartmentIndex from "./ApartmentIndex"
import mockApartments from "../mockApartments"
import { BrowserRouter } from "react-router-dom";

describe("<ApartmentIndex />", () => {
  it("renders without crashing", () => {
    const div = document.createElement("div")
    render(<ApartmentIndex />, div)
  })
  it("renders apartment cards", () => {
    const div = document.createElement("div")
    render(
      // <BrowserRouter>
      <ApartmentIndex apartment={mockApartments} />, div )
      {/* </BrowserRouter>, div) */}
      // mockApartments.forEach(apartment => {
      //   const apartmentPrice = screen.getByText(apartment.price)
      //   expect(apartmentPrice).toBeInTheDocument() 
      // })
      const apartmentText = screen.getByText("Apartments")
      expect(apartmentText).toBeInTheDocument()
  })
})
