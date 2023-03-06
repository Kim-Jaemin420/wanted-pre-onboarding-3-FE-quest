import { styled } from '@stitches/react';
import { theme } from '@/styles';

export const Sidebar = styled('nav', {
  width: '25rem',
  padding: '2rem 3rem',
  borderRight: `0.08rem solid ${theme.colors.neutrual2.value}`,
});

export const SidebarList = styled('ul', {
  '& > li': {
    'height': '3rem',
    '&:after': {
      content: '',
      display: 'block',
      width: '100%',
      height: '0.1rem',
      backgroundColor: `${theme.colors.neutrual.value}`,
    },
    'margin': '2rem 0',
  },
});
