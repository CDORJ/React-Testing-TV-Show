import React from "react";
import { render } from "@testing-library/react";
import App from "./App";

test("App component renders without issues.", () => {
  /* Test to see if the app renders without issues */
  render(<App />);
});

test("Renders properly when data is fetched", () => {
  /* Need to trigger a rerender after successful api response and check to make sure that the dropdown menu has populated with seasons aka that length > 0 */
  /* Then I need to fire a click event to select a season to then target the Episodes component to see if it displays episodes for the selected season */
  const { queryByRole } = render(<App />);
  /* Having trouble targeting the dropdown menu. */
  const dropDown = queryByRole("listbox");

  expect(dropDown).toBeInTheDocument();
});
