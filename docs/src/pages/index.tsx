import React from 'react';
import clsx from 'clsx';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Layout from '@theme/Layout';

import styles from './index.module.css';

const HomepageHeader = () => {
	const { siteConfig } = useDocusaurusContext();
	return (
		<header className={clsx( 'hero hero--primary', styles.heroBanner )}>
			<div className="container">
				<h1 className="hero__title">{siteConfig.title}</h1>
				<p className="hero__subtitle">{siteConfig.tagline}</p>
				<div className={styles.buttons}>
					<Link
						className="button button--secondary button--lg"
						to="/docs/getting_started/overview">
						Getting Started
					</Link>
				</div>
			</div>
		</header>
	);
};

const Home = (): JSX.Element => {
	const { siteConfig } = useDocusaurusContext();
	return (
		<Layout
			title={`${siteConfig.title}`}
			description="A set of UI components following Amalgama's Design System">
			<HomepageHeader />
			<main>
			</main>
		</Layout>
	);
};

export default Home;
