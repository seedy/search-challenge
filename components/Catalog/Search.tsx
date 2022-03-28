import Input, { InputHandle } from "../Input";
import { useDebouncedCallback } from "use-debounce";
import { useRouter } from "next/router";
import { ChangeEvent, useCallback, useMemo, useRef } from "react";
import Flex from "../Flex";
import { Cross2Icon } from "@radix-ui/react-icons";
import Button from "../Button";

const CatalogSearch = () => {
  const inputRef = useRef<InputHandle | null>(null);
  const { query, push } = useRouter();

  const value = useMemo(() => query?.["search"] || "", [query]);

  const onClick = useCallback(() => {
    inputRef.current?.clear();
    inputRef.current?.focus();
    push("", undefined, { shallow: true });
  }, [inputRef, push]);

  const onChange = useCallback(
    (e: ChangeEvent<HTMLInputElement>) => {
      const nextValue = e?.target?.value;
      if (nextValue) {
        push(`?search=${e?.target?.value}`, undefined, { shallow: true });
      } else {
        push("", undefined, { shallow: true });
      }
    },
    [push]
  );

  const debouncedOnChange = useDebouncedCallback(onChange, 700);

  return (
    <Flex>
      <Input
        ref={inputRef}
        type="search"
        size="auto"
        autoFocus
        defaultValue={value}
        onChange={debouncedOnChange}
      >
        <Button disabled={!value} onClick={onClick} variant="ghost">
          <Cross2Icon />
        </Button>
      </Input>
    </Flex>
  );
};

export default CatalogSearch;
