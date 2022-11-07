import { FunctionComponent } from 'react';
import {
  ProjectCard,
  ProjectCardProps,
} from '../components/project_card/project_card';
import { SectionHeader } from '../components/section_header/section_header';
import { EuiFlexGrid, EuiTitle } from '@elastic/eui';

type ProjectsSectionProps = {
  projects: Array<ProjectCardProps>;
};
export const ProjectSection: FunctionComponent<ProjectsSectionProps> = ({
  projects,
}) => {
  const projectCards = projects.map((project, index) => {
    const {
      projectTitle,
      projectDescription,
      previewImageURL,
      techUsed,
      linkToCode,
      linkToDemo,
    } = project;

    return (
      <ProjectCard
        projectTitle={projectTitle}
        projectDescription={projectDescription}
        previewImageURL={previewImageURL}
        techUsed={techUsed}
        linkToCode={linkToCode}
        linkToDemo={linkToDemo}
        key={index}
      />
    );
  });

  return (
    <section>
      <SectionHeader sectionTitle="Recent Work" />
      <EuiFlexGrid columns={3}>{projectCards}</EuiFlexGrid>
    </section>
  );
};
