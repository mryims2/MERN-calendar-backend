import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";

import { startAuthChecking } from "../actions/auth.js";
import CalendarScreen from "../components/calendar/CalendarScreen.jsx";
import Loading from "../components/ui/Loading.jsx";
import AuthRouter from "./AuthRouter.jsx";
import PrivateRoute from "./PrivateRoute.jsx";
import PublicRoute from "./PublicRoute.jsx";

const RootRouter = () => {
  const dispatch = useDispatch();

  const { ui, auth } = useSelector((state) => state);
  const { logged } = auth;
  const { checking, loading } = ui;

  useEffect(() => {
    dispatch(startAuthChecking());
  }, [dispatch]);

  if (checking) return <Loading />;

  return (
    <BrowserRouter>
      {loading && <Loading />}
      <Routes>
        <Route
          path="/authentication/*"
          element={
            <PublicRoute logged={logged}>
              <AuthRouter />
            </PublicRoute>
          }
        />
        <Route
          path="/"
          element={
            <PrivateRoute logged={logged}>
              <CalendarScreen />
            </PrivateRoute>
          }
        />
        <Route path="*" element={<Navigate to="/authentication/sign-in" />} />
      </Routes>
    </BrowserRouter>
  );
};

export default RootRouter;
