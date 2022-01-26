import { getData } from "./fetchingData";
import axios from "axios";

jest.mock("axios");

describe("fetcingData", () => {
  test("get data",  async () => {
    const resp = {data: [{name: 'foo'},{name: 'bar'}]}; // axios siempre devuelve un data
    axios.get.mockResolvedValue(resp);
    const data = await getData();
    expect(data).toEqual(resp);
    expect(axios.get).toHaveBeenCalled();
  });
});
