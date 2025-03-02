import React from "react";
import { render, screen } from "@testing-library/react";
import App from "./App";

test("renders learn react link", () => {
  render(<App />);
  // Ajusta este test según el contenido real de tu aplicación
  const linkElement = screen.getByText(/Hi There!/i);
  expect(linkElement).toBeInTheDocument();
});
