// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

const lightCodeTheme = require('prism-react-renderer/themes/github');
const darkCodeTheme = require('prism-react-renderer/themes/dracula');

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'ICC 2023 Virtual Workshops',
  tagline: 'Supercharge Your Ignition Development Environments with Docker',
  favicon: 'img/favicon.ico',

  // Set the production url of your site here
  url: 'https://thirdgen88.github.io',
  // Set the /<baseUrl>/ pathname under which your site is served
  // For GitHub pages deployment, it is often '/<projectName>/'
  baseUrl: '/icc2023-docker-workshop/',

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: 'thirdgen88', // Usually your GitHub org/user name.
  projectName: 'icc2023-docker-workshop', // Usually your repo name.

  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',

  // Even if you don't use internalization, you can use this field to set useful
  // metadata like html lang. For example, if your site is Chinese, you may want
  // to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: 'en',
    locales: ['en'],
  },

  presets: [
    [
      'classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          sidebarPath: require.resolve('./sidebars.js'),
        },
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      }),
    ],
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      // // Replace with your project's social card
      // image: 'img/docusaurus-social-card.jpg',
      navbar: {
        title: 'ICC 2023 Docker Workshop',
        logo: {
          alt: 'Ignition Logo',
          src: 'img/logo.svg',
        },
        items: [
          {
            type: 'docSidebar',
            sidebarId: 'guideSidebar',
            position: 'left',
            label: 'Guide',
          },
          {
            href: 'https://github.com/thirdgen88/icc2023-docker-workshop',
            label: 'GitHub',
            position: 'right',
          },
        ],
      },
      footer: {
        style: 'dark',
        links: [
          {
            title: 'Reference Materials',
            items: [
              {
                label: 'Ignition Docker Image Docs',
                to: 'https://docs.inductiveautomation.com/display/DOC81/Docker+Image',
              },
              {
                label: 'Compose Specification',
                to: 'https://github.com/compose-spec/compose-spec/blob/master/spec.md',
              },
              {
                label: 'Traefik Docs',
                to: 'https://doc.traefik.io/traefik/',
              },
            ],
          },
          {
            title: 'Community',
            items: [
              {
                label: 'Ignition Forums',
                href: 'https://forum.inductiveautomation.com',
              },
            ],
          },
          {
            title: 'Other',
            items: [
              {
                label: 'Inductive Automation Website',
                to: 'https://inductiveautomation.com',
              },
            ],
          },
        ],
        copyright: `Copyright © ${new Date().getFullYear()} Inductive Automation, LLC. Built with Docusaurus.`,
      },
      prism: {
        theme: lightCodeTheme,
        darkTheme: darkCodeTheme,
        additionalLanguages: ['bash', 'shell-session'],
        magicComments: [
          {
            className: 'theme-code-block-highlighted-line',
            line: 'highlight-next-line',
            block: { start: 'highlight-start', end: 'highlight-end' },
          },
          {
            className: 'theme-code-block-add-line',
            line: 'add-next-line',
            block: { start: 'add-start', end: 'add-end' },
          },
          {
            className: 'theme-code-block-change-line',
            line: 'change-next-line',
            block: { start: 'change-start', end: 'change-end' },
          },
          {
            className: 'theme-code-block-remove-line',
            line: 'remove-next-line',
            block: { start: 'remove-start', end: 'remove-end' },
          },
        ],
      },
    }),
};

module.exports = config;
