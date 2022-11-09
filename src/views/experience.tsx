import { FunctionComponent } from 'react';
import {
  ExperienceTimeline,
  ExperienceTimelineItemProps,
  SectionHeader,
} from '../components';

type ExperienceSectionProps = {
  experience: Array<ExperienceTimelineItemProps>;
};

export const ExperienceSection: FunctionComponent<ExperienceSectionProps> = ({
  experience,
}) => {
  return (
    <section>
      <SectionHeader sectionTitle="Experience" />

      <ExperienceTimeline experienceList={experience} />
    </section>
  );
};
