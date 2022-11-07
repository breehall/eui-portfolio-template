import { FunctionComponent } from 'react';
import { EuiText, EuiFlexGroup } from '@elastic/eui';
import DocsLayout from '../../layouts/docs';
import { ProjectSection } from '../../views/projects';

const Index: FunctionComponent = () => {
  const projectStats = [
    {
      projectTitle: 'RGB Color Game',
      projectDescription:
        'Cake sweet roll cheesecake caramels tiramisu powder cupcake powder. Pie tart chocolate cake caramels gingerbread. Bonbon halvah topping cotton candy lollipop ice cream.',
      previewImageURL: 'https://source.unsplash.com/400x200/?Nature',
      techUsed: ['html', 'css', 'javascript', 'typescript'],
      linkToDemo: 'www.google.com',
    },
    {
      projectTitle: 'RGB Color Game',
      projectDescription:
        'Cake sweet roll cheesecake caramels tiramisu powder cupcake powder. Pie tart chocolate cake caramels gingerbread. Bonbon halvah topping cotton candy lollipop ice cream.',
      previewImageURL: 'https://source.unsplash.com/400x200/?Nature',
      techUsed: ['html', 'css', 'javascript', 'typescript'],
      linkToCode: 'www.google.com',
    },
    {
      projectTitle: 'RGB Color Game',
      projectDescription:
        'Cake sweet roll cheesecake caramels tiramisu powder cupcake powder. Pie tart chocolate cake caramels gingerbread. Bonbon halvah topping cotton candy lollipop ice cream.',
      previewImageURL: 'https://source.unsplash.com/400x200/?Nature',
      techUsed: ['html', 'css', 'javascript', 'typescript'],
    },
    {
      projectTitle: 'RGB Color Game',
      projectDescription:
        'Cake sweet roll cheesecake caramels tiramisu powder cupcake powder. Pie tart chocolate cake caramels gingerbread. Bonbon halvah topping cotton candy lollipop ice cream.',
      previewImageURL: 'https://source.unsplash.com/400x200/?Nature',
      techUsed: ['html', 'css', 'javascript', 'typescript'],
      linkToDemo: 'www.google.com',
    },
    {
      projectTitle: 'RGB Color Game',
      projectDescription:
        'Cake sweet roll cheesecake caramels tiramisu powder cupcake powder. Pie tart chocolate cake caramels gingerbread. Bonbon halvah topping cotton candy lollipop ice cream.',
      previewImageURL: 'https://source.unsplash.com/400x200/?Nature',
      techUsed: ['html', 'css', 'javascript', 'typescript'],
      linkToCode: 'www.google.com',
    },
    {
      projectTitle: 'RGB Color Game',
      projectDescription:
        'Cake sweet roll cheesecake caramels tiramisu powder cupcake powder. Pie tart chocolate cake caramels gingerbread. Bonbon halvah topping cotton candy lollipop ice cream.',
      previewImageURL: 'https://source.unsplash.com/400x200/?Nature',
      techUsed: ['html', 'css', 'javascript', 'typescript'],
    },
  ];
  return (
    <DocsLayout
      pageHeader={{
        pageTitle: 'Docs home',
      }}>
      {/* <ProjectCard
        projectTitle="RGB Color Game"
        projectDescription="Cake sweet roll cheesecake caramels tiramisu powder cupcake powder. Pie tart chocolate cake caramels gingerbread. Bonbon halvah topping cotton candy lollipop ice cream."
        previewImageURL="https://source.unsplash.com/400x200/?Nature"
        techUsed={['html', 'css', 'javascript', 'typescript']}
        linkToDemo="www.google.com"
      /> */}

      <ProjectSection projects={projectStats} />
    </DocsLayout>
  );
};

export default Index;
