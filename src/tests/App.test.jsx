import { screen, render } from "@testing-library/react";
import App from "../App";
import { describe, it } from "vitest";

describe("App", () => {
  it("renders a heading", () => {
    render(<App />);
    expect(screen.getByRole("heading")).toHaveTextContent(
      "CtM Code Wars Leader Board"
    );
  });
});q
