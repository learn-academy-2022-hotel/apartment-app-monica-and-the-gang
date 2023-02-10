import React from "react"
import { render } from "@testing-library/react"
import ApartmentShow from "./ApartmentShow"

describe("<ApartmentShow />", () => {
  it("renders without crashing", () => {
    const div = document.createElement("div")
    render(<ApartmentShow />, div)
  })
  it("can see the title of the page", () => {
    const div = document.createElement("div")
    render(<ApartmentShow />, div)
    const title = screen.getByText("Apartment", {exact: false})
    expect(title.textContent).toEqual("Apartment Information:")
  })
})
