import { render } from "@testing-library/react";
import { screen } from '@testing-library/dom';
import Footer from './Footer';

describe("Footer", () => {
  beforeEach(() => {
    render(<Footer />);
  })

  it("contains input field", () => {
    const inputElement = screen.getByRole("textbox");
    expect(inputElement).toBeInTheDocument();
  })

  it("contains email submit button", () => {
    const button = screen.getByRole("button");
    expect(button).toBeInTheDocument();
    expect(button).toHaveTextContent("GO");
  })

  it("contains navigation links", () => {
    const list = screen.getByRole("list");
    expect(list).toBeInTheDocument();

    const listItems = screen.getAllByRole("listitem");

    listItems.forEach(listItem => {
      expect(listItem).toBeInTheDocument();
    });

    expect(listItems.length).toBe(7);
  })

  it("contains social media links", () => {
    const containers = screen.getAllByTestId("social-media");
    containers.forEach((container) => expect(container).toBeInTheDocument());
  })

  it("contains logo", () => {
    const logos = screen.getAllByTestId("logo");
    logos.forEach((logo) => expect(logo).toBeInTheDocument())
  })

  it("contains copyright notice", () => {
    const notices = screen.getAllByText("Copyright 2020. All rights Reserved");
    notices.forEach((notice) => expect(notice).toBeInTheDocument())
  })
});
