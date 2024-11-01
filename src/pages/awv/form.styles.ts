import styled from "@emotion/styled";
import { DEVICE, pxToRem, UI_COLORS } from "../../utils/styleUtils";

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

export const StyledAWVDigitalInputWrap = styled.div`
    display: flex;
    flex-direction: column;

    input {
        width: 100%;
        :nth-child(2) {
            margin-bottom: ${pxToRem(24)};
        }
    }

    ${DEVICE.tablet} {
        input {
            width: ${pxToRem(400)};
        }
    }

    ${DEVICE.desktop} {
        flex-direction: row;
        width: ${pxToRem(880)};

        input {
            :nth-child(2) {
                margin-bottom: ${pxToRem(0)};
            }
        }
    }
`