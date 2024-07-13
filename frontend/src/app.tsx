import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { CreateTripPage } from "./trip/pages/create-trip";
import { TripDetailsPage } from "./trip/pages/trip-details";
import { NotFoundPage } from "./shared/pages/not-found";

const router = createBrowserRouter([
  {
    path: "/",
    element: <CreateTripPage />,
  },
  {
    path: "/trips/:tripId",
    element: <TripDetailsPage />,
  },
  {
    path: "/*",
    element: <NotFoundPage />,
  },
]);

export function App() {
  return <RouterProvider router={router} />;
}
