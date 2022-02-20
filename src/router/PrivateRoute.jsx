import { Navigate } from "react-router-dom";

import PropTypes from "prop-types";

const PrivateRoute = ({ logged, children }) => {
  if (!logged) return <Navigate to="/authentication/sign-in" />;

  return children;
};

PrivateRoute.propTypes = {
  logged: PropTypes.bool.isRequired,
  children: PropTypes.object.isRequired,
};

export default PrivateRoute;
