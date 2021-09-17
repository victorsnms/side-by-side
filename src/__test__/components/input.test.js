import { render, screen } from "@testing-library/react";
import { FaUser } from "react-icons/fa";
import { Input } from "../../components/Input";

describe("When everything is ok", () => {
  test("Should check if component Input is rendering", () => {
    render(<Input icon={FaUser} name={"user"} placeholder={"user"} />);

    const FromScreen = screen.getByRole("textbox");

    screen.logTestingPlaygroundURL();

    expect(FromScreen).toBeInTheDocument();
  });
});
