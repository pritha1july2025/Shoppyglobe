import { createBrowserRouter } from "react-router-dom";
import React, { Suspense } from "react";
import App from "../App";

// Lazy loaded pages
const ProductList = React.lazy(() => import("../components/ProductList"));
const ProductDetail = React.lazy(() => import("../components/ProductDetail"));
const Cart = React.lazy(() => import("../components/Cart"));
const Checkout = React.lazy(() => import("../components/Checkout"));
const NotFound = React.lazy(() => import("../components/NotFound"));

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,   // 👈 Layout
    errorElement: <NotFound />,
    children: [
      {
        index: true,
        element: (
          <Suspense fallback={<p className="text-center p-4">Loading...</p>}>
            <ProductList />
          </Suspense>
        ),
      },
      {
        path: "product/:id",
        element: (
          <Suspense fallback={<p className="text-center p-4">Loading...</p>}>
            <ProductDetail />
          </Suspense>
        ),
      },
      {
        path: "cart",
        element: (
          <Suspense fallback={<p className="text-center p-4">Loading...</p>}>
            <Cart />
          </Suspense>
        ),
      },
      {
        path: "checkout",
        element: (
          <Suspense fallback={<p className="text-center p-4">Loading...</p>}>
            <Checkout />
          </Suspense>
        ),
      },
    ],
  },
]);

export default router;
