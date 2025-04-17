import "@testing-library/jest-dom";
import { render, screen } from "@testing-library/react";
import { name, city } from "../data/data";
import Home from "../components/Home";

test("renders a div with the correct ID", () => {
  const { container } = render(<Home />);

  
});

test("renders the h1 with the text 'Name is a Web Developer from City'", () => {
  render(<Home />);

  // Find an element with the text content `${name} is a Web Developer from ${city}`
  // This uses the variables defined in src/data/data.js
  const h1 = screen.queryByText(`${name} is a Web Developer from ${city}`);


  
});

test("the h1 has a an inline style attribute with a color of 'firebrick'", () => {
  render(<Home />);

  const h1 = screen.queryByText(`${name} is a Web Developer from ${city}`);
  
});
