import { render } from "@testing-library/react";
import { getByAltText } from '@testing-library/dom';
import Navbar from './Navbar';

describe("the header", () => {
  let header: HTMLElement;

  beforeEach(() => {
    render(<Navbar />);    
    header = document.getElementsByTagName("header")[0];
  });

  it("contains the logo", () => {
    const Logo = getByAltText(header, 'logo');
    expect(Logo).toBeInTheDocument();
  })

  it("contains the hamburger logo", () => {
    const Hamburger = getByAltText(header, "show/hide navigation");
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