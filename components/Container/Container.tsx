import React, { useEffect, useState } from 'react';

import Footer from '@components/Footer';
import Head from 'next/head';
import Link from 'next/link';
import useKeypress from 'react-use-keypress';
import { useRouter } from 'next/dist/client/router';
import { useTheme } from 'next-themes';

export default function Container(props) {
  const [Mounted, setMounted] = useState<boolean>(false);
  const { resolvedTheme, setTheme } = useTheme();

  const { children, ...customMeta } = props;
  const router = useRouter();

  const meta = {
    title: 'Inspo',
    description: 'Creative inspiration.',
    image: 'https://inspo.cretu.dev/static/images/Header.png',
    type: 'website',
    ...customMeta
  };

  useEffect(() => {
    setMounted(true);
  }, []);

  useKeypress('t', () => {
    if (Mounted === true) setTheme(resolvedTheme === 'dark' ? 'light' : 'dark');
  });
  useKeypress('h', () => {
    router.back();
  });

  return (
    <div className='min-h-screen bg-white dark:bg-black'>
      <Head>
        <title>{meta.title}</title>
        <meta name='robots' content='follow, index' />
        <meta content={meta.description} name='description' />
        <meta
          property='og:url'
          content={`https://inspo.cretu.dev${router.asPath}`}
        />
        <link
          rel='canonical'
          href={`https://inspo.cretu.dev${router.asPath}`}
        />
        <meta property='og:type' content={meta.type} />
        <meta property='og:site_name' content='Template' />
        <meta property='og:description' content={meta.description} />
        <meta property='og:title' content={meta.title} />
        <meta property='og:image' content={meta.image} />
        <meta name='twitter:card' content='summary_large_image' />
        <meta name='twitter:site' content='@cristicrtu' />
        <meta name='twitter:title' content={meta.title} />
        <meta name='twitter:description' content={meta.description} />
        <meta name='twitter:image' content={meta.image} />
        {meta.date && (
          <meta property='article:published_time' content={meta.date} />
        )}
      </Head>

      <div className='absolute grid grid-cols-3 sticky-nav w-80 md:w-112'>
        <div>
          <div className='w-48 bg-red-500 md:w-96 h-7'></div>
          <div className='w-48 h-6 bg-yellow-500 md:w-96 md:h-7'></div>
        </div>

        <div>
          <div className='w-48 bg-blue-500 md:w-96 h-7'></div>
          <div className='w-48 h-6 bg-red-500 md:w-96 md:h-7'></div>
        </div>

        <div>
          <div className='w-48 bg-green-500 md:w-96 h-7'></div>
          <div className='w-48 h-6 bg-blue-500 md:w-96 md:h-7'></div>
        </div>
      </div>
      <nav className='flex items-center justify-between w-full px-4 py-3 mx-auto text-gray-900 bg-opacity-50 sticky-nav sm:px-8 md:px-16 lg:px-40 dark:text-gray-100'>
        <div className='flex items-center space-x-2 text-base'>
          <Link href='/'>
            <a className='text-lg font-bold tracking-tight text-center md:text-2xl'>
              Inspo.
            </a>
          </Link>
          <p className='text-sm md:text-md'>
            - Get inspiration for your React Components.
          </p>
        </div>

        <a
          href='https://github.com/cristicretu/inspo'
          target='_blank'
          rel='noreferrer'
          aria-label='Github'>
          <svg
            xmlns='http://www.w3.org/2000/svg'
            width='18'
            height='18'
            viewBox='0 0 24 24'
            className='text-gray-900 transition-all duration-500 fill-current dark:text-white dark:text-opacity-40 dark:hover:text-opacity-100 text-opacity-40 hover:text-opacity-100 '>
            <path d='M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z' />
          </svg>
        </a>
      </nav>
      <main id='skip' className='flex flex-col justify-center px-2'>
        <div className='mb-4 text-gray-800 dark:text-gray-200'>{children}</div>
        <Footer />
      </main>
    </div>
  );
}
