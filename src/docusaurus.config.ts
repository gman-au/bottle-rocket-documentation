import {themes as prismThemes} from 'prism-react-renderer';
import type {Config} from '@docusaurus/types';
import type * as Preset from '@docusaurus/preset-classic';
import type * as Redocusaurus from 'redocusaurus';

// This runs in Node.js - Don't use client-side code here (browser APIs, JSX...)

const config: Config = {
    title: 'Bottle Rocket',
    tagline: 'Self-hosted, Rocketbook-compatible document scanning and management',
    favicon: 'img/bottle-rocket-logo.svg',

    // Future flags, see https://docusaurus.io/docs/api/docusaurus-config#future
    future: {
        v4: true, // Improve compatibility with the upcoming Docusaurus v4
    },

    // Set the production url of your site here
    url: 'https://gman-au.github.io',
    // Set the /<baseUrl>/ pathname under which your site is served
    // For GitHub pages deployment, it is often '/<projectName>/'
    baseUrl: '/bottle-rocket-documentation/',

    // GitHub pages deployment config.
    // If you aren't using GitHub pages, you don't need these.
    organizationName: 'gman-au',
    projectName: 'bottle-rocket-documentation',
    trailingSlash: false,
    onBrokenLinks: 'throw',

    // Even if you don't use internationalization, you can use this field to set
    // useful metadata like html lang. For example, if your site is Chinese, you
    // may want to replace "en" with "zh-Hans".
    i18n: {
        defaultLocale: 'en',
        locales: ['en'],
    },

    presets: [
        [
            'classic',
            {
                docs: {
                    sidebarPath: './sidebars.ts'
                },
                theme: {
                    customCss: './src/css/custom.css',
                },
            } satisfies Preset.Options,
        ],
        [
            'redocusaurus',
            {
                specs: [
                    {
                        spec: 'openapi/Rocket.Api.Host.json',
                        route: '/api/',
                    },
                ],
                theme: {
                    primaryColor: '#1890ff',
                },
            },
        ] satisfies Redocusaurus.PresetEntry,
    ],

    themeConfig: {
        // Replace with your project's social card
        image: 'img/docusaurus-social-card.jpg',
        colorMode: {
            respectPrefersColorScheme: true,
        },
        navbar: {
            title: 'Bottle Rocket',
            logo: {
                alt: 'Bottle Rocket Logo',
                src: 'img/bottle-rocket-logo.svg',
            },
            items: [
                {
                    type: 'docSidebar',
                    sidebarId: 'documentationSidebar',
                    position: 'left',
                    label: 'Documentation',
                },
                {
                    to: '/api',
                    position: 'left',
                    label: 'API Reference'
                }
            ],
        },
        footer: {
            copyright: `Copyright © ${new Date().getFullYear()} G-MAN Solutions, Inc. Built with Docusaurus.`,
        },
        prism: {
            theme: prismThemes.github,
            darkTheme: prismThemes.dracula,
        },
    } satisfies Preset.ThemeConfig,
};

export default config;
