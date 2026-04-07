import { createBrowserRouter } from "react-router";
import Home from "./pages/Home";
import VehicleDetails from "./pages/VehicleDetails";
import OfferDetails from "./pages/OfferDetails";
import CallLater from "./pages/CallLater";
import Success from "./pages/Success"

export const router = createBrowserRouter([
  {
    path: "/",
    Component: Home,
  },
  {
    path: "/vehicle-details",
    Component: VehicleDetails,
  },
  {
    path: "/offer-details",
    Component: OfferDetails,
  },
  {
    path: "/call-later",
    Component: CallLater,
  },
  {
    path: "/success",
    Component: Success,
  },

]);
