import React from "react"
import { render, screen } from "@testing-library/react"
import ProtectedApartmentIndex from "./ProtectedApartmentIndex"

describe("<ProtectedApartmentIndex />", () => {
  it("renders without crashing", () => {
    const div = document.createElement("div")
    render(<ProtectedApartmentIndex />, div)
  })
  it("can see the title of the page", () => {
    const div = document.createElement("div")
    render(<ProtectedApartmentIndex />, div)
    const title = screen.getByText("My Listings")
    expect(title).toBeInTheDocument()
  })
})