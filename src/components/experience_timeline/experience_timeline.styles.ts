import { css } from '@emotion/react';
import { UseEuiTheme, euiShadow } from '@elastic/eui';

export const ExperienceTimelineStyles = (euiThemeContext: UseEuiTheme) => {
  const { euiTheme } = euiThemeContext;

  return {
    'experienceTimeline--card': css`
      background-color: #fff;
      border: ${euiTheme.border.thin};
      border-radius: ${euiTheme.border.radius.medium};
      ${euiShadow(euiThemeContext, 'm')};
      padding: ${euiTheme.size.m};
    `,
  };
};
