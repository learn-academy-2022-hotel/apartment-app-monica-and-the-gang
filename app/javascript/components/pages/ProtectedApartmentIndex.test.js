import React from "react"
import { render, screen } from "@testing-library/react"
import ProtectedApartmentIndex from "./ProtectedApartmentIndex"

describe("<ProtectedApartmentIndex />", () => {
    it("renders without crashing", () => {
      const div = document.createElement("div")
      render(<ProtectedApartmentIndex />, div)
      expect(screen.getByText("My Listings")).toBeInTheDocument()
    })
})
