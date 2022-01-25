import { screen, render } from "@testing-library/react";
import TestId from "./TestId";

const setup = () => {
  render(<TestId />);
};

describe("TestId", () => {
  beforeEach(() => {
    setup();
  });
  it("renders", () => {
    const { container } = render(<TestId />);
    //expect(container).toMatchSnapshot();
  });

  it("renders search label", () => {
    expect(screen.getByText("Search:")).toBeInTheDocument();
    expect(screen.getByTestId("search-label")).toBeInTheDocument();
  });

  it("renders search input", () => {
    expect(screen.getByPlaceholderText(/search/i)).toBeInTheDocument();
    expect(screen.getByPlaceholderText(/search/i)).toHaveAttribute(
      "data-testid",
      "search-input"
    );
  });

  it("renders search results", () => {
    expect(screen.getByTestId("search-results")).toBeInTheDocument();
    expect(screen.getByText("Searches for...")).toHaveAttribute(
      "class",
      "pepe"
    );
  });

  test("theres no heading", () => {
    expect(screen.queryByRole('heading')).not.toBeInTheDocument();
  });
});
