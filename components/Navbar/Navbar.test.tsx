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
    const Hamburger = screen.getByAltText("Show dialog");
    expect(Hamburger).toBeInTheDocument();
  })
});

describe("accessibility", () => {
  beforeEach(() => {
    render(<Navbar />);    
  });

  function attemptToOpenDialog() {
    const hamburger = screen.getByAltText("Show dialog");
    fireEvent.keyDown(hamburger, { key: 'Enter', code: 'Enter', charCode: 13 });
  }

  it("opens", () => {
    attemptToOpenDialog();

    const dialog = screen.getByRole("dialog");
    expect(dialog).toBeInTheDocument();
  })

  it("closes by hitting close icon", () => {
    attemptToOpenDialog();

    const dialog = screen.getByRole("dialog");
    const close = screen.getByAltText("Hide dialog");
    expect(close).toHaveAttribute("title", "Hide dialog");

    fireEvent.keyDown(close, { key: 'Enter', code: 'Enter', charCode: 13 });
    expect(dialog).not.toBeInTheDocument();
  })

  it("closes by hitting escape key", () => {
    attemptToOpenDialog();

    const dialog = screen.getByRole("dialog");
    fireEvent.keyDown(dialog, { key: 'Escape', code: 'Escape', charCode: 27 });
    expect(dialog).not.toBeInTheDocument();
  })
})

describe("the dialog", () => {
  beforeEach(() => {
    render(<Navbar />);    

    const hamburger = screen.getByAltText("Show dialog");
    userEvent.click(hamburger);
  });

  it("renders", () => {
    const dialog = screen.getByRole("dialog");
    expect(dialog).toBeInTheDocument();
  })

  it("renders nav", () => {
    const nav = screen.getByRole('navigation');
    expect(nav).toBeInTheDocument();
  })

  it("renders list", () => {
    const list = screen.getByRole("list");
    expect(list).toBeInTheDocument();
  })

  it("renders list items", () => {
    const listItems = screen.getAllByRole("listitem");
    expect(listItems.length).toBe(5);
    listItems.forEach((listItem) => expect(listItem).toBeInTheDocument())
  })

  it("closes", () => {
    const dialog = screen.getByRole("dialog");
    const close = screen.getByAltText("Hide dialog");
    userEvent.click(close);

    expect(dialog).not.toBeInTheDocument();
  })
})