import styled from "@emotion/styled";

const FormControl = styled.div(props => ({
  display: "flex",
  flexDirection: "column",
  padding: "12px 12px 18px",
  borderStyle: "solid",
  borderWidth: 1,
  borderColor: props.theme.colors.main.backgroundColor,
  fontSize: props.theme.fontSize,

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

export default FormControl;
