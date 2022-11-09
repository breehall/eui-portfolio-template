import { FunctionComponent } from 'react';
import DocsLayout from '../../layouts/docs';
import { ProjectSection } from '../../views/projects';
import { ExperienceSection } from '../../views/experience';
import { PROJECTS_CONFIG } from '../../../config/projects.config';
import { EXPERIENCE_CONFIG } from '../../../config/experience.config';

import { EuiSpacer } from '@elastic/eui';

const Index: FunctionComponent = () => {
  return (
    <DocsLayout
      pageHeader={{
        pageTitle: 'Docs home',
      }}>
      <ProjectSection projects={PROJECTS_CONFIG.recentProjects} />

      <EuiSpacer size="xl" />
      <EuiSpacer size="xl" />

      <ExperienceSection experience={EXPERIENCE_CONFIG.experience} />
    </DocsLayout>
  );
};

export default Index;
