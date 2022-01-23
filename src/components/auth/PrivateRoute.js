import { Redirect, Route, useLocation } from "react-router-dom";
import { useAuth } from "./context";

const PrivateRoute = (props) => {
  const { isLogged } = useAuth();
  const location = useLocation();

  return isLogged ? (
    <Route {...props} />
  ) : (
    // <Route>
    <Redirect
      to={{ pathname: "/login", state: { from: location } }} />
    // {/* </Route> */ }
  );
};

export default PrivateRoute;