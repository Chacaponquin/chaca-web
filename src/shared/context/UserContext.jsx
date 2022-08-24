import { createContext, useState } from "react";
import { useQuery } from "../hooks/useQuery";
import { apiRoutes } from "../routes/api/apiRoutes";
import io from "socket.io-client";
import { useEffect } from "react";

const UserContext = createContext({
  actualUser: null,
  handleSignIn: () => {},
  handleSignOut: () => {},
  loading: true,
  socket: null,
});
const socket = io(process.env.REACT_APP_SOCKET_URL, {});

const UserProvider = ({ children }) => {
  const [actualUser, setActualUser] = useState(null);

  const handleSignIn = (token) => {
    localStorage.setItem("token", token);
    window.location.reload(false);
  };

  useEffect(() => {
    socket.on("connect_error", () => {
      setTimeout(() => socket.connect(), 5000);
    });

    return () => {
      socket.off("connect");
      socket.off("disconnect");
    };
  }, []);

  const { loading } = useQuery({
    url: apiRoutes.AUTH_ROUTES.GET_USER_BY_TOKEN,
    onCompleted: (data) => {
      console.log(data.user);
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
