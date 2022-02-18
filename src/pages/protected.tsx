import { Typography } from 'src/styles/typography';
import Meta from 'src/components/Meta';
import constants from 'src/constants';
import { authenticatedUsers } from './service/check-auth-user';
import { GetServerSideProps } from 'next';

const { LOGIN } = constants.routes;

type IProtectedProps = {
  authenticated: boolean;
};

const Protected = ({ authenticated }: IProtectedProps) => {
  console.log(authenticated, 'authenticated');
  if (!authenticated) {
    return (
      <Typography variant="h2" component="h1">
        Not authenticated
      </Typography>
    );
  }
  return (
    <>
      <Meta
        schemaType="Welcome protected page"
        title="The protected page"
        description="Protectet's description will be added shortly"
      />
      <div data-testid="page-wrapper">
        <Typography variant="h2" component="h1">
          Hello user from SSR route!
        </Typography>
      </div>
    </>
  );
};

export const getServerSideProps: GetServerSideProps = async (ctx) => {
  const shouldRedirect = await authenticatedUsers(ctx);
  if (shouldRedirect) {
    return {
      redirect: {
        destination: LOGIN,
        permanent: false,
      },
      props: {
        authenticated: false,
      },
    };
  }

  return {
    props: {
      authenticated: true,
    },
  };
};

export default Protected;
