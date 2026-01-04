import type {ReactNode} from 'react';
import clsx from 'clsx';
import Heading from '@theme/Heading';
import styles from './styles.module.css';

type FeatureItem = {
    title: string;
    Svg: React.ComponentType<React.ComponentProps<'svg'>>;
    description: ReactNode;
};

const FeatureList: FeatureItem[] = [
    {
        title: 'Mobile App',
        Svg: require('@site/static/img/qr_code_scan.svg').default,
        description: (
            <>
                Use the Bottle Rocket mobile app to scan documents and send them to a self-hosted server
                that you have configured.
            </>
        ),
    },
    {
        title: 'Self-hosted Solution',
        Svg: require('@site/static/img/no_cloud.svg').default,
        description: (
            <>
                Bottle Rocket is designed to be hosted on a server of your choice.
                Scanned documents are stored only on your server,
                and can only be forwarded to third party services that you have configured.
            </>
        ),
    },
    {
        title: 'Open Source',
        Svg: require('@site/static/img/github_logo.svg').default,
        description: (
            <>
                Bottle Rocket is open source and provided under the MIT license.
            </>
        ),
    }
];

function Feature({title, Svg, description}: FeatureItem) {
    return (
        <div className={clsx('col col--4')}>
            <div className="text--center">
                <Svg className={styles.featureSvg} role="img"/>
            </div>
            <div className="text--center padding-horiz--md">
                <Heading as="h3">{title}</Heading>
                <p>{description}</p>
            </div>
        </div>
    );
}

export default function HomepageFeatures(): ReactNode {
    return (
        <section className={styles.features}>
            <div className="container">
                <div className="row">
                    {FeatureList.map((props, idx) => (
                        <Feature key={idx} {...props} />
                    ))}
                </div>
            </div>
        </section>
    );
}
