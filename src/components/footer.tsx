import React from "react";
import styled from "@emotion/styled";

import GitHubIcon from "../assets/github.svg";
import LinkedInIcon from "../assets/linkedin.svg";
import { graphql, useStaticQuery } from "gatsby";

const Footer = () => {
  const data = useFooterDataQuery();

  return (
    <FooterContainer>
      <p>&copy; Sergii Mykhailov, {new Date().getFullYear()}</p>

      <div>
        <p className="actionable">
          <a
            href={data?.siteMetadata?.linkedin?.url}
            target="_blank"
            rel="noreferrer"
            title={data?.siteMetadata?.linkedin?.description}
          >
            <LinkedInIcon />
          </a>
        </p>

        <p className="actionable">
          <a
            href={data?.siteMetadata?.github?.url}
            target="_blank"
            rel="noreferrer"
            title={data?.siteMetadata?.github?.description}
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
  backgroundColor: props.theme.colors.backgroundSecondary,
  fontFamily: "Segoe WPC, Segoe UI, sans-serif",
  fontSize: props.theme.fontSize,
  paddingLeft: 6,
  paddingRight: 6,

  "& > div": {
    display: "flex",
    margin: 0,
    paddingInline: "3px",
  },

  "& > p, & > div > p": {
    display: "flex",
    margin: 0,
    paddingInline: "3px",
  },

  "& * > a": {
    color: props.theme.colors.footer.textColor,
    lineHeight: 0,
  },

  "& * > svg": {
    padding: "3px 0",
  },

  "& > div > p.actionable:hover": {
    backgroundColor: props.theme.colors.backgroundPrimaryActive,
    cursor: "pointer",
  },
}));

export default Footer;
