import { FunctionComponent } from 'react';

import { EuiTimeline } from '@elastic/eui';

import {
  ExperienceTimelineItem,
  ExperienceTimelineItemProps,
} from './experience_timeline_item';

export type ExperienceTimelineProps = {
  experienceList: Array<ExperienceTimelineItemProps>;
};

export const ExperienceTimeline: FunctionComponent<ExperienceTimelineProps> = ({
  experienceList,
}) => {
  return (
    <EuiTimeline aria-label="Experience timeline">
      {experienceList.map((exp, index) => {
        const {
          position,
          company,
          startDate,
          endDate,
          location,
          positionDescription,
        } = exp;

        return (
          <ExperienceTimelineItem
            key={index}
            position={position}
            company={company}
            startDate={startDate}
            endDate={endDate}
            location={location}
            positionDescription={positionDescription}
          />
        );
      })}
    </EuiTimeline>
  );
};
