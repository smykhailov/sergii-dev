import styled from "@emotion/styled";
import React from "react";

const Footer = () => {
  return (
    <FooterContainer>
      <p>&copy; Sergii Mykhailov, {new Date().getFullYear()}</p>
    </FooterContainer>
  );
};

const FooterContainer = styled.footer(props => ({
  display: "flex",
  lineHeight: "22px",
  color: props.theme.colors.textColor,
  backgroundColor: props.theme.colors.backgroundSecondary,

  "& > p": {
    paddingInline: "3px",
  },

  "& > p.actinable:hover": {
    backgroundColor: props.theme.colors.backgroundPrimaryActive,
    cursor: "pointer",
  },
}));

export default Footer;
