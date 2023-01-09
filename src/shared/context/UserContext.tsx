import { createContext, useState, ReactElement } from "react";
import { useQuery } from "../hooks/useQuery";
import { API_ROUTES } from "../routes/api/API_ROUTES";
import io, { Socket } from "socket.io-client";
import { useEffect } from "react";
import { getTokenCookie } from "../helpers/getTokenCookie";
import { LoginUser } from "../interfaces/user.interface";
import { Languages } from "../interfaces/language.interface";

const UserContext = createContext<{
  actualUser: LoginUser | null;
  handleSignIn: (token: string) => void;
  handleSignOut: () => void;
  loading: boolean;
  socket: Socket;
  language: Languages;
}>({
  actualUser: null,
  handleSignIn: () => {},
  handleSignOut: () => {},
  loading: true,
  socket: null!,
  language: "en",
});

const socket = io(process.env.REACT_APP_SOCKET_URL as string, {
  auth: {
    token: getTokenCookie(),
  },
});

const UserProvider = ({ children }: { children: ReactElement }) => {
  const [actualUser, setActualUser] = useState<LoginUser | null>(null);

  const [language, setLanguage] = useState<Languages>("en");

  const handleSignIn = (token: string) => {
    localStorage.setItem("token", token);
    window.location.reload();
  };

  useEffect(() => {
    socket.on("connect_error", () => {
      setTimeout(() => socket.connect(), 5000);
    });

    const navigatorLanguage = window.navigator.language;
    if (navigatorLanguage.includes("en")) {
      setLanguage("en");
    } else if (navigatorLanguage.includes("es")) {
      setLanguage("es");
    } else {
      setLanguage("en");
    }

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

  const data = {
    handleSignIn,
    actualUser,
    loading,
    handleSignOut,
    socket,
    language,
  };

  return <UserContext.Provider value={data}>{children}</UserContext.Provider>;
};

export default UserProvider;
export { UserContext };
