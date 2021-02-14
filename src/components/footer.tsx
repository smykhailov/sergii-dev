import styled from "@emotion/styled";
import React from "react";

const Footer = () => {
  return (
    <FooterContainer>
      &copy; Sergii Mykhailov, {new Date().getFullYear()}
    </FooterContainer>
  );
};

const FooterContainer = styled.footer(props => ({
  display: "flex",
  backgroundColor: props.theme.colors.backgroundSecondary,
}));

export default Footer;
