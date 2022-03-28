import { PlusIcon } from "@radix-ui/react-icons";
import { ComponentProps } from "react";
import Button from ".";

interface ButtonPlusProps extends ComponentProps<typeof Button> {}
const ButtonPlus = (props: ButtonPlusProps) => (
  <Button {...props}>
    <PlusIcon />
  </Button>
);

export default ButtonPlus;
