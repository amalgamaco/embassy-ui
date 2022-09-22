/* eslint-disable @typescript-eslint/no-var-requires */
// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

const lightCodeTheme = require( 'prism-react-renderer/themes/github' );
const darkCodeTheme = require( 'prism-react-renderer/themes/dracula' );

/** @type {import('@docusaurus/types').Config} */
const config = {
	title: 'Amalgama\'s UI Kit',
	tagline: 'A components library to help users build Design Systems.',
	url: process.env.URL || 'https://amalgama.pages.amalgama.co',
	baseUrl: process.env.BASE_URL || '/',
	onBrokenLinks: 'throw',
	onBrokenMarkdownLinks: 'warn',
	favicon: 'img/favicon.ico',

	// GitHub pages deployment config.
	// If you aren't using GitHub pages, you don't need these.
	organizationName: 'facebook', // Usually your GitHub org/user name.
	projectName: 'docusaurus', // Usually your repo name.

	// Even if you don't use internalization, you can use this field to set useful
	// metadata like html lang. For example, if your site is Chinese, you may want
	// to replace "en" with "zh-Hans".
	i18n: {
		defaultLocale: 'en',
		locales: [ 'en' ]
	},

	presets: [
		[
			'classic',
			/** @type {import('@docusaurus/preset-classic').Options} */
			( {
				docs: {
					sidebarPath: require.resolve( './sidebars.js' ),
					// Please change this to your repo.
					// Remove this to remove the "edit this page" links.
					editUrl:
						'https://git.amalgama.co/amalgama/packages/npm/react-native-ui-kit/-/tree/docs'
				},
				blog: {
					showReadingTime: true,
					// Please change this to your repo.
					// Remove this to remove the "edit this page" links.
					editUrl:
					'https://git.amalgama.co/amalgama/packages/npm/react-native-ui-kit/-/tree/docs'
				},
				theme: {
					customCss: require.resolve( './src/css/custom.css' )
				}
			} )
		]
	],

	plugins: [
		'docusaurus-plugin-react-native-web',
		'./src/plugins/docusaurus-link-library-plugin'
	],

	stylesheets: [
		'https://fonts.googleapis.com/css2?family=Epilogue:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap',
		'https://fonts.googleapis.com/css2?family=Inter:wght@100;200;300;400;500;600;700;800;900&display=swap'
	],

	themeConfig:
		/** @type {import('@docusaurus/preset-classic').ThemeConfig} */
		( {
			navbar: {
				title: 'Amalgama\'s UI Kit',
				logo: {
					alt: 'Amalgama\'s Logo',
					src: 'img/logo.svg'
				},
				items: [
					{
						type: 'doc',
						docId: 'getting_started',
						position: 'left',
						label: 'Docs'
					},
					{
						label: 'Figma',
						href: 'https://www.figma.com/file/X7a5bxxsP6hXXpNEzpMhoj/Design-System-RRSS',
						position: 'right'
					},
					{
						label: 'Example App',
						href: 'https://ui-kit.amalgama.co',
						position: 'right'
					},
					{
						label: 'GitLab',
						href: 'https://git.amalgama.co/amalgama/packages/npm/react-native-ui-kit',
						position: 'right'
					}
				]
			},
			prism: {
				theme: lightCodeTheme,
				darkTheme: darkCodeTheme
			}
		} )
};

module.exports = config;
