import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { Provider } from "react-redux";
import Bag from "./routes/Bag.jsx";
import "./index.css";
import "bootstrap/dist/css/bootstrap.min.css";
import App from "./routes/App.jsx";
import Home from "./routes/Home.jsx";
import myntraStore from "./store/index.js";

const router = createBrowserRouter(
  [
    {
      path: "/",
      element: <App />,
      children: [
        {
          path: "/",
          element: <Home />,
        },
        {
          path: "/bag",
          element: <Bag />,
        },
      ],
    },
  ],
  {
    basename: "/myntraclone.github.io/",
  }
);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <Provider store={myntraStore}>
      <RouterProvider router={router} />
    </Provider>
  </StrictMode>
);
