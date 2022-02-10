import Head from 'next/head';

type ISeoProps = {
  title: string;
  description: string;
  schemaType: string;
};

const Meta = ({ title, description, schemaType }: ISeoProps) => {
  return (
    <Head>
      <title>{title} | Application test</title>
      <meta charSet="utf-8" />
      <meta content="IE=edge" httpEquiv="X-UA-Compatible" />
      <meta name="description" content={description} />
      <meta itemProp="name" content={title} />
      <meta itemProp="description" content={description} />
      <meta content="follow, index" name="robots" />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            '@context': 'http://schema.org',
            '@type': schemaType,
            name: title,
            about: description,
          }),
        }}
      />
    </Head>
  );
};

export default Meta;
