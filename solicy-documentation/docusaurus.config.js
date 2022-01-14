// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

const lightCodeTheme = require('prism-react-renderer/themes/github');
const darkCodeTheme = require('prism-react-renderer/themes/dracula');

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'Solicy',
  tagline: 'Dinosaurs are cool',
  url: 'https://your-docusaurus-test-site.com',
  baseUrl: '/',
  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',
  favicon: 'img/favicon.ico',
  organizationName: 'Solicy', // Usually your GitHub org/user name.
  projectName: 'solicy-documentation', // Usually your repo name.

  presets: [
    [
      'classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          routeBasePath: '/',
          sidebarPath: require.resolve('./sidebars.js'),
          // Please change this to your repo.
        },
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      }),
    ],
  ],

  themeConfig:
    ({
      navbar: {
        logo: {
          alt: 'My Site Logo',
          src: 'img/logo.svg',
        },
        items: [
          {
            type: 'doc',
            docId: 'intro',
            position: 'left',
            label: 'Docs',
          },
        ],
      },
      footer: {
        style: 'dark',
        links: [
          {
            items: [
              {
                label: 'Home',
                to: 'https://solicy.net/',
              },
              {
                label: 'About',
                to: 'https://solicy.net/about',
              },
              {
                label: 'Services',
                to: 'https://solicy.net/our-services',
              },
              {
                label: 'Teck Stack',
                to: 'https://solicy.net/our-services?block=tech',
              },
              {
                label: 'Careers',
                to: 'https://solicy.net/careers',
              },
            ],
          },
          {
            items: [
              {
                label: 'Feedback',
                to: 'https://solicy.net/?block=feedback',
              },
              {
                label: 'Contact Us',
                to: 'https://solicy.net/contact-us?block=contact',
              },
              {
                label: 'Terms of Use',
                to: 'https://solicy.net/terms',
              },
              {
                label: 'Privacy Policy',
                to: 'https://solicy.net/privacy',
              },
            ],
          },
          {
            title: 'Work with Us',
            items: [
              {
                label: 'contact@solicy.net',
                to: 'mailto:%20contact@solicy.net',
              },
              {
                label: '+12025550121',
                to: 'tel: +12025550121',
              },
            ],
          },
          {
            title: 'Follow Us',
            items: [
              {
                label: 'Linkedin',
                to: 'https://www.linkedin.com/company/solicy/',
              },
              {
                label: 'Twitter',
                to: 'https://mobile.twitter.com/solicydotnet',
              },
              {
                label: 'Facebook',
                to: 'https://www.facebook.com/Solicydotnet',
              },
              {
                label: 'Instagram',
                to: 'https://www.instagram.com/solicydotnet/',
              },
            ],
          },
        ],
        copyright: `© ${new Date().getFullYear()} Solicy LLC. All rights reserved.`,
      },
      prism: {
        theme: lightCodeTheme,
        darkTheme: darkCodeTheme,
      },
    }),
};

module.exports = config;
