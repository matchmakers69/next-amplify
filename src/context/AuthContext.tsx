import {
  createContext,
  Dispatch,
  ReactElement,
  SetStateAction,
  useContext,
  useEffect,
  useState,
} from 'react';
import { CognitoUser } from '@aws-amplify/auth';
import { Hub, Auth } from 'aws-amplify';

interface UserContextType {
  user: CognitoUser | null;
  setUser: Dispatch<SetStateAction<CognitoUser | null>>;
}

const UserContext = createContext<UserContextType>({} as UserContextType);

interface IUserContextProps {
  children: React.ReactElement;
}

export default function AuthContext({ children }: IUserContextProps): ReactElement {
  const [user, setUser] = useState<CognitoUser | null>(null);
  const checkUser = async () => {
    try {
      const amplifyUser = await Auth.currentAuthenticatedUser();
      if (amplifyUser) {
        setUser(amplifyUser);
      }
    } catch (error) {
      console.log(error);
      // No current Signed user
      setUser(null);
    }
  };
  useEffect(() => {
    checkUser();
  }, []);

  useEffect(() => {
    Hub.listen('auth', () => {
      // perform some action to update state
      checkUser();
    });
  }, []);
  console.log(user);
  return (
    <UserContext.Provider
      value={{
        user,
        setUser,
      }}
    >
      {children}
    </UserContext.Provider>
  );
}

export const useUser = (): UserContextType => useContext(UserContext);
