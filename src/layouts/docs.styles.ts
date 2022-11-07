import { css } from '@emotion/react';

export const HomePageStyles = () => ({
  profileImage: css`
    border-radius: 50%;
    border: 10px solid #abb4c4;
  `,

  profileName: css`
    text-align: center;
  `,

  sideNavLinks: css`
    .euiSideNavItemButton {
      text-align: center;
    }
    .euiSideNavItem::hover {
      text-decoration: none;
      border-bottom: 3px solid #07c;
      background-color: blue;
    }
  `,
});
