import {
  EuiHeader,
  EuiHeaderLogo,
  useGeneratedHtmlId,
  EuiPageTemplate,
  EuiSideNav,
  htmlIdGenerator,
  EuiImage,
  EuiFlexGroup,
  EuiFlexItem,
  EuiSpacer,
  EuiTitle,
  EuiBadge,
} from '@elastic/eui';

import { HomePageStyles } from './docs.styles';

const pathPrefix = process.env.PATH_PREFIX;

const DocsLayout = ({ pageHeader, children }) => {
  const sideNav = [
    {
      id: htmlIdGenerator('basicExample')(),
      items: [
        {
          name: 'Home',
          id: htmlIdGenerator('basicExample')(),
          href: `${pathPrefix}/docs`,
        },
        {
          name: 'Page 2',
          id: htmlIdGenerator('basicExample')(),
          href: `${pathPrefix}/docs/page-2`,
        },
      ],
    },
  ];

  const styles = HomePageStyles();
  const imageStyles = styles.profileImage;
  const nameStyles = styles.profileName;

  const sideBarContents = (
    <>
      <EuiImage
        size="l"
        hasShadow
        alt="Many small white-spotted pink jellyfish floating in a dark aquarium"
        src="https://images.unsplash.com/photo-1650253618249-fb0d32d3865c?w=900&h=900&fit=crop&q=60"
        css={imageStyles}
      />

      <EuiSpacer />

      <EuiFlexGroup justifyContent="center">
        <EuiFlexItem grow={false}>
          <EuiTitle size="s" css={nameStyles}>
            <h1>Bree Hall</h1>
          </EuiTitle>
          <EuiSpacer size="xs" />
          <EuiTitle size="xs" css={nameStyles}>
            <p>Software Engineer</p>
          </EuiTitle>
        </EuiFlexItem>
      </EuiFlexGroup>

      <EuiSpacer />

      <EuiSideNav mobileTitle="Nav Items" items={sideNav} />
    </>
  );

  return (
    <EuiPageTemplate>
      <EuiPageTemplate.Header {...pageHeader} />
      <EuiPageTemplate.Sidebar sticky={true}>
        {sideBarContents}
      </EuiPageTemplate.Sidebar>
      <EuiPageTemplate.Section>{children}</EuiPageTemplate.Section>
    </EuiPageTemplate>
  );
};

export default DocsLayout;
