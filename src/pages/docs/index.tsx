import { FunctionComponent } from 'react';
import { EuiText, EuiFlexGroup } from '@elastic/eui';
import DocsLayout from '../../layouts/docs';
import { ProjectCard } from '../../components/project_card/project_card';

const Index: FunctionComponent = () => {
  return (
    <DocsLayout
      pageHeader={{
        pageTitle: 'Docs home',
      }}>
      <EuiText>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean a erat
          sed arcu imperdiet eleifend eu vel ante. Nam dapibus lacus id
          efficitur luctus. Nunc vitae viverra erat, at euismod metus. Nam nec
          nulla ornare, aliquam arcu in, luctus diam. Phasellus convallis lorem
          fringilla, dapibus lectus in, pretium dui. Pellentesque massa nulla,
          tempus ut elit at, scelerisque commodo eros. Proin interdum libero
          aliquam, volutpat justo ut, posuere nulla.
        </p>
      </EuiText>

      <EuiFlexGroup gutterSize="l">
        <ProjectCard
          projectTitle="RGB Color Game"
          projectDescription="Cake sweet roll cheesecake caramels tiramisu powder cupcake powder. Pie tart chocolate cake caramels gingerbread. Bonbon halvah topping cotton candy lollipop ice cream."
          previewImageURL="https://source.unsplash.com/400x200/?Nature"
          techUsed={['html', 'css', 'javascript', 'typescript']}
          linkToCode="www.google.com"
          linkToDemo="www.google.com"
        />
        <ProjectCard
          projectTitle="RGB Color Game"
          projectDescription="Cake sweet roll cheesecake caramels tiramisu powder cupcake powder. Pie tart chocolate cake caramels gingerbread. Bonbon halvah topping cotton candy lollipop ice cream."
          previewImageURL="https://source.unsplash.com/400x200/?Nature"
          techUsed={['html', 'css', 'javascript', 'typescript']}
          linkToCode="www.google.com"
        />
        <ProjectCard
          projectTitle="RGB Color Game"
          projectDescription="Cake sweet roll cheesecake caramels tiramisu powder cupcake powder. Pie tart chocolate cake caramels gingerbread. Bonbon halvah topping cotton candy lollipop ice cream."
          previewImageURL="https://source.unsplash.com/400x200/?Nature"
          techUsed={['html', 'css', 'javascript', 'typescript']}
          linkToDemo="www.google.com"
        />
      </EuiFlexGroup>
    </DocsLayout>
  );
};

export default Index;
