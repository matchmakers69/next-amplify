import { Typography } from "@mui/material";
import styled from "styled-components";
import { device } from "./breakpoints";

const H1 = styled(({ ...rest }) => <Typography variant="h1" component="h1" {...rest} />)`
  && {
    line-height: 1.25;
    font-size: 2rem;
    font-weight: ${({ theme }) => theme.weight.bold};
    @media ${device.mobileM} {
      font-size: 2.8rem;
    }
  }
  &.m-15-top {
    margin-top: 1.5rem;
  }

  &.m-30-bottom {
    margin-bottom: 3rem;
  }
`;

const H2 = styled(({ ...rest }) => <Typography variant="h2" component="h2" {...rest} />)`
  && {
    font-size: 2rem;
    line-height: 1.25;
    @media ${device.laptopM} {
      font-size: 2.2rem;
    }
  }

  &.bold {
    font-weight: ${({ theme }) => theme.weight.bold};
  }
  &.m-15-top {
    margin-top: 1.5rem;
  }

  &.m-15-bottom {
    margin-bottom: 1.5rem;
  }

  &.m-30-bottom {
    margin-bottom: 3rem;
  }
`;

const H3 = styled(({ ...rest }) => <Typography variant="h3" component="h3" {...rest} />)`
  && {
    font-size: 1.8rem;
    line-height: 1.25;
    @media ${device.mobileM} {
      font-size: 2rem;
    }
    @media ${device.laptopM} {
      font-size: 2.2rem;
    }
  }

  &.bold {
    font-weight: ${({ theme }) => theme.weight.bold};
  }
  &.m-15-top {
    margin-top: 1.5rem;
  }

  &.m-15-bottom {
    margin-bottom: 1.5rem;
  }

  &.m-30-bottom {
    margin-bottom: 3rem;
  }
`;

const H4 = styled(({ ...rest }) => <Typography variant="h4" component="h4" {...rest} />)`
  && {
    font-size: 1.6rem;
    line-height: 1.25;
    @media ${device.laptopM} {
      font-size: 1.8rem;
    }
  }

  &.bold {
    font-weight: ${({ theme }) => theme.weight.bold};
  }
`;

const Paragraph = styled(({ ...rest }) => <Typography component="p" {...rest} />)`
  && {
    line-height: 1.8;
  }
  &.bold {
    font-weight: ${({ theme }) => theme.weight.bold};
  }

  &.m-15-top {
    margin-top: 1.5rem;
  }

  &.m-30-bottom {
    margin-bottom: 3rem;
  }
`;

export { H1, H2, H3, H4, Paragraph };
