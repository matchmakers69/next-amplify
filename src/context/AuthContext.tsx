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

type User = {
  email: string;
  userId: string;
};

interface UserContextType {
  user: User | null;
  setUser: Dispatch<SetStateAction<User | null>>;
}

const UserContext = createContext<UserContextType>({} as UserContextType);

interface IUserContextProps {
  children: React.ReactElement;
}

const mapCognitoUserToAuthUser = async (cognitoUser: CognitoUser): Promise<User> => {
  // const attributes = await new Promise((res) =>
  //   cognitoUser.getUserAttributes((user) => {
  //     console.log(user);
  //     res(user);
  //   }),
  // );

  // issue: https://github.com/aws-amplify/amplify-js/issues/4927?fbclid=IwAR1ma4C_S4tYKJ0mvhhQjCPPlAOEZuk1Jov8ckjjf9jtl36AfvgeX_hzlm4#issuecomment-913716099
  return {
    // @ts-expect-error amplify sucks
    email: cognitoUser.attributes.email,
    // @ts-expect-error amplify sucks
    userId: cognitoUser.username,
  };
};

const LOCALSTORAGE_USER_KEY = 'authContextState';

export default function AuthContext({ children }: IUserContextProps): ReactElement {
  // TO DO make sure to get from localStorage
  const [user, setUser] = useState<User | null>(null); // maybe consider to swap to useReducer

  const checkUser = async () => {
    try {
      const amplifyUser = await Auth.currentAuthenticatedUser();
      if (amplifyUser) {
        const user = await mapCognitoUserToAuthUser(amplifyUser);
        // TO DO - do not update state when user has been already added to localStorage
        setUser(user);
      }
    } catch (error) {
      console.log(error);
      // No current Signed user
      setUser(null);
    }
  };

  // listen on every user's change
  useEffect(() => {
    localStorage.setItem(LOCALSTORAGE_USER_KEY, JSON.stringify(user));
  }, [user]);

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
