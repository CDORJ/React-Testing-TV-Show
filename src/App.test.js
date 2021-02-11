import React from "react";
import { render, screen } from "@testing-library/react";
import App from "./App";

test("App component renders without issues.", () => {
  render(<App />);
});
