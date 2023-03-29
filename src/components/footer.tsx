import React from "react";
import { graphql, useStaticQuery } from "gatsby";
import styled from "@emotion/styled";

import GitHubIcon from "../assets/github.svg";
import LinkedInIcon from "../assets/linkedin.svg";
import RSSIcon from "../assets/rss.svg";

const Footer = () => {
  const data = useFooterDataQuery();

  return (
    <FooterContainer>
      <p>&copy; Sergii Mykhailov, {new Date().getFullYear()}</p>

      <div>
        <p className="actionable">
          <a
            href={`${data?.siteMetadata?.siteUrl!}/rss.xml`}
            target="_blank"
            rel="noreferrer"
            title="RSS feed"
          >
            <RSSIcon />
          </a>
        </p>
        <p className="actionable">
          <a
            href={data?.siteMetadata?.linkedin?.url!}
            target="_blank"
            rel="noreferrer"
            title={data?.siteMetadata?.linkedin?.description!}
          >
            <LinkedInIcon />
          </a>
        </p>

        <p className="actionable">
          <a
            href={data?.siteMetadata?.github?.url!}
            target="_blank"
            rel="noreferrer"
            title={data?.siteMetadata?.github?.description!}
          >
            <GitHubIcon />
          </a>
        </p>
      </div>
    </FooterContainer>
  );
};

const useFooterDataQuery = () => {
  const { site } = useStaticQuery<GatsbyTypes.FooterDataQuery>(graphql`
    query FooterData {
      site {
        siteMetadata {
          siteUrl
          linkedin {
            url
            description
          }
          github {
            url
            description
          }
        }
      }
    }
  `);

  return site;
};

const FooterContainer = styled.footer(props => ({
  display: "flex",
  justifyContent: "space-between",
  color: props.theme.colors.footer.textColor,
  backgroundColor: props.theme.colors.footer.backgroundColor,
  paddingLeft: 6,
  paddingRight: 6,
  borderTop: props.theme.colors.border,
  fontFamily: props.theme.fontFace,

  "& > div": {
    display: "flex",
    margin: 0,
    paddingInline: "3px",
  },

  "& > p, & > div > p": {
    display: "flex",
    margin: 0,
    paddingInline: "2px",
  },

  "& * > a": {
    color: props.theme.colors.footer.textColor,
    lineHeight: 0,
  },

  "& * > svg": {
    padding: "3px 0",
  },

  "& > div > p.actionable": {
    border: "solid 1px transparent",
  },

  "& > div > p.actionable:hover": {
    backgroundColor: props.theme.colors.footer.backgroundColorActive,
    border: props.theme.colors.borderHover,
    cursor: "pointer",
  },
}));

export default Footer;
