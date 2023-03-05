import { styled } from '@stitches/react';
import { theme } from '@/styles';

export const Header = styled('header', {
  width: '100%',
  height: '8rem',
  lineHeight: '8rem',
  borderBottom: `0.1rem solid ${theme.colors.neutrual2.value}`,
  padding: '0 2rem',
});
