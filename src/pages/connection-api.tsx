import Link from 'next/link';
import Meta from 'src/components/Meta';
import constants from 'src/constants';
import { Button } from 'src/styles/muiButtons';
import { Typography } from 'src/styles/typography';

const { HOME } = constants.routes;

function ErrorConnection() {
  return (
    <>
      <Meta
        schemaType="Connection error"
        title="Connection error page"
        description="This is connection error description"
      />
      <div data-testid="page-wrapper">
        <header>
          <Typography variant="h1" component="h1">
            Error conection
          </Typography>
          <Typography variant="h4" component="h4">
            Sorry we have some server issues, plase try later
          </Typography>
        </header>
        <Button variant="contained" type="button">
          <Link passHref href={HOME}>
            <a>Go back home</a>
          </Link>
        </Button>
      </div>
    </>
  );
}

export default ErrorConnection;
