import { H1 } from "src/styles/typography";
import Meta from "src/components/Meta";

const Profile = () => {
  return (
    <>
      <Meta
        schemaType="Welcome protected page"
        title="The protected page"
        description="Protectet's description will be added shortly"
      />
      <div data-testid="page-wrapper">
        <H1>Login to view this protected route</H1>
      </div>
    </>
  );
};

export default Profile;
