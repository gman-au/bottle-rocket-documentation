import type {ReactNode} from 'react';
import clsx from 'clsx';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Layout from '@theme/Layout';
import HomepageFeatures from '@site/src/components/HomepageFeatures';
import GooglePlayBadge from '@site/static/img/google-play-badge.png';
import ScribzeeLogo from '@site/static/img/scribzeeLogo.png';
import RocketbookLogo from '@site/static/img/rocketbookLogo.png';
import Heading from '@theme/Heading';
import styles from './index.module.css';

function HomepageHeader() {
    const {siteConfig} = useDocusaurusContext();
    return (
        <header className={clsx('hero hero--rocket', styles.heroBanner)}>
            <div className="container">
                <Heading as="h1" className="hero__title">
                    {siteConfig.title}
                </Heading>
                <p className="hero__subtitle">{siteConfig.tagline}</p>
                <a target={"_blank"} href={"https://play.google.com/store/apps/details?id=au.com.gman.bottlerocket"}>
                    <img style={{maxHeight: "140px"}} src={GooglePlayBadge} alt="Get it on Google Play"/>
                </a>
            </div>
        </header>
    );
}

function CompanyLogos() {
    return (

        <div className={styles.companyLogos}>
            <img src={RocketbookLogo} alt="Rocketbook Logo"/>
            <img src={ScribzeeLogo} alt="Scribzee Logo"/>
        </div>
    )
}

export default function Home(): ReactNode {
    const {siteConfig} = useDocusaurusContext();
    return (
        <Layout
            title={`${siteConfig.title}`}
            description="Bottle Rocket documentation site">
            <HomepageHeader/>
            <main>
                <CompanyLogos/>
                <HomepageFeatures/>
            </main>
        </Layout>
    );
}
