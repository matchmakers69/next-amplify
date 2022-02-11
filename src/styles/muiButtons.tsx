import styled from 'styled-components';
import { Button } from '@mui/material';

const ButtonText = styled(({ ...rest }) => <Button variant="text" {...rest} />)`
  && {
    color: ${({ theme }) => theme.colors.darkGrey};
  }
`;

const ButtonContained = styled(({ ...rest }) => <Button variant="contained" {...rest} />)`
  && {
    color: ${({ theme }) => theme.colors.white};
    background-color: ${({ theme }) => theme.colors.darkGrey};
  }
`;

const ButtonSubmit = styled(({ ...rest }) => <Button variant="contained" {...rest} />)`
  && {
    color: ${({ theme }) => theme.colors.white};
    background-color: ${({ theme }) => theme.colors.darkBrown};
  }
`;

const ButtonOutlined = styled(({ ...rest }) => <Button variant="outlined" {...rest} />)`
  && {
    color: ${({ theme }) => theme.colors.darkGrey};
    background-color: ${({ theme }) => theme.colors.transparent};
    border: 1px solid ${({ theme }) => theme.colors.darkGrey};
  }
`;

export { ButtonContained, ButtonOutlined, ButtonText, ButtonSubmit };
