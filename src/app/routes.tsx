import { createBrowserRouter } from "react-router";
import { Navigate } from "react-router";
import React from 'react';
import Home from "./pages/Home";
import VehicleDetails from "./pages/VehicleDetails";
import OfferDetails from "./pages/OfferDetails";
import CallLater from "./pages/CallLater";
import Success from "./pages/Success";
import UserList from "./pages/UserList";
import UserDetail from "./pages/UserDetail";
import Login from "./pages/Login";

const PrivateRoute = ({ children }: { children: React.ReactNode }) => {
  const isAdmin = localStorage.getItem("isAdmin") === "true";
  if (!isAdmin) {
    return <Navigate to="/login" replace />;
  }
  return <>{children}</>;
};

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
  {
    path: "/login",
    Component: Login,
  },
  {
    path: "/admin",
    element: (
      <PrivateRoute>
        <UserList />
      </PrivateRoute>
    ),
  },
  {
    path: "/admin/details/:id",
    element: (
      <PrivateRoute>
        <UserDetail />
      </PrivateRoute>
    ),
  },
]);