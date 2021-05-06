import React from "react";
import styled from "@emotion/styled";

import GitHubIcon from "../assets/github.svg";
import { graphql, useStaticQuery } from "gatsby";

const Footer = () => {
  const data = useFooterDataQuery();

  return (
    <FooterContainer>
      <p>&copy; Sergii Mykhailov, {new Date().getFullYear()}</p>
      <p className="actinable">
        <a
          href={data?.siteMetadata?.github?.url}
          target="_blank"
          title={data?.siteMetadata?.github?.description}
        >
          <GitHubIcon />
        </a>
      </p>
    </FooterContainer>
  );
};

const useFooterDataQuery = () => {
  const { site } = useStaticQuery<GatsbyTypes.FooterDataQuery>(graphql`
    query FooterData {
      site {
        siteMetadata {
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
  fontSize: 13,
  // lineHeight: "22px",

  "& > p": {
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

  "& > p.actinable:hover": {
    backgroundColor: props.theme.colors.backgroundPrimaryActive,
    cursor: "pointer",
  },
}));

export default Footer;
