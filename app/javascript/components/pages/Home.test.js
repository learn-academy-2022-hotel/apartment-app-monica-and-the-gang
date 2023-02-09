import React from "react"
import { render, screen } from "@testing-library/react"
import Home from "./Home"

describe("<Home />", () => {
  it("renders without crashing", () => {
    const div = document.createElement("div")
    render(<Home />, div)
  })
  it("renders a heading", () => {
    const div = document.createElement("div")
    render(<Home />, div)
    const heading = screen.getByText("Welcome to DNCM.")
    expect(heading).toBeInTheDocument()
  })
})
