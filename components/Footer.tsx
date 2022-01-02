import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className='flex flex-col justify-center items-center max-w-2xl mx-auto w-full  px-2 sm:px-2 md:px-0 '>
      <hr className='w-20 border-1 dark:border-gray-200 border-gray-800 mb-8' />
      <p className='text-gray-700 dark:text-gray-300 text-opacity-90 text-xs px-8 text-center'>
        Created with &hearts; by{' '}
        <a
          className='underline text-black dark:text-white font-semibold'
          href='https://github.com/cristicretu'
        >
          Cristian Crețu
        </a>
        . Deployed with{' '}
        <a
          className='underline text-black dark:text-white  font-semibold'
          href='https://vercel.com'
        >
          ▲ Vercel
        </a>
      </p>
    </footer>
  );
};

export default Footer;
