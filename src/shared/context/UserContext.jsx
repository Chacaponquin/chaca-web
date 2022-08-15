import { createContext, useState } from "react";
import { useQuery } from "../hooks/useQuery";
import { apiRoutes } from "../routes/api/apiRoutes";
import io from "socket.io-client";

const UserContext = createContext({
  actualUser: null,
  handleSignIn: () => {},
  handleSignOut: () => {},
  loading: true,
  socket: null,
});

const UserProvider = ({ children }) => {
  const socket = io.connect(process.env.REACT_APP_API_URL);

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

  const data = { handleSignIn, actualUser, loading, handleSignOut, socket };

  return <UserContext.Provider value={data}>{children}</UserContext.Provider>;
};

export default UserProvider;
export { UserContext };
