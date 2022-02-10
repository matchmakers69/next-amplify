import { createContext, ReactElement, useState } from "react";
import { CognitoUser } from "@aws-amplify/auth";

const UserContext = createContext();

interface IUserContextProps {
  children: React.ReactElement;
}

const AuthContext = ({ children }: IUserContextProps): ReactElement => {
  const [user, setUser] = useState<CognitoUser | null>(null);
  return (
    <UserContext.Provider
      value={{
        user,
        setUser
      }}
    >
      {children}
    </UserContext.Provider>
  );
};

export default AuthContext;
