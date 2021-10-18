import { render, screen } from "@testing-library/react";
import Navbar from './Navbar';

it("renders", () => {
  render(<Navbar />);

  expect(screen.getByTestId('header')).toBeInTheDocument();
});
