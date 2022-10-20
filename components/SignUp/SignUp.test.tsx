import { render } from "@testing-library/react";
import { screen } from '@testing-library/dom';
import SignUp from './SignUp';

describe("SignUp", () => {
  beforeEach(() => {
    render(<SignUp />);   
  });

  // it("contains the SVG illustration", () => {
  //   const image = screen.getByRole('img');
  //   expect(image).toBeInTheDocument();
  // })

  it("contains paragraph", () => {
    const paragraph = screen.getByRole('paragraph');
    expect(paragraph).toBeInTheDocument();
    const content = "Simplify how your team works today.";
    expect(paragraph).toContain(content);
  })

  it("contains button", () => {
    const button = screen.getByRole("button");
    expect(button).toBeInTheDocument();

    const content = "Get Started";
    expect(button).toContain(content);
  })
});

