import { render } from "@testing-library/react";
import { screen } from '@testing-library/dom';
import Navbar from './Navbar';

describe("the header", () => {
  beforeEach(() => {
    render(<Navbar />);    
  });

  it("contains the logo", () => {
    const Logo = screen.getByAltText('logo');
    expect(Logo).toBeInTheDocument();
  })

  it("contains the hamburger logo", () => {
    const Hamburger = screen.getByAltText("show/hide navigation");
    expect(Hamburger).toBeInTheDocument();
  })
});

// describe("the dialog", () => {
//   it("renders", () => {
//     render(<Navbar />);

//     const Dialog = screen.getByRole("dialog");

//     expect(Dialog).toBeInTheDocument();
//   })
// })