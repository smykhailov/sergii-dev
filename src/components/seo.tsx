import * as React from "react";
import { FC } from "react";
import { Helmet } from "react-helmet";

const SEO: FC<{
  title: string;
  author: string;
  description: string;
  keywords: string;
}> = props => (
  <Helmet
    htmlAttributes={{
      lang: "en-us",
    }}
  >
    <title>{props.title}</title>
    <meta name="author" content={props.author} />
    <meta name="description" content={props.description} />
    <meta name="keywords" content={props.keywords} />

    <meta property="og:title" content={props.title} />
    <meta property="og:image" content="https://sergii.dev/logo.png" />
    <meta property="og:description" content={props.description} />

    <meta http-equiv="content-language" content="en-us"></meta>

    <link rel="manifest" href="/site.webmanifest" />
  </Helmet>
);

export default SEO;
