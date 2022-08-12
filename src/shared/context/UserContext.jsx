import { createContext, useState } from "react";
import { useQuery } from "../hooks/useQuery";
import { apiRoutes } from "../routes/api/apiRoutes";

const UserContext = createContext({
  actualUser: null,
  handleSignIn: () => {},
  handleSignOut: () => {},
  loading: true,
});

const UserProvider = ({ children }) => {
  const [actualUser, setActualUser] = useState(null);

  const handleSignIn = (token) => {
    localStorage.setItem("token", token);
    window.location.reload(false);
  };

  const { loading } = useQuery({
    url: apiRoutes.AUTH_ROUTES.GET_USER_BY_TOKEN,
    onCompleted: (data) => {
      console.log(data);
      setActualUser(data.user);
    },
    onError: (error) => {
      console.log(error);
    },
  });

  const handleSignOut = () => {
    localStorage.removeItem("token");
    window.location.reload(false);
  };

  const data = { handleSignIn, actualUser, loading, handleSignOut };

  return <UserContext.Provider value={data}>{children}</UserContext.Provider>;
};

export default UserProvider;
export { UserContext };
