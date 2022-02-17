import styled from 'styled-components';
import { Button as MUIButton } from '@mui/material';

// https://mui.com/guides/styled-engine/#how-to-switch-to-styled-components

// TO DO read about shouldForwardProp
// shouldForwardProp: (prop) =>
//   shouldForwardProp(prop) &&
//   prop !== "variant" &&
// import { shouldForwardProp } from "@mui/system";

const Button = styled(MUIButton)(({ theme, variant }) => ({
  cursor: 'pointer',
  ...(variant === 'contained' && {
    backgroundColor: theme.colors.darkGrey,
    color: theme.colors.white,
    '&:hover': {
      backgroundColor: theme.colors.white,
      color: theme.colors.darkGrey,
    },
  }),

  ...(variant === 'text' && {
    color: theme.colors.lightBrown,
  }),
}));

const ButtonText = styled(({ ...rest }) => <MUIButton variant="text" {...rest} />)`
  && {
    color: ${({ theme }) => theme.colors.darkGrey};
  }
`;

const ButtonContained = styled(({ ...rest }) => <MUIButton variant="contained" {...rest} />)`
  && {
    color: ${({ theme }) => theme.colors.white};
    background-color: ${({ theme }) => theme.colors.darkGrey};
  }
`;

const ButtonSubmit = styled(({ ...rest }) => <MUIButton variant="contained" {...rest} />)`
  && {
    color: ${({ theme }) => theme.colors.white};
    background-color: ${({ theme }) => theme.colors.darkBrown};
  }
`;

const ButtonOutlined = styled(({ ...rest }) => <MUIButton variant="outlined" {...rest} />)`
  && {
    color: ${({ theme }) => theme.colors.darkGrey};
    background-color: ${({ theme }) => theme.colors.transparent};
    border: 1px solid ${({ theme }) => theme.colors.darkGrey};
  }
`;

export { ButtonContained, ButtonOutlined, ButtonText, ButtonSubmit, Button };
