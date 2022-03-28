import { MinusIcon } from "@radix-ui/react-icons";
import { ComponentProps } from "react";
import Button from ".";

interface ButtonMinusProps extends ComponentProps<typeof Button> {}
const ButtonMinus = (props: ButtonMinusProps) => (
  <Button {...props}>
    <MinusIcon />
  </Button>
);

export default ButtonMinus;
