import { useRouter } from 'next/router';
import React, { useEffect } from 'react';
import { useUser } from 'src/context/AuthContext';
import { Typography } from 'src/styles/typography';
import constants from 'src/constants';
const { LOGIN } = constants.routes;

const withAuth =
  <T extends Record<string, unknown>>(Component: React.FC<T>): React.ComponentType<T> =>
  (props: T) => {
    const { user } = useUser();
    const router = useRouter();

    useEffect(() => {
      if (!user) {
        router.push(LOGIN);
      }
    }, [router, user]);

    if (!user) {
      return (
        <Typography variant="h1" component="h1">
          Sorry there is no user
        </Typography>
      );
    }
    return (
      <>
        <Component {...props} />
      </>
    );
  };

export default withAuth;
