import styled from 'styled-components';
import { Button as MUIButton } from '@mui/material';

// https://mui.com/guides/styled-engine/#how-to-switch-to-styled-components

// TO DO read about shouldForwardProp
// shouldForwardProp: (prop) =>
//   shouldForwardProp(prop) &&
//   prop !== "variant" &&
// import { shouldForwardProp } from "@mui/system";

// For Next.js
// "@mui/material": "^5.4.0",
//   "@mui/styled-engine": "^5.1.0",
//     "@mui/styled-engine-sc": "^5.1.0",
//       "resolutions": {
//   "@mui/styled-engine": "npm:@mui/styled-engine-sc@latest"
// },

const Button = styled(MUIButton)(({ theme, variant }) => ({
  cursor: 'pointer',
  color: theme.colors.lightGrey,
  ...(variant === 'contained' && {
    color: theme.colors.olive,
  }),

  ...(variant === 'text' && {
    color: theme.colors.lightBrown,
  }),
  '&:hover': {
    backgroundColor: theme.colors.errorRed,
  },
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
