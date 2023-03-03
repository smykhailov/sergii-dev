import * as React from "react";
import { FC } from "react";

const SEO: FC<{
  title?: string | null;
  author?: string | null;
  description?: string | null;
  keywords?: string | null;
}> = props => (
  <>
    <title>{props.title}</title>
    <meta name="author" content={props.author || ""} />
    <meta name="description" content={props.description || ""} />
    <meta name="keywords" content={props.keywords || ""} />

    <meta property="og:title" content={props.title || ""} />
    <meta property="og:image" content="https://sergii.dev/logo.png" />
    <meta property="og:description" content={props.description || ""} />

    <meta http-equiv="content-language" content="en-us"></meta>
  </>
);

export default SEO;
