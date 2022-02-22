import { Typography } from 'src/styles/typography';
import Meta from 'src/components/Meta';
import { useUser } from 'src/context/AuthContext';
import withAuth from '../hoc/withAuth';

function Profile() {
  const { user } = useUser();

  return (
    <>
      <Meta
        schemaType="Welcome profile page"
        title="The profile page"
        description="Profile's description will be added shortly"
      />
      <div data-testid="page-wrapper">
        <Typography variant="body1" component="p">
          Welcome, {user?.email}
        </Typography>
        <Typography variant="h2" component="h1">
          Welcome to Profile page
        </Typography>
      </div>
    </>
  );
}

export default withAuth(Profile);
