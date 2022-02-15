import { H1 } from 'src/styles/typography';
import Amplify, { withSSRContext } from 'aws-amplify';
import Meta from 'src/components/Meta';
import constants from 'src/constants';
import config from 'src/aws-exports';
import { GetServerSideProps } from 'next';

const { CONNECTION_API_ERROR } = constants.routes;

type IProtectedProps = {
  username: any;
  authenticated: boolean;
};

const Protected = ({ authenticated, username }: IProtectedProps) => {
  console.log(authenticated, 'authenticated');
  if (!authenticated) {
    return <H1>Not authenticated</H1>;
  }
  return (
    <>
      <Meta
        schemaType="Welcome protected page"
        title="The protected page"
        description="Protectet's description will be added shortly"
      />
      <div data-testid="page-wrapper">
        <H1>Hello {username} from SSR route!</H1>
      </div>
    </>
  );
};

export const getServerSideProps: GetServerSideProps = async ({ req, res }) => {
  const { Auth } = withSSRContext({ req });
  Amplify.configure({ ...config, srr: true });
  try {
    const user = await Auth.currentAuthenticatedUser();

    return {
      props: {
        authenticated: true,
        username: user.username,
      },
    };
  } catch (err) {
    console.log('error, user not authenticated');
    // SSR redirect
    res.writeHead(302, { Location: '/profile' });
    res.end();
    // non-SSR-redirect
    return {
      props: {},
      // props: {
      //   authenticated: false,
      // },
      redirect: {
        destination: CONNECTION_API_ERROR,
        permanent: false,
      },
    };
  }
};

export default Protected;
