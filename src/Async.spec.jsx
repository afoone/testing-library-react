import { render, screen } from "@testing-library/react";
import Async from "./Async";

const setup = () => {
  render(<Async />);
  
};

describe("Async", () => {
  beforeEach(async () => {
    setup();
    await screen.findByText(/Signed in as/);

  });

  test("renders user", async () => {
    //screen.debug();
    expect(await screen.findByText(/robin/i)).toBeInTheDocument();
  });

  test('has three members', async () => {
      expect(screen.getAllByRole('listitem')).toHaveLength(3);
  })

  
});
