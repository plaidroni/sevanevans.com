import styled, { css } from "styled-components";
import { normalizeColor } from "grommet/utils";

export const StyledSpan = styled.span`
   ${({ theme }) => css`
      color: ${normalizeColor("text-paragraph-highlight", theme)};
      font-weight: bold;
   `}
`;

export const StyledHeaderSpan = styled.span`
   color: #313131;
`;

export const EvansSpan = styled.span`
   color: #006e48;
`;
