import {
  createContext,
  useCallback,
  useContext,
  useState,
  ReactNode,
} from "react";
import { api } from "../services/api";
import jwt_decode from "jwt-decode";

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
  id: () => string;
}

interface SignInCredentials {
  email: string;
  password: string;
}

interface AuthContextData {
  id: () => string;
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
    const accessToken = localStorage.getItem("@Foobar:accessToken");
    const id = localStorage.getItem("@Foobar:id");
    if (accessToken && id) {
      return { accessToken, id: JSON.parse(id) };
    }
    return {} as AuthState;
  });

  const signIn = useCallback(async ({ email, password }: SignInCredentials) => {
    const response = await api.post("/login", { email, password });
    const { accessToken } = response.data;
    const {sub: id} = jwt_decode<string>(accessToken)
    localStorage.setItem("@Foobar:accessToken", accessToken);
    localStorage.setItem("@Foobar:id", JSON.stringify(id));
    setData({ accessToken, id });
  }, []);

  const signOut = useCallback(() => {
    localStorage.removeItem("@Foobar:accessToken");
    localStorage.removeItem("@Foobar:id");

    setData({} as AuthContextData);
  }, []);
  return (
    <AuthContext.Provider
      value={{
        id : data.id,
        accessToken: data.accessToken,
        signIn,
        signOut,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};
export { useAuth, AuthProvider };
