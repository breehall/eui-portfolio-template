import { FunctionComponent } from 'react';
import { EuiTitle, EuiSpacer, EuiHorizontalRule } from '@elastic/eui';

type SectionHeaderProps = {
  sectionTitle: string;
};

export const SectionHeader: FunctionComponent<SectionHeaderProps> = ({
  sectionTitle,
}) => {
  return (
    <>
      <EuiTitle>
        <h2>{sectionTitle}</h2>
      </EuiTitle>
      <EuiSpacer size="xs" />
      <EuiHorizontalRule />
    </>
  );
};
