import { render } from "@testing-library/react";
import { screen } from '@testing-library/dom';
import Footer from './Footer';
import userEvent from "@testing-library/user-event";

describe("Footer", () => {
  beforeEach(() => {
    render(<Footer />);
  })

  it("contains input field", () => {
    const inputElement = screen.getByRole("textbox");
    expect(inputElement).toBeInTheDocument();
    expect(inputElement).toHaveAttribute("placeholder", "Updates in your inbox...");
  });

  it("contains email submit button", () => {
    const button = screen.getByRole("button");
    expect(button).toBeInTheDocument();
    expect(button).toHaveTextContent("GO");
  });

  it("accurately validates email", () => {
    const inputElement = screen.getByRole("textbox");
    const invalidEmail = "An invalid email";
    userEvent.type(inputElement, invalidEmail);
    
    const errorMessage = screen.getByRole("alert");
    expect(errorMessage).toBeInTheDocument();

    userEvent.clear(inputElement);
    expect(errorMessage).not.toBeInTheDocument();

    const validEmail = "test-email@sample.com";
    userEvent.type(inputElement, validEmail);
    expect(errorMessage).not.toBeInTheDocument();
  });

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
