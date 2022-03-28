import { styled } from "../../stitches.config";

const Button = styled("button", {
  appearance: "none",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  border: "transparent",
  backgroundColor: "$blue9",
  color: "white",
  borderRadius: "$1",
  padding: "$2",
  "&:hover,&:focus,&:active": {
    backgroundColor: "$blue10",
  },
  variants: {
    size: {
      small: {
        padding: "$1",
      },
    },
  },
});

export default Button;
