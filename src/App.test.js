/* eslint-disable testing-library/no-debugging-utils */
import { render, screen } from "@testing-library/react";
import App from "./App";

describe("app", () => {
  test("renders learn react link", () => {
    render(<App />);
    const linkElement = screen.getByText(/hello world/i);
    expect(linkElement).toBeInTheDocument();
  });

  test('creates app', () => {
    render(<App />);
    // screen.debug();
  })
});
