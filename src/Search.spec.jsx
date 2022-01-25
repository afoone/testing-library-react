/* eslint-disable testing-library/no-debugging-utils */
import { render, screen } from "@testing-library/react";
import Search from "./Search";

const setup = () => {
  render(<Search />);
};

describe("Search", () => {
  beforeEach(() => {
    setup();
  });

  test("renders", () => {
    //screen.debug();
  });

  test("renders search label", () => {
    expect(screen.getByText("Search:")).toBeInTheDocument();
    expect(screen.getByLabelText("Search:")).toBeInTheDocument();
  });

  test("renders search input", () => {
    // screen.debug();
    expect(screen.getByRole("textbox")).toBeInTheDocument();
    expect(screen.getByPlaceholderText(/search/i)).toBeInTheDocument();
  });
});
