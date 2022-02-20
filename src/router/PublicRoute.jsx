import { Navigate } from "react-router-dom";

import PropTypes from "prop-types";

const PublicRoute = ({ logged, children }) => {
  if (logged) return <Navigate to="/" />;

  return children;
};

PublicRoute.propTypes = {
  logged: PropTypes.bool.isRequired,
  children: PropTypes.object.isRequired,
};

export default PublicRoute;
