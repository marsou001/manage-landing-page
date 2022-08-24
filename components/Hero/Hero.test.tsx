import { render } from "@testing-library/react";
import { getByAltText } from '@testing-library/dom';
import Hero from './Hero';

describe("Hero", () => {
  beforeEach(() => {
    render(<Hero />);   
  });

  it("contains the SVG illustration", () => {
    const Ill = getByAltText(header, 'logo');
    expect(Logo).toBeInTheDocument();
  })

  it("contains the hamburger logo", () => {
    const Hamburger = getByAltText(header, "show/hide navigation");
    expect(Hamburger).toBeInTheDocument();
  })
});
