import { styled } from "../../stitches.config";

const Button = styled("button", {
  appearance: "none",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  border: "transparent",
  borderRadius: "$1",
  padding: "$2",
  variants: {
    variant: {
      primary: {
        backgroundColor: "$blue9",
        color: "white",
        "&:hover,&:focus,&:active": {
          backgroundColor: "$blue10",
        },
        "&:disabled": {
          backgroundColor: "$blackA10",
        },
      },
      ghost: {
        backgroundColor: "transparent",
        color: "$blue9",
        "&:hover,&:focus,&:active": {
          color: "$blue10",
        },
        "&:disabled": {
          color: "$blackA10",
        },
      },
    },
    size: {
      small: {
        padding: "$1",
      },
    },
  },
});

export default Button;
