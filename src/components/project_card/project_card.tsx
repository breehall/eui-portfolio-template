import {
  EuiFlexGroup,
  EuiFlexItem,
  EuiCard,
  EuiBadge,
  EuiSpacer,
  EuiButton,
} from '@elastic/eui';
import { FunctionComponent } from 'react';

type ProjectCardProps = {
  projectTitle: string;
  projectDescription: string;
  previewImageURL: string;
  techUsed: Array<string>;
  linkToCode?: string;
  linkToDemo?: string;
};

export const ProjectCard: FunctionComponent<ProjectCardProps> = ({
  projectTitle,
  projectDescription,
  previewImageURL,
  techUsed,
  linkToCode,
  linkToDemo,
}) => {
  // TODO: Create a config to map technologies to a specific color
  const techUsedBadges = techUsed.map((tech, index) => {
    return (
      <EuiFlexItem grow={false} key={index}>
        <EuiBadge color="default">{tech}</EuiBadge>
      </EuiFlexItem>
    );
  });

  return (
    <EuiFlexItem>
      <EuiCard
        textAlign="left"
        image={previewImageURL}
        title={projectTitle}
        description={
          <>
            <EuiSpacer size="s" />
            <EuiFlexGroup wrap responsive={false} gutterSize="xs">
              {techUsedBadges}
            </EuiFlexGroup>
            <EuiSpacer size="s" />
            {projectDescription}
          </>
        }
        footer={
          <>
            <EuiFlexGroup justifyContent="center">
              <EuiFlexItem grow={false}>
                {linkToCode && <EuiButton>View Source</EuiButton>}
              </EuiFlexItem>
              <EuiFlexItem grow={false}>
                {linkToDemo && <EuiButton>Live Demo</EuiButton>}
              </EuiFlexItem>
            </EuiFlexGroup>
          </>
        }
      />
    </EuiFlexItem>
  );
};
