import { FunctionComponent } from 'react';
import DocsLayout from '../../layouts/docs';
import { ProjectSection } from '../../views/projects';
import { PROJECTS_CONFIG } from '../../../config/projects.config';

const Index: FunctionComponent = () => {
  return (
    <DocsLayout
      pageHeader={{
        pageTitle: 'Docs home',
      }}>
      <ProjectSection projects={PROJECTS_CONFIG.recentProjects} />
    </DocsLayout>
  );
};

export default Index;
