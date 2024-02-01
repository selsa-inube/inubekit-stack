import styled from "styled-components";
import { inube } from "@inubekit/foundations";

const StyledFlex = styled.div`
  display: flex;
  justify-content: ${({ $justifyContent }) => $justifyContent};
  align-items: ${({ $alignItems }) => $alignItems};
  align-content: ${({ $alignContent }) => $alignContent};
  flex-direction: ${({ $direction }) => $direction};
  flex-wrap: ${({ $wrap }) => $wrap};
  height: ${({ $height }) => $height};
  width: ${({ $width }) => $width};
  gap: ${({ $gap }) => $gap};
  margin: ${({ $margin }) => {
    const marginValue = $margin.split("");
    return marginValue.map((value) => inube?.spacing?.[value]).join(" ");
  }};
  padding: ${({ $padding }) => {
    const paddingValue = $padding.split(" ");
    return paddingValue.map((value) => inube?.spacing?.[value]).join(" ");
  }};
`;

export { StyledFlex };
