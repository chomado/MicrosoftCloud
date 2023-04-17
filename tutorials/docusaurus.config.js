// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

const lightCodeTheme = require('prism-react-renderer/themes/github');
const darkCodeTheme = require('prism-react-renderer/themes/dracula');

/** @type {import('@docusaurus/types').Config} */
const config = {

  headTags: [
    {
      tagName: "script",
      attributes: {},
      innerHTML: `
      (function(c,l,a,r,i,t,y){
        c[a]=c[a]||function(){(c[a].q=c[a].q||[]).push(arguments)};
        t=l.createElement(r);t.async=1;t.src="https://www.clarity.ms/tag/"+i;
        y=l.getElementsByTagName(r)[0];y.parentNode.insertBefore(t,y);
      })(window, document, "clarity", "script", "e9evt2zm9w");
      `
    }
  ],

  title: 'Microsoft Cloud Hands-On Tutorials',
  tagline: 'Integration Scenarios Across the Microsoft Cloud',
  url: 'https://microsoft.github.io',
  baseUrl: '/MicrosoftCloud/tutorials',
  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',
  favicon: 'img/favicon.ico',

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: 'microsoft', // Usually your GitHub org/user name.
  projectName: 'MicrosoftCloud', // Usually your repo name.

  // Even if you don't use internalization, you can use this field to set useful
  // metadata like html lang. For example, if your site is Chinese, you may want
  // to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: 'en',
    locales: ['en', 'ja' ],
    path: 'i18n',
    localeConfigs: {
      en: {
        htmlLang: 'en-GB',
      },
      ja: {
        htmlLang: 'ja-JP',
      },
    },
  },

  presets: [
    [
      'classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          sidebarPath: require.resolve('./sidebars.js'),
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          // editUrl:
          //  'https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/',
        },
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      }),
    ],
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    {
      docs: {
        sidebar: {
          hideable: true,
          autoCollapseCategories: true
        }
      },
      navbar: {
        title: '',
        logo: {
          alt: 'Microsoft Cloud Hands-On Tutorials',
          src: 'img/microsoft-logo.svg',
          srcDark: 'img/microsoft-logo-dark.svg',
          href: 'https://microsoft.github.io/MicrosoftCloud',
          target: '_self'
        },
        items: [
          {
            href: '/MicrosoftCloud/tutorials/',
            position: 'right',
            label: 'Tutorials',
          },
          {
            href: 'https://www.youtube.com/channel/UCV_6HOhwxYLXAGd-JOqKPoQ?view_as=subscriber',
            position: 'right',
            label: 'YouTube',
          },
          {
            href: 'https://github.com/microsoft/MicrosoftCloud',
            label: 'GitHub',
            position: 'right',
          },
          {
            type: 'localeDropdown',
            position: 'left',
          },
        ],
      },
      prism: {
        theme: lightCodeTheme,
        darkTheme: darkCodeTheme,
        additionalLanguages: ['powershell'],
      },
    },
};

module.exports = config;
