import Account from '@components/Account';
import NFTCard from '@components/NFTCard';

interface IComponent {
  JSX: JSX.Element;
  editLink?: string;
  tailwindCode?: string;
  unstyledCode?: string;
  props?: Record<string, unknown>;
}

const components: IComponent[] = [
  {
    JSX: (
      <NFTCard
        author='cristicretu'
        title='Origin and Evolution#4471'
        image='/static/images/NFT.png'
        authorProfilePicture='/static/images/Pfp.png'
        timeLeft='4d 16h 32m 10s'
        price={0.74}
      />
    ),
    editLink:
      'https://github.com/cristicretu/inspo/blob/main/components/NFTCard/NFTCard.tsx',
    tailwindCode: `import Image from 'next/image';
import React from 'react';

interface NFTCardProps {
  title: string;
  author?: string;
  image?: string;
  authorProfilePicture?: string;
  timeLeft?: string;
  price?: number;
}

export default function NFTCard({
  title,
  author,
  image,
  authorProfilePicture,
  timeLeft,
  price
}: NFTCardProps): JSX.Element {
  return (
    <div className='flex flex-col p-6 space-y-6 bg-gray-200 dark:bg-gray-900 rounded-xl'>
      <div className='relative group'>
        <div className='relative h-96'>
          <Image
            src={image}
            alt='NFT'
            layout='fill'
            className='rounded-lg'
            objectFit='cover'
          />
        </div>
        <button className='absolute flex items-center invisible px-4 py-2 space-x-2 transition duration-200 transform bg-gray-900 rounded-lg cursor-pointer group-hover:visible top-1/2 left-1/2 fifty bg-opacity-70'>
          {/* .fifty {
            transform: translate(-50%, -50%);
            -ms-transform: translate(-50%, -50%);
          } */}

          {/* Star SVG */}
          <svg
            width='18'
            height='18'
            viewBox='0 0 18 18'
            fill='none'
            xmlns='http://www.w3.org/2000/svg'>
            <path
              d='M9 0L11.4308 6.56918L18 9L11.4308 11.4308L9 18L6.56918 11.4308L0 9L6.56918 6.56918L9 0Z'
              fill='#DAC50B'
            />
          </svg>
          <p className='text-gray-100'>Place a bid</p>
        </button>
      </div>
      <div className='flex items-center space-x-4'>
        <div className='relative w-12 h-12'>
          <Image
            src={authorProfilePicture}
            alt='Profile Picture'
            layout='fill'
            className='rounded-full'
            objectFit='cover'
          />
        </div>

        <div className='flex flex-col'>
          <p className='font-bold'>{title}</p>
          <p className='text-xs text-gray-500'>@{author}</p>
        </div>
      </div>
      <div className='flex items-center justify-between px-4 py-4 bg-white rounded-lg dark:bg-black'>
        <div className='flex items-center space-x-2'>
          <svg
            xmlns='http://www.w3.org/2000/svg'
            xmlnsXlink='http://www.w3.org/1999/xlink'
            aria-hidden='true'
            role='img'
            width='1em'
            height='1em'
            preserveAspectRatio='xMidYMid meet'
            viewBox='0 0 24 24'>
            <path
              d='M12 1.75l-6.25 10.5L12 16l6.25-3.75L12 1.75M5.75 13.5L12 22.25l6.25-8.75L12 17.25L5.75 13.5z'
              fill='currentColor'
            />
          </svg>
          <p className='font-semibold'>{price} ETH</p>
        </div>

        <p>{timeLeft}</p>
      </div>
    </div>
  );
}`,
    unstyledCode: ''
  },
  {
    JSX: (
      <Account
        description='Designer and Developer'
        username='cristicretu'
        profilePicture='/static/images/Pfp.png'
      />
    ),
    editLink:
      'https://github.com/cristicretu/inspo/blob/main/components/Account/Account.tsx',
    tailwindCode: `import Image from 'next/image';
import React from 'react';

interface AccountProps {
  username: string;
  profilePicture: string;
  description: string;
}
export default function Account({
  username,
  profilePicture,
  description
}: AccountProps): JSX.Element {
  return (
    <div className='flex items-center px-3 py-6 space-x-4 bg-gray-200 rounded-lg dark:bg-gray-900'>
      {profilePicture && (
        <div className='relative w-12 h-12'>
          <Image
            src={profilePicture}
            alt='Profile Picture'
            layout='fill'
            className='rounded-full'
            objectFit='cover'
          />
        </div>
      )}
      <div>
        <h1 className='text-lg font-bold grad'>@{username}</h1>
        {/* 
        .grad {
        background: black; 
        background: -webkit-linear-gradient(
          left,
          orange,
          yellow,
          green,
          cyan,
          blue,
          violet
        ); 
        background: -o-linear-gradient(
          right,
          green,
          orange,
          red,
          purple,
          blue
        ); 
        background: -moz-linear-gradient(
          right,
          green,
          orange,
          red,
          purple,
          blue
        ); 
        background: linear-gradient(
          to right,
          green,
          orange,
          red,
          purple,
          blue
        ); 

        -webkit-background-clip: text;
        -webkit-text-fill-color: transparent;
      }
        */}
        <p className='font-semibold truncate'>{description}</p>
      </div>
    </div>
  );
}`,
    unstyledCode: ''
  }
];

export default components;
