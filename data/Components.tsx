import Account from '@components/Account';
import HelpCard from '@components/HelpCard';
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
  },
  {
    JSX: (
      <HelpCard
        buttonText='Documentation'
        description='Please check our docs'
        title='Need help?'
      />
    ),
    editLink:
      'https://github.com/cristicretu/inspo/blob/main/components/HelpCard/HelpCard.tsx',
    tailwindCode: `import React from 'react';

interface IHelpCardProps {
  title: string;
  description: string;
  buttonText: string;
}

export default function HelpCard({
  title,
  description,
  buttonText
}: IHelpCardProps): JSX.Element {
  return (
    <div>
      <div className='flex flex-col p-4 text-white bg-blue-500 rounded-lg pt-14 dark:bg-blue-500 gradienta'>
        {/* 
        .gradienta {
        background: linear-gradient(
            114.95deg,
            rgba(235, 0, 255, 0.5) 0%,
            rgba(0, 71, 255, 0) 34.35%
          ),
          linear-gradient(180deg, #004b5b 0%, #ffa7a7 100%),
          linear-gradient(244.35deg, #ffb26a 0%, #3676b1 50.58%, #00a3ff 100%),
          linear-gradient(244.35deg, #ffffff 0%, #004a74 49.48%, #ff0000 100%),
          radial-gradient(100% 233.99% at 0% 100%, #b70000 0%, #ad00ff 100%),
          linear-gradient(307.27deg, #219d87 0.37%, #2650ba 50.19%, #2800c6 100%),
          radial-gradient(
            100% 140% at 100% 0%,
            #ff00c7 0%,
            #006c7a 49.48%,
            #760000 100%
          );
        background-blend-mode: hard-light, overlay, overlay, overlay, difference,
          difference, normal;
      }  */}
        <h1 className='text-lg font-bold'>{title}</h1>
        <p>{description}</p>
        <button
          type='button'
          className='mt-4 text-white myblur bg-opacity-70 hover:bg-opacity-90 transition-all bg-[#050708] hover:bg-[#050708]/90 focus:ring-4 focus:ring-[#050708]/50 font-medium rounded-lg text-sm px-5 py-2.5 dark:focus:ring-[#050708]/50 dark:hover:bg-[#050708]/30'>
          {/* .myblur {
            backdrop-filter: saturate(180%) blur(20px);
            -webkit-backdrop-filter: saturate(180%) blur(20px);
          } */}
          {buttonText}
        </button>
      </div>
    </div>
  );
}`,
    unstyledCode: ''
  }
];

export default components;
