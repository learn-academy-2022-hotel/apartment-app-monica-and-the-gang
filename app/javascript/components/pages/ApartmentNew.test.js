import React from "react"
import { render, screen } from "@testing-library/react"
import ApartmentNew from "./ApartmentNew"

describe("<ApartmentNew />", () => {
  it("renders without crashing", () => {
    const div = document.createElement("div")
    render(<ApartmentNew />, div)
  })
  it("can see the title of the page", () => {
    const div = document.createElement("div")
    render(<ApartmentNew />, div)
    const title = screen.getByText("Create", {exact: false})
    expect(title.textContent).toEqual("Create New Apartment Listing")
  })
})
