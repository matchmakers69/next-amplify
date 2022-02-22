import Meta from 'src/components/Meta';
import { Typography } from 'src/styles/typography';

function Js() {
  return (
    <>
      <Meta schemaType="Welcome js page" title="This is JS page" description="Description soon" />

      <div data-testid="page-wrapper">
        <Typography variant="h2" component="h1">
          Welcome to JS page
        </Typography>
      </div>
    </>
  );
}

export default Js;
