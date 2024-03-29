import '@/styles/globals.css';
import '@/styles/markdown.css';
import 'tippy.js/dist/tippy.css';

import Script from 'next/script';
import { Viewport } from 'next';
import type { Metadata } from 'next';

import { rubik } from '@/app/fonts';

import { Providers } from '@/app/providers';

import { Analytics } from '@vercel/analytics/react';
import { SpeedInsights } from '@vercel/speed-insights/next';

import { siteConfig } from '@/config/site.config';

export const metadata: Metadata = {
    title: siteConfig.title,
    description: siteConfig.title + ' - ' + siteConfig.description,
};

export const viewport: Viewport = {
    width: 'device-width',
    height: 'device-height',
    initialScale: 1,
    minimumScale: 1,
    maximumScale: 1,
    userScalable: false,
    themeColor: '#eee',
};

export default async function RootLayout({ children, params: { locale } }: { children: React.ReactNode; params: { locale: string } }) {
    return (
        <html className={`${rubik.className}`} lang={locale}>
            <head>
                <meta name='application-name' content={siteConfig.title} />
                <meta name='apple-mobile-web-app-capable' content='yes' />
                <meta name='apple-mobile-web-app-status-bar-style' content='default' />
                <meta name='apple-mobile-web-app-title' content={siteConfig.title} />
                <meta name='description' content={siteConfig.title + '-' + siteConfig.description} />
                <meta name='format-detection' content='telephone=no' />
                <meta name='mobile-web-app-capable' content='yes' />
                <meta name='msapplication-config' content='/icons/browserconfig.xml' />
                <meta name='msapplication-TileColor' content='#2B5797' />
                <meta name='msapplication-tap-highlight' content='no' />

                <link rel='manifest' href='/manifest.json' />
                <link rel='icon' type='image/png' href='/favicon.ico' />
                <link rel='shortcut icon' type='image/png' href='/favicon.ico' />
                <link rel='apple-touch-icon' href='/icons/apple-touch-icon.png' />
                <link rel='icon' type='image/png' sizes='32x32' href='/icons/favicon-32x32.png' />
                <link rel='icon' type='image/png' sizes='16x16' href='/icons/favicon-16x16.png' />
                <link rel='mask-icon' href='/icons/safari-pinned-tab.svg' color='#5bbad5' />

                <link rel='apple-touch-startup-image' href='/images/apple_splash_2048.png' sizes='2048x2732' />
                <link rel='apple-touch-startup-image' href='/images/apple_splash_1668.png' sizes='1668x2224' />
                <link rel='apple-touch-startup-image' href='/images/apple_splash_1536.png' sizes='1536x2048' />
                <link rel='apple-touch-startup-image' href='/images/apple_splash_1125.png' sizes='1125x2436' />
                <link rel='apple-touch-startup-image' href='/images/apple_splash_1242.png' sizes='1242x2208' />
                <link rel='apple-touch-startup-image' href='/images/apple_splash_750.png' sizes='750x1334' />
                <link rel='apple-touch-startup-image' href='/images/apple_splash_640.png' sizes='640x1136' />
            </head>

            <body className='min-h-screen bg-slate-50 dark:bg-[#323233] dark:text-[#eee]'>
                <Providers>{children}</Providers>
                <Analytics />
                <SpeedInsights />
            </body>

            <Script
                defer
                src='https://cdn.jsdelivr.net/npm/katex@0.15.0/dist/katex.min.js'
                integrity='sha384-JRVVAdBKoQa7uhd8heKqlQyzByQCC57fpvrCw9iSahjP5bLB5b+hX0klEdjZmsH6'
                crossOrigin='anonymous'
            />
        </html>
    );
}
