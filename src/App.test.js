import { act } from "react";
import { createRoot } from "react-dom/client";
import App from "./App";

test("renders the portfolio headline and primary call to action", () => {
  const container = document.createElement("div");
  document.body.appendChild(container);
  const root = createRoot(container);

  act(() => root.render(<App />));

  expect(container.querySelector("h1").textContent).toMatch(/machine learning systems/i);
  expect(container.querySelector('.hero-actions a[href="#work"]').textContent).toMatch(
    /explore selected work/i
  );

  act(() => root.unmount());
  container.remove();
});
