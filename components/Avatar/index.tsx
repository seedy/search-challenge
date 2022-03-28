import * as AvatarPrimitive from "@radix-ui/react-avatar";
import { styled } from "../../stitches.config";

const StyledAvatar = styled(AvatarPrimitive.Root, {
  display: "inline-flex",
  alignItems: "center",
  justifyContent: "center",
  verticalAlign: "middle",
  overflow: "hidden",
  userSelect: "none",
  width: 45,
  height: 45,
  borderRadius: "$1",
});

const StyledFallback = styled(AvatarPrimitive.Fallback, {
  width: "100%",
  height: "100%",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  backgroundColor: "$gray10",
  color: "white",
  fontSize: 15,
  lineHeight: 1,
  fontWeight: 500,
});

interface AvatarProps {
  fallbackText: string;
}
const Avatar = ({ fallbackText }: AvatarProps) => (
  <StyledAvatar>
    <StyledFallback>{fallbackText}</StyledFallback>
  </StyledAvatar>
);

export default Avatar;
