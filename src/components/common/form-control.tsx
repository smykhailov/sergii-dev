import styled from "@emotion/styled";

export const FormControl = styled.div(props => ({
  display: "flex",
  flexDirection: "column",
  padding: "12px 12px 18px",
  borderStyle: "solid",
  borderWidth: 1,
  borderColor: props.theme.colors.main.backgroundColor,
  fontSize: props.theme.fontSize,
  width: 340,

  ":hover": {
    backgroundColor: props.theme.colors.main.backgroundHoverColor,
    borderColor: props.theme.colors.main.backgroundHoverColor,
    borderStyle: "solid",
    borderWidth: 1,
  },

  ":active, :focus": {
    backgroundColor: props.theme.colors.main.backgroundActiveColor,
    outlineColor: props.theme.colors.main.borderActiveColor,
    outlineStyle: "solid",
    outlineWidth: 1,
  },

  "& > label > span": {
    fontWeight: 500,
  },

  "& > input, & > select": {
    backgroundColor: props.theme.colors.inputBackground,
    color: props.theme.colors.textColor,
    padding: "2px 4px 4px 4px",
    border: props.theme.colors.border,
  },
  "& > input:focus-visible, & > select:focus-visible  ": {
    outline: props.theme.colors.inputFocusOutline,
  },
}));

export const Error = styled.div(props => ({
  border: props.theme.colors.error.border,
  textColor: props.theme.colors.error.textColor,
  backgroundColor: props.theme.colors.error.backgroundColor,
  padding: 5,
  position: "absolute",
  marginTop: -18,
  marginLeft: 12,
  width: 316,
}));
