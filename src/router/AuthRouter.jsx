import { Navigate, Route, Routes } from "react-router-dom";

import SignUpScreen from "../components/auth/SignUpScreen";
import SignInScreen from "../components/auth/SignInScreen";

const AuthRouter = () => {
  return (
    <Routes>
      <Route path="sign-up" element={<SignUpScreen />} />
      <Route path="sign-in" element={<SignInScreen />} />
      <Route path="*" element={<Navigate to="sign-in" />} />
    </Routes>
  );
};

export default AuthRouter;
