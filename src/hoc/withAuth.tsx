import { FC, ComponentType, useEffect } from 'react';
import constants from 'src/constants';
import { useRouter } from 'next/router';
import { useUser } from 'src/context/AuthContext';

const { LOGIN } = constants.routes;

const withAuth =
  <T extends Record<string, unknown>>(Component: FC<T>): ComponentType<T> =>
  (props: T) => {
    const router = useRouter();

    const { user, isUserLoaded } = useUser();

    useEffect(() => {
      if (isUserLoaded && !user) {
        router.push(LOGIN);
      }
    }, [isUserLoaded, router, user]);

    if (!user && !isUserLoaded) {
      return null;
    }

    return <Component {...props} />;
  };

export default withAuth;
