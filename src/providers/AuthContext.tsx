import {
  createContext,
  useCallback,
  useContext,
  useState,
  ReactNode,
} from "react";
import { api } from "../services/api";

interface AuthProviderProps {
  children: ReactNode;
}

interface User {
  email: string;
  id: string;
  name: string;
}

interface AuthState {
  accessToken: string;
  user: User;
}

interface SignInCredentials {
  email: string;
  password: string;
}

interface AuthContextData {
  user: User;
  accessToken: string;
  signIn: (credentials: SignInCredentials) => Promise<void>;
  signOut: () => void;
}

const AuthContext = createContext<AuthContextData>({} as AuthContextData);

const useAuth = () => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error("useAuth must be used within an AuthProvider");
  }

  return context;
};

const AuthProvider = ({ children }: AuthProviderProps) => {
  const [data, setData] = useState<AuthState>(() => {
    const accessToken = localStorage.getItem("@Doit:accessToken");
    const user = localStorage.getItem("@Doit:user");
    if (accessToken && user) {
      return { accessToken, user: JSON.parse(user) };
    }
    return {} as AuthState;
  });

  const signIn = useCallback(async ({ email, password }: SignInCredentials) => {
    //Falta as rotas do JSONSERVER
    const response = await api.post("/register", { email, password });
    const { accessToken, user } = response.data;

    localStorage.setItem("@Foobar:accessToken", accessToken);
    localStorage.setItem("@Foobar:user", JSON.stringify(user));
    setData({ accessToken, user });
  }, []);

  const signOut = useCallback(() => {
    localStorage.removeItem("@Foobar:accessToken");
    localStorage.removeItem("@Foobar:user");

    setData({} as AuthContextData);
  }, []);
  return (
    <AuthContext.Provider
      value={{
        accessToken: data.accessToken,
        signIn,
        user: data.user,
        signOut,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};
export { useAuth, AuthProvider };
