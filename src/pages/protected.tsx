import { Typography } from 'src/styles/typography';
import Meta from 'src/components/Meta';
import { useUser } from 'src/context/AuthContext';
import withAuth from 'src/hoc/withAuth';

const Protected = () => {
  const { user } = useUser();

  if (!user) {
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

// export const getServerSideProps: GetServerSideProps = async (ctx) => {
//   const shouldRedirect = await authenticatedUsers(ctx);
//   if (shouldRedirect) {
//     return {
//       redirect: {
//         destination: LOGIN,
//         permanent: false,
//       },
//       props: {
//         authenticated: false,
//       },
//     };
//   }

//   return {
//     props: {
//       authenticated: true,
//     },
//   };
// };

export default withAuth(Protected);
