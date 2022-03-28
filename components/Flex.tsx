import { styled } from "../stitches.config";

const Flex = styled("div", {
  display: "flex",
  variants: {
    direction: {
      row: {
        flexDirection: "row",
      },
      column: {
        flexDirection: "column",
      },
    },
    grow: {
      1: {
        flexGrow: 1,
      },
    },
    align: {
      center: {
        alignItems: "center",
      },
    },
    justify: {
      center: {
        justifyContent: "center",
      },
    },
    gap: {
      1: {
        gap: "$1",
      },
    },
  },
});

export default Flex;
