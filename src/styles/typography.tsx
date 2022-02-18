// import { Typography } from '@mui/material';
import { Typography as MUITypography, TypographyTypeMap } from '@mui/material';
import { OverridableComponent } from '@mui/material/OverridableComponent';
import styled from 'styled-components';

const Typography = styled(MUITypography)(({ theme, variant }) => ({
  lineHeight: '1.25',
  ...(variant === 'h1' && {
    ...theme.typography.h1,
  }),
  ...(variant === 'h2' && {
    ...theme.typography.h2,
  }),
  ...(variant === 'h3' && {
    ...theme.typography.h3,
  }),
  ...(variant === 'h4' && {
    ...theme.typography.h4,
  }),
  ...(variant === 'h5' && {
    ...theme.typography.h5,
  }),
  ...(variant === 'h6' && {
    ...theme.typography.h6,
  }),
  ...(variant === 'body1' && {
    ...theme.typography.p,
  }),
})) as OverridableComponent<TypographyTypeMap<Record<string, unknown>, 'span'>>;

export { Typography };
