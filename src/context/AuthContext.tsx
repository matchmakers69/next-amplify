/* eslint-disable react-hooks/exhaustive-deps */
import {
  createContext,
  Dispatch,
  ReactElement,
  SetStateAction,
  useCallback,
  useContext,
  useEffect,
  useMemo,
  useState,
} from 'react';
import { CognitoUser } from '@aws-amplify/auth';
import { useRouter } from 'next/router';
import constants from 'src/constants';
const { LOGIN, HOME } = constants.routes;
const { LOCALSTORAGE_USER_KEY } = constants.keys;
import { Hub, Auth } from 'aws-amplify';
import { loginAmplifyUser, logOutAmplifyUser } from 'src/services/APIs/authorization';

type User = {
  email: string;
  userId: string;
};
type UserValues = {
  email: string;
  password: string;
};
interface UserContextType {
  user: User | null;
  setUser: Dispatch<SetStateAction<User | null>>;
  login: (data: UserValues) => void;
  logout: () => void;
  isUserLoaded: boolean;
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

const getUserFromLocalStorage = () => {
  try {
    return JSON.parse(localStorage.getItem(LOCALSTORAGE_USER_KEY) || 'null');
  } catch (err) {
    console.log(err);
  }
};

export default function AuthContext({ children }: IUserContextProps): ReactElement {
  const [isUserLoaded, setIsUserLoaded] = useState(false);
  const [user, setUser] = useState<User | null>(null);
  const router = useRouter();

  const fetchCognitoUser = useCallback(async () => {
    try {
      const amplifyUser = await Auth.currentAuthenticatedUser();
      if (amplifyUser) {
        const mappedUser = await mapCognitoUserToAuthUser(amplifyUser);
        if (!user || user?.userId !== mappedUser.userId) {
          setUser(mappedUser);
          localStorage.setItem(LOCALSTORAGE_USER_KEY, JSON.stringify(mappedUser));
        }
      }
    } catch (error) {
      console.log(error);
      setUser(null);
    }
  }, [user]);

  useEffect(() => {
    const userFromLocalStorage = getUserFromLocalStorage();
    if (userFromLocalStorage) {
      setUser(userFromLocalStorage);
    } else {
      fetchCognitoUser();
    }
    setIsUserLoaded(true);
  }, []);

  useEffect(() => {
    Hub.listen('auth', () => {
      // perform some action to update state
      fetchCognitoUser();
    });
  }, []);

  // LOGIN
  const login = useCallback(async (loginUserData) => {
    try {
      const signedInUser = await loginAmplifyUser(loginUserData);
      if (signedInUser) {
        router.push(HOME);
      } else {
        throw new Error('Something went wrong ;(');
      }
    } catch (err) {
      console.log(err);
    }
  }, []);

  // LOGOUT
  const logout = useCallback(async () => {
    try {
      await logOutAmplifyUser();
      localStorage.removeItem(LOCALSTORAGE_USER_KEY);
      router.push(LOGIN);
    } catch (err) {
      console.log(err);
    }
  }, []);

  const value = useMemo(
    () => ({
      user,
      setUser,
      login,
      logout,
      isUserLoaded,
    }),
    [user, setUser, login, logout, isUserLoaded],
  );
  return <UserContext.Provider value={value}>{children}</UserContext.Provider>;
}

export const useUser = (): UserContextType => useContext(UserContext);
export const useLoggedUser = (): User => {
  const { user } = useContext(UserContext);
  if (!user) throw new Error('User is not Logged In');
  return user;
};
