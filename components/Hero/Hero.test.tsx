import { render } from "@testing-library/react";
import { screen } from '@testing-library/dom';
import Hero from './Hero';

describe("Hero", () => {
  beforeEach(() => {
    render(<Hero />);   
  });

  it("contains the SVG illustration", () => {
    const image = screen.getByRole('img');
    expect(image).toBeInTheDocument();
  })

  it("contains header", () => {
    const header = screen.getByRole('heading');
    expect(header).toBeInTheDocument();
  })

  it("contains pagagraph", () => {
    const pagagraph = screen.getByText("Manage makes it simple for software teams to plan day-to-day tasks while keeping the larger team goals in view.");
    expect(pagagraph).toBeInTheDocument();
  })

  it("contains call to action button", () => {
    const callToAction = screen.getByRole("button");
    expect(callToAction).toBeInTheDocument();
  })
});
