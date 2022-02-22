import Meta from 'src/components/Meta';
import { Typography } from 'src/styles/typography';

function Filters() {
  return (
    <>
      <Meta
        schemaType="Welcome Filters page"
        title="This is Filters page"
        description="Description soon"
      />

      <div data-testid="page-wrapper">
        <Typography variant="h1" component="h1">
          Welcome to Filters page
        </Typography>
      </div>
    </>
  );
}

export default Filters;
