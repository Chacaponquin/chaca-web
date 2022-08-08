import React, { useContext } from "react";
import { UserContext } from "../../context/UserContext";
import { Navigate } from "react-router-dom";
import { appRoutes } from "../app/appRoutes";

const NoUserRoute = ({ children }) => {
  const { actualUser } = useContext(UserContext);

  return <>{!actualUser ? children : <Navigate to={appRoutes.HOME} />}</>;
};

export default NoUserRoute;
