import Head from "next/head";

interface MetaHeaderProps {
  title?: string;
  description?: string;
  image?: string;
  url?: string;
  content?: string;
}
// TODO: SET DEFAULT VALUES
export const MetaHeader = (props: MetaHeaderProps) => {
  return (
    <Head>
      {/* <!-- Primary Meta Tags --> */}
      <title>Meta Tags — Preview, Edit and Generate</title>
      <meta name="title" content={props.title} />
      <meta name="description" content={props.description} />

      {/* <!-- Open Graph / Facebook --> */}
      <meta property="og:type" content="website" />
      <meta property="og:url" content={props.url} />
      <meta property="og:title" content={props.title} />
      <meta property="og:description" content={props.description} />
      <meta property="og:image" content={props.image} />

      {/* <!-- Twitter --> */}
      <meta property="twitter:card" content="summary_large_image" />
      <meta property="twitter:url" content={props.url} />
      <meta property="twitter:title" content={props.title} />
      <meta property="twitter:description" content={props.description} />
      <meta property="twitter:image" content={props.image} />
    </Head>
  );
};
