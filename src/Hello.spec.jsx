import { render, screen } from "@testing-library/react";
import Hello from "./Hello";

describe("Hello", () => {
  test("renders learn react link", () => {
    render(<Hello />);
    const linkElement = screen.getByText(/hello world/i);
    expect(linkElement).toBeInTheDocument();
  });

  test('creates Hello', () => {
    render(<Hello />);
    // screen.debug();
  })
});
