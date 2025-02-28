import React, { lazy, Suspense } from "react";
import ReactDOM from "react-dom/client";

import Home from "./pages/home/Home";
import { createBrowserRouter, Outlet, RouterProvider } from "react-router";

import About from "./components/About";
import Error from "./components/Error";

import Footer from "./components/Footer/Footer";
import Cart from "./pages/cart/Cart";
import Header from "./components/Header/Header";
import Menu from "./pages/menu/Menu";

const Contact = lazy(() => import("./components/Contact/Contact"));

const AppLayout = () => {
  return (
    <div className="app-layout flex h-screen w-screen flex-col">
      <Header />
      <div className="flex-1">
        <Outlet />
      </div>
      <Footer />
    </div>
  );
};

const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <AppLayout />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/about",
        element: <About />,
      },
      {
        path: "/contact",
        element: (
          <Suspense
            fallback={
              <div class="flex min-h-full items-center justify-center">
                <p class="text-center">Loading.....</p>
              </div>
            }
          >
            <Contact />
          </Suspense>
        ),
      },
      {
        path: "/restaurant/:restaurantId",
        element: <Menu />,
      },
      {
        path: "/cart",
        element: <Cart />,
      },
    ],
    errorElement: <Error />,
  },
]);

const rootElemenent = document.getElementById("root");
const root = ReactDOM.createRoot(rootElemenent);
root.render(<RouterProvider router={appRouter} />);
