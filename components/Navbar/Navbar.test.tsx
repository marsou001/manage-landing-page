import { render, screen } from "@testing-library/react";
import Ma from './Mana'

it("renders", () => {
  render(<Ma />);

  expect(screen.getByTestId('ma')).toBeInTheDocument();
});
