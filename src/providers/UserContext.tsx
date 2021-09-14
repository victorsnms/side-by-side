import {
  createContext,
  useCallback,
  useContext,
  useState,
  ReactNode,
} from "react";
import { api } from "../services/api";
import jwt_decode from "jwt-decode";
import { User } from "../types/userData";
import { AxiosResponse } from "axios";

interface UserProviderProps {
  children: ReactNode;
}

interface UserContextData {
  getUser: (id: () => string, accessToken: string) => void;
  userData: User;
}

const UserContext = createContext<UserContextData>({} as UserContextData);

const useUser = () => {
  const context = useContext(UserContext);
  if (!context) {
    throw new Error("useUser must be used within an UserProvider");
  }

  return context;
};

const UserProvider = ({ children }: UserProviderProps) => {
  const [userData, setUserData] = useState({} as User);

  const getUser = useCallback((id: () => string, accessToken: string) => {
    api
      .get(`/users/${id}`, {
        headers: { Authorization: `Bearer ${accessToken}` },
      })
      .then((response: AxiosResponse<User>) => setUserData(response.data))
      .catch((err) => console.log(err));
  }, []);

  return (
    <UserContext.Provider
      value={{
        getUser,
        userData,
      }}
    >
      {children}
    </UserContext.Provider>
  );
};
export { useUser, UserProvider };
