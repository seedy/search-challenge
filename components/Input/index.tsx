import { VariantProps } from "@stitches/react";
import {
  ComponentProps,
  forwardRef,
  ReactNode,
  useImperativeHandle,
  useRef,
} from "react";
import { styled } from "../../stitches.config";

const StyledInput = styled("input", {
  appearance: "none",
  padding: "$2",
  outline: "none",
  backgroundColor: "transparent",
  boxSizing: "border-box",
  border: "none",
  borderRadius: "inherit",
  width: "100%",
  '&[type="search"]::-webkit-search-cancel-button': {
    appearance: "none",
  },
});

const InputWrapper = styled("div", {
  position: "relative",
  backgroundColor: "$gray8",
  borderRadius: "$1",
  "&:hover": {
    backgroundColor: "$gray7",
  },
  "&:focus-within": {
    outline: "1px solid $gray9",
  },
  variants: {
    size: {
      small: {
        width: "$7",
      },
      auto: {
        width: "100%",
      },
    },
  },
});

const AdornmentWrapper = styled("div", {
  position: "absolute",
  top: 0,
  right: 0,
  zIndex: 1,
  height: "100%",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
});

interface InputProps
  extends Omit<ComponentProps<typeof StyledInput>, "size">,
    VariantProps<typeof InputWrapper> {
  children?: ReactNode;
}
export interface InputHandle {
  clear: () => void;
  focus: () => void;
}

const Input = forwardRef<InputHandle, InputProps>(
  ({ children, size, ...props }: InputProps, forwardedRef) => {
    const inputRef = useRef<HTMLInputElement>(null);

    useImperativeHandle(
      forwardedRef,
      () => ({
        clear: () => {
          const { current } = inputRef;
          if (current) {
            current.value = "";
          }
        },
        focus: () => {
          const { current } = inputRef;
          if (current) {
            current.focus();
          }
        },
      }),
      [inputRef]
    );

    return (
      <InputWrapper size={size}>
        <StyledInput ref={inputRef} {...props} />
        {children && <AdornmentWrapper>{children}</AdornmentWrapper>}
      </InputWrapper>
    );
  }
);
Input.displayName = "Input";

export default Input;
