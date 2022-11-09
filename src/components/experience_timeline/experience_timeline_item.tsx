import { FunctionComponent } from 'react';

import {
  EuiText,
  EuiTimelineItem,
  EuiTitle,
  EuiFlexGroup,
  EuiFlexItem,
  EuiSpacer,
  EuiBadge,
  useEuiTheme,
} from '@elastic/eui';

import { ExperienceTimelineStyles } from './experience_timeline.styles';

export type ExperienceTimelineItemProps = {
  position: string;
  company: string;
  startDate: string;
  endDate?: string;
  location?: string;
  positionDescription: string;
};

// TO DO: Break this down a little more into ExperienceTimeline and ExperienceTimelineItem
export const ExperienceTimelineItem: FunctionComponent<
  ExperienceTimelineItemProps
> = ({
  position,
  company,
  startDate,
  endDate,
  location,
  positionDescription,
}) => {
  const euiThemeContext = useEuiTheme();
  const styles = ExperienceTimelineStyles(euiThemeContext);
  const timelineCardStyles = styles['experienceTimeline--card'];

  return (
    <EuiTimelineItem
      icon="dot"
      aria-label={`${position} at ${company}`}
      verticalAlign="top">
      <div css={timelineCardStyles}>
        <EuiFlexGroup justifyContent="flexStart" alignItems="center">
          <EuiFlexItem grow={false}>
            <EuiTitle size="s">
              <p>{position}</p>
            </EuiTitle>
          </EuiFlexItem>
          <EuiFlexItem grow={false}>
            <EuiBadge color="default">
              {startDate}
              {endDate && <span> - {endDate}</span>}
            </EuiBadge>
          </EuiFlexItem>
        </EuiFlexGroup>

        <EuiSpacer size="s" />

        <EuiFlexGroup justifyContent="spaceBetween" alignItems="center">
          <EuiFlexItem grow={false}>
            <EuiTitle size="xs">
              <p>
                {company}
                {location && <span> | {location} </span>}
              </p>
            </EuiTitle>
          </EuiFlexItem>
        </EuiFlexGroup>

        <EuiSpacer size="s" />

        <EuiText>
          <p> {positionDescription}</p>
        </EuiText>
        <EuiSpacer size="s" />
      </div>
    </EuiTimelineItem>
  );
};
