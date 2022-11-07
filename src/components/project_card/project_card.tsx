import {
  EuiFlexGroup,
  EuiFlexItem,
  EuiCard,
  EuiBadge,
  EuiSpacer,
  EuiButton,
} from '@elastic/eui';
import { FunctionComponent } from 'react';

type TechUsedBadge = {
  badgeTitle: string;
  badgeColor: string;
};

export type ProjectCardProps = {
  projectTitle: string;
  projectDescription: string;
  previewImageURL: string;
  techUsed: Array<TechUsedBadge>;
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
  const techUsedBadges = techUsed.map((tech, index) => {
    const { badgeTitle, badgeColor } = tech;

    return (
      <EuiFlexItem grow={false} key={index}>
        <EuiBadge color={badgeColor}>{badgeTitle}</EuiBadge>
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
