import Link from 'next/link';
import { FC } from 'react';
import Meta from 'src/components/Meta';
import constants from 'src/constants';
import { ButtonContained } from 'src/styles/muiButtons';
import { H1, H4 } from 'src/styles/typography';

const { HOME } = constants.routes;

const ErrorConnection: FC = function () {
  return (
    <>
      <Meta
        schemaType="Connection error"
        title="Connection error page"
        description="This is connection error description"
      />
      <div data-testid="page-wrapper">
        <header>
          <H1>Error conection</H1>
          <H4>Sorry we have some server issues, plase try later</H4>
        </header>
        <ButtonContained type="button">
          <Link passHref href={HOME}>
            <a>Go back home</a>
          </Link>
        </ButtonContained>
      </div>
    </>
  );
};

export default ErrorConnection;
