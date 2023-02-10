import React from "react"
import { render, screen } from "@testing-library/react"
import ApartmentShow from "./ApartmentShow"
import { MemoryRouter, Routes, Route } from "react-router-dom"
import mockApartments from "../mockApartments"

const rendershow = () => {
  render(
    <MemoryRouter initialEntries={["/apartmentshow/1"]}>
      <Routes>
        <Route path="apartmentshow/:id" element={<ApartmentShow apartments={mockApartments} />} />
      </Routes>
    </MemoryRouter>
  )
}

describe("<ApartmentShow />", () => {
  it("renders without crashing", () => {
    const div = document.createElement("div")
    render(<ApartmentShow />, div)
  })

  it("renders apartment information", () => {
    rendershow()
    const main = screen.getByRole("main")
    expect(main).toHaveAttribute("alt", "show page")
    })
})