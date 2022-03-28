import { styled } from "../../stitches.config";

const Input = styled("input", {
  boxSizing: "border-box",
  backgroundColor: "$gray12",
  padding: "$2",
  border: "none",
  borderRadius: "$1",
  variants: {
    size: {
      small: {
        width: "$7",
      },
    },
  },
});

export default Input;
