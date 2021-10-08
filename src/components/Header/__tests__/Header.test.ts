import { render } from "@tests/utils";
import Header from "../Header.vue";

describe("Header", () => {
  test("Should render toggle menu button", () => {
    const { getByLabelText } = render(Header);
    expect(getByLabelText("Toggle menu")).toBeInTheDocument();
  });
});
