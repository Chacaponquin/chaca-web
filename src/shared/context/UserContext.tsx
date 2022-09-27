import { createContext, useState, ReactElement } from "react";
import { useQuery } from "../hooks/useQuery";
import { API_ROUTES } from "../routes/api/API_ROUTES";
import io, { Socket } from "socket.io-client";
import { useEffect } from "react";
import { getTokenCookie } from "../helpers/getTokenCookie";
import { LoginUser } from "../interfaces/user.interface";

const UserContext = createContext<{
  actualUser: LoginUser | null;
  handleSignIn: (token: string) => void;
  handleSignOut: () => void;
  loading: boolean;
  socket: Socket;
}>({
  actualUser: null,
  handleSignIn: () => {},
  handleSignOut: () => {},
  loading: true,
  socket: null!,
});

const socket = io(process.env.REACT_APP_SOCKET_URL as string, {
  auth: {
    token: getTokenCookie(),
  },
});

const UserProvider = ({ children }: { children: ReactElement }) => {
  const [actualUser, setActualUser] = useState<LoginUser | null>(null);

  const handleSignIn = (token: string) => {
    localStorage.setItem("token", token);
    window.location.reload();
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

  const { loading } = useQuery<{ user: LoginUser | null }>({
    url: API_ROUTES.AUTH_ROUTES.GET_USER_BY_TOKEN,
    onCompleted: (data) => {
      setActualUser(data.user);
    },
    onError: (error) => {
      console.log(error);
    },
  });

  const handleSignOut = () => {
    localStorage.removeItem("token");
    window.location.reload();
  };

  const data = { handleSignIn, actualUser, loading, handleSignOut, socket };

  return <UserContext.Provider value={data}>{children}</UserContext.Provider>;
};

export default UserProvider;
export { UserContext };
