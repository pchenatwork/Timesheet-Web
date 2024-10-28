import styled from "@emotion/styled";
import { pxToRem, UI_COLORS } from "../../utils/styleUtils";

export const StyledTitleContainer = styled.article`
  position: relative;

  h2 {
    font-family: "Work Sans", sans-serif;
    font-style: normal;
    font-weight: 700;
    font-size: ${pxToRem(18)};
    line-height: ${pxToRem(26)};

    letter-spacing: -0.01em;
    color: ${UI_COLORS.dark_gray};
    :after {
      position: absolute;
      bottom: 0;
      left: 0;
      content: "";
      display: inline-block;
      width: ${pxToRem(40)};
      height: ${pxToRem(2)};
      background-color: ${UI_COLORS.dark_gray};
    }
  }
`;
