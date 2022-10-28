import { render } from "@testing-library/react";
import { fireEvent, screen } from '@testing-library/dom';
import userEvent from '@testing-library/user-event';
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

describe("accessibility", () => {
  render(<Navbar />);    

  const hamburger = screen.getByAltText("show/hide navigation");
  fireEvent.keyDown(hamburger, { key: 'Enter', code: 'Enter', charCode: 13 });

  const Dialog = screen.getByRole("dialog");
  expect(Dialog).toBeInTheDocument();
})

describe("the dialog", () => {
  beforeEach(() => {
    render(<Navbar />);    

    const hamburger = screen.getByAltText("show/hide navigation");
    userEvent.click(hamburger);
  });

  it("renders", () => {
    const Dialog = screen.getByRole("dialog");
    expect(Dialog).toBeInTheDocument();
  })

  it("renders nav", () => {
    const nav = screen.getByRole('navigation');
    expect(nav).toBeInTheDocument();
  })
})