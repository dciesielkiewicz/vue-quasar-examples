import {
  render as testingLibraryRender,
  RenderOptions,
  RenderResult,
} from "@testing-library/vue";
import "@testing-library/jest-dom";
import router from "@/router";

// Custom container to integrate Quasar with Vue Testing Library.
export const render = (
  // This is the same typing as official @testing-library render
  TestComponent: any, // eslint-disable-line @typescript-eslint/no-explicit-any
  options?: RenderOptions
): RenderResult => {
  const root = document.createElement("div");
  root.setAttribute("data-app", "true");

  return testingLibraryRender(TestComponent, {
    ...options,
    container: document.body.appendChild(root),
    global: {
      plugins: [router],
    },
  });
};
