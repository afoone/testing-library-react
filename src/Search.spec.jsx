/* eslint-disable testing-library/no-debugging-utils */
import { fireEvent, render, screen } from "@testing-library/react";
import Search from "./Search";
import userEvent from '@testing-library/user-event';
;


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

  test("renders input content" , async () => {
    expect(screen.queryByText(/Searches for pepe/)).toBeNull();
    fireEvent.change(screen.getByRole("textbox"), {target: {value: "pepe"}});
    expect(screen.getByRole("textbox")).toHaveValue("pepe");
    expect(screen.getByText(/Searches for pepe/)).toBeInTheDocument();
    // con user event
    await userEvent.type(screen.getByRole("textbox"), " martinez");
    expect(screen.getByText(/Searches for pepe martinez/)).toBeInTheDocument();

  }
    )
});
